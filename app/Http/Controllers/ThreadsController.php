<?php

namespace App\Http\Controllers;

use App\Tags;
use App\User;
use App\Thread;
use App\Channel;
use App\Trending;
use App\Rules\Recaptcha;
use Illuminate\Http\Request;
use Spatie\Geocoder\Geocoder;
use App\Filters\ThreadFilters;
use App\Jobs\WikiImageProcess;

use Illuminate\Validation\Rule;
use Illuminate\Support\Collection;
use function GuzzleHttp\Promise\all;

use Illuminate\Pagination\Paginator;
use App\Notifications\ThreadPostTwitter;
use App\Notifications\ThreadWasReported;
use App\Notifications\ThreadPostFacebook;
use App\Http\Requests\CreateThreadRequest;
use Illuminate\Pagination\LengthAwarePaginator;

class ThreadsController extends Controller
{
    /**
     * Create a new ThreadsController instance.
     */
    public function __construct()
    {
        $this->middleware('auth')->except(['index', 'show','loadByTag']);
        $this->middleware('userban')->only(['create', 'update','destroy']);
    }

    /**
     * Display a listing of the resource.
     *
     * @param  Channel      $channel
     * @param ThreadFilters $filters
     * @param \App\Trending $trending
     * @return \Illuminate\Http\Response
     */
    public function index(Channel $channel, ThreadFilters $filters, Trending $trending)
    {
        $threads = $this->getThreads($channel, $filters);
        if(auth()->check()){
            $user = auth()->user();
            $privacy = $user->userprivacy;
            if($privacy->restricted_18 ==1){
                $threads = collect($threads->get());
            }else if($user->id ==1){
                $threads = collect($threads->get());
            }
            else if($privacy->restricted_13 ==1){
                $collect = collect($threads->get());
                $threads = $collect->filter(function($thread) use($user){
                    if($thread->user_id == $user->id){
                        return true;
                    }else if($thread->age_restriction != 18){
                        return true;
                    }
                });
            } else{                
                $collect = collect($threads->get()); 
                $threads = $collect->filter(function($thread) use($user){
                    if($thread->user_id == $user->id){
                        return true;
                    }else if($thread->age_restriction == 0){
                        return true;
                    }
                });
            }


        }else{
            $collect = collect($threads->get());
            $threads = $collect->where('age_restriction', 0);
        }

        $threads = $this->paginate($threads, 10);

        if (request()->wantsJson()) {
            return $threads;
        }

        return view('threads.index', [
            'threads' => $threads,
            'trending' => $trending->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $tags = Tags::orderBy('name','ASC')->get()->pluck('name');
        $tags = $tags->map(function($tag){
            return \strtolower($tag);
        });

        $channel = Channel::select(['id','name'])->orderBy('name', 'ASC')->get();
        return view('threads.create',compact('tags','channel'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Rules\Recaptcha $recaptcha
     * @return \Illuminate\Http\Response
     */
    public function store(CreateThreadRequest $request)
    {  
        $authUser = auth()->user();
        $data = [
            'user_id'           =>  $authUser->id,
            'title'             =>  $request->title,
            'body'              =>  $request->body,
            'word_count'        =>  str_word_count($request->body),
            'source'            =>  $request->source == null ? '' : $request->source,
            'location'          =>  $request->location == null ? '' : $request->location,
            'main_subject'      =>  $request->main_subject == null ? '' : $request->main_subject,
            'wiki_info_page_url'=>  $request->wiki_info_page_url == null ? '' : $request->wiki_info_page_url,
            'wiki_info_page_url'=>  $request->wiki_image_description == null ? '' : $request->wiki_image_description,
            'cno'               =>  $request->cno == null ? '' : $request->cno,
            'age_restriction'   =>  $request->age_restriction ? $request->age_restriction : 0,
            'anonymous'         =>  request('anonymous', 0),
        ];

        if($request->location !=null){
            $location = $this->getGeocodeing($request->location);
            if($location['accuracy'] != 'result_not_found'){
                $data['lat'] = $location['lat'];
                $data['lng'] = $location['lng'];
            }
        }

        $channel = '';
        if($request->has('channel') && $request->channel !=null){
            $channel = json_decode($request->channel);
            $data['channel_id'] = $channel->id;
        }else{
            $data['channel_id'] = 1;
        }

        $thread = Thread::create($data);

        $this->uploadThreadImages($request, $thread);
        $this->attachTags($request, $thread);
        

        
        // if(request('wiki_info_page_url') != ''){
        //     WikiImageProcess::dispatch(request('wiki_info_page_url'), $thread, false);
        // }

        if($request->expectsJson()){
            return response()->json(['status'=>'success', 'thread'=>$thread], 200);
        }

        return redirect($thread->path())
            ->with('flash', 'Your thread has been published!');
    }

    /**
     * Uplod Thread Images
     */

     public function uploadThreadImages($request, $thread){
        $file_path = '';
        if ($request->hasFile('image_path')) {
            $extension = $request->file('image_path')->getClientOriginalExtension();
            $file_name = $thread->id.".".$extension;
            $file_path = $request->image_path->storeAs('threads', $file_name);
            $thread->image_path= 'uploads/'. $file_path;
            $thread->save();
        }
     }


    /**
     * Attacg & Save Thread Tags
     */

    public function attachTags($request, $thread){
        $tags = [];
        if($request->has('tags') && $request->tags !=null){
            $tags = explode(',', $request->tags);
        }


        if($request->has('channel') && $request->channel !=null){
            $channel = json_decode($request->channel);
            if(!in_array(\strtolower($channel->name), $tags)){
                $tags[] = \strtolower($channel->name);
            }
        }


        $main_subject = $request->main_subject;
        if($request->has('main_subject') && $request->main_subject !=null){
            if(!in_array(\strtolower($request->main_subject), $tags)){
                $tags[] = \strtolower($request->main_subject);
            }
        }

        $tag_ids = [];
        foreach($tags as $tag){
            $searchTag  = Tags::where('name', strtolower($tag))->first();
            
            if($searchTag){
                $tag_ids[] = $searchTag->id;
            }else{
                $newTag = Tags::create(['name'=>strtolower($tag)]);
                $tag_ids[] = $newTag->id;
            }
            // $thread->tags()->delete();
        }
        
        $thread->tags()->sync($tag_ids);

    }

    /**
     * Share Thread
     */

     public function share(Request $request){
        $thread = Thread::where('id', $request->thread)->first();
        $authUser = auth()->user();
        $this->sendNotification($thread, $authUser);
     }


    /**
     * Display the specified resource.
     *
     * @param  integer      $channel
     * @param  \App\Thread  $thread
     * @param \App\Trending $trending
     * @return \Illuminate\Http\Response
     */
    public function show($channel, Thread $thread, Trending $trending)
    {
        $this->authorize('show', $thread);

        $trending->push($thread);
        $thread->increment('visits');       

        $relatedThreads = $this->getRelatedThread($thread);
        return view('threads.show', compact('thread','relatedThreads'));
    }

    /**
     * Update the given thread.
     *
     * @param string $channel
     * @param Thread $thread
     */
    public function update(Thread $thread)
    {
        

       $this->authorize('update', $thread);
       $authUser = auth()->user();
        
        $rule = request()->hasFile('image_path') ? 'image|max:2048' : '';

        request()->validate([
            'title' => 'required',
            'channel_id' => 'required',
            'body' => 'required',
            'image_path'    => $rule,
        ]);
        
        $data = [
            'title' => request('title'),
            'body' => request('body'),
            'word_count'   => str_word_count(request('body')),
            'location'  =>  request('location') == null ? "" : request('location'),
            'source'  =>  request('source') == null ? "" : request('source'),
            'main_subject'  =>  request('main_subject') == null ? '' : request('main_subject'),
            'wiki_info_page_url'  =>  request('wiki_info_page_url') == null ? '' : request('wiki_info_page_url'),
            'anonymous'  =>  request('anonymous'),
        ];

        if(request()->has('category')){
            $category = request('category');
            $category = str_replace(",",'|', $category);
            $data['category'] = $category;
        }

        if(request('location') !=null){
            $location = $this->getGeocodeing(request('location'));
            if($location['accuracy'] != 'result_not_found'){
                $data['lat'] = $location['lat'];
                $data['lng'] = $location['lng'];
            }
        }

        if(\request('channel_id') != 'undefined'){
            $data[ 'channel_id']    = request('channel_id');
        }

        if (request()->hasFile('image_path')) {
            $extension = request()->file('image_path')->getClientOriginalExtension();
            $file_name = $thread->id.".".$extension;
            $file_path = request()->image_path->storeAs('threads', $file_name);
            $data['image_path']  = 'uploads/'. $file_path;
        }
        $old_wiki_info_page_url = $thread->wiki_info_page_url;
        $thread->update($data);

        $main_subject = \request('main_subject');
        $new_tags = [];
        if(\request()->has('main_subject') && \request('main_subject') !=null){
            $tag  = Tags::where('name', strtolower($main_subject))->first();
            if($tag){
                $thread->tags()->sync([$tag->id]);
                $new_tags[] = $tag->id;
            }else{
                $tag = Tags::create(['name'=>strtolower($main_subject)]);
                $thread->tags()->sync([$tag->id]);
                $new_tags[] = $tag->id;
            }
        }


        if(\request()->has('tags')){
            $tags = json_decode(\request('tags'));
            
            foreach($tags as $tag){
                $bool = ( !is_int($tag) ? (ctype_digit($tag)) : true );
                
                if($bool){
                    $new_tags[] = $tag;
                }
                else{                    
                    $findTag  = Tags::where('name', strtolower($tag))->first();
                    if($findTag){
                        $new_tags[] = $findTag->id;
                    }else{                        
                        $createTag = Tags::create(['name'=>strtolower($tag)]);
                        $new_tags[]= $createTag->id;

                    }
                }
            }
            $thread->tags()->sync($new_tags);
        }

        $this->sendNotification($thread, $authUser);
        
        if($old_wiki_info_page_url != request('wiki_info_page_url') && request('wiki_info_page_url') != ''){
            WikiImageProcess::dispatch(request('wiki_info_page_url'), $thread, true);
        }

        return $thread;
    }

    /**
     * Delete the given thread.
     *
     * @param        $channel
     * @param Thread $thread
     * @return mixed
     */
    public function destroy(Thread $thread)
    {
        $this->authorize('update', $thread);

        $thread->delete();

        if (request()->wantsJson()) {
            return response([], 204);
        }

        return redirect('/threads');
    }

    /**
     * Fetch all relevant threads.
     *
     * @param Channel       $channel
     * @param ThreadFilters $filters
     * @return mixed
     */
    protected function getThreads(Channel $channel, ThreadFilters $filters)
    {
        $threads = Thread::latest()->filter($filters);
        if ($channel->exists) {
            $threads->where('channel_id', $channel->id);
        }
        return $threads;
    }

    /**
     * Paginate Filter Threads
     */

    public function paginate($items, $perPage = 2, $page = null){
        $page = $page ?: (Paginator::resolveCurrentPage() ?: 1);
        $items = $items instanceof Collection ? $items : Collection::make($items);
        return new LengthAwarePaginator($items->forPage($page, $perPage), $items->count(), $perPage, $page, [
        'path' => Paginator::resolveCurrentPath(),
        'pageName' => 'page',
        ]);
    }




    /**
     * Get Threads by tag
     */
    public function loadByTag($tag, Trending $trending){
        $tag = Tags::where('name', \request('tag'))->first();

        if($tag){
            $threads = $tag->threads;
            $trending = $trending->get();
            return view('threads.threeadsbytag',compact('threads', 'trending'));
        }else{
            abort(404);
        }

    }

    /**
     * Get lat, lng with thread location
     */

    public function getGeocodeing($address){
        $client = new \GuzzleHttp\Client();

        $geocoder = new Geocoder($client);

        $geocoder->setApiKey(config('geocoder.key'));

        $geocoder->setCountry(config('geocoder.country', 'US'));

        return $geocoder->getCoordinatesForAddress($address);
    }


    /**
     * Get Related Threads
     */

    public function getRelatedThread($thread){
         //Related Threads
         $threadTags = $thread->tags->pluck('id')->all();       
         $relatedThreads = [];
         $relatedThreads = Thread::whereHas('tags', function ($q) use ($threadTags) {
             $q->whereIn('id',$threadTags)
             ; // or email <> ''
         })
         ->whereNotIn('id',[$thread->id])
         ->get();
         $relatedThreads = collect($relatedThreads);
         
         if(auth()->check()){
             $auth_user = auth()->user();
             $relatedThreads = $relatedThreads->filter(function($value, $key) use($auth_user){
                 if($value->age_restriction == 0){
                     return true;
                 }else if($value->user_id == $auth_user->id){
                    return true;
                }else if($auth_user->id ==1){
                    return true;
                }else if($auth_user->userprivacy->restricted_18==1){
                     return true;
                }else if($value->age_restriction ==13 && $auth_user->userprivacy->restricted_13==1){
                    return true;
                }
             });
         }else{
             $relatedThreads = $relatedThreads->filter(function($value, $key){
                 if($value->age_restriction == 0){
                     return true;
                 }
             });
         }
         if($relatedThreads->count()>4){
             $relatedThreads = $relatedThreads->random(5);
         }

         return $relatedThreads;
    }



    /**
     * Send Notification to users
     */
    public function sendNotification($thread, $authUser){
         //Send user Notification
        if($authUser->userprivacy->thread_create_share_facebook ==1){
            return response()->json('under default facebook');
           $thread->notify(new ThreadPostFacebook);
       }else if(request()->has('share_on_facebook') && request('share_on_facebook') =='true'){
           $thread ->notify(new ThreadPostFacebook);  
       }
       
        //Send user Notification
       if($authUser->userprivacy->thread_create_share_twitter ==1){
           return response()->json('under default twitter');
           $thread ->notify(new ThreadPostTwitter);
       }
       else if(request()->has('share_on_twitter') &&  request('share_on_twitter') =='true'){
           $thread ->notify(new ThreadPostTwitter);  
       }
    }

    
}
