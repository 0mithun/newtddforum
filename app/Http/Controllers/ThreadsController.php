<?php

namespace App\Http\Controllers;

use App\Tags;
use App\User;
use App\Thread;
use App\Channel;
use App\Trending;
use http\Env\Request;
use App\Rules\Recaptcha;
use Spatie\Geocoder\Geocoder;
use App\Filters\ThreadFilters;
use Illuminate\Validation\Rule;


use function GuzzleHttp\Promise\all;
use App\Notifications\ThreadPostTwitter;
use App\Notifications\ThreadWasReported;
use App\Notifications\ThreadPostFacebook;

class ThreadsController extends Controller
{
    /**
     * Create a new ThreadsController instance.
     */
    public function __construct()
    {
        $this->middleware('auth')->except(['index', 'show','loadByTag']);
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
        $tags = Tags::orderBy('name','ASC')->get();
        return view('threads.create',compact('tags'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Rules\Recaptcha $recaptcha
     * @return \Illuminate\Http\Response
     */
    public function store(Recaptcha $recaptcha)
    {
        

        $authUser = auth()->user();
        // $arr_ip = geoip()->getLocation($_SERVER['REMOTE_ADDR']);
        $rule = request()->hasFile('image_path') ? 'image|max:2048' : '';

        request()->validate([
            'title' => 'required|spamfree',
            'body' => 'required|spamfree',
            'channel_id' => 'required|exists:channels,id',
             //'g-recaptcha-response' => ['required', $recaptcha],
            'image_path'    => $rule,
            'age_restriction'  => 'numeric', Rule::in([0, 13, 18]),

        ],[
            'channel_id.required'    => 'The channel field is required.',
            'channel_id.exists'    => 'Invalid channel',
            'g-recaptcha-response.required' =>  'Please solve the captcha',
            'image_path.max'    =>  'Thread image may not be greater than 2048 kilobytes'
        ]);
        
                
        $data = [
            'user_id' => $authUser->id,
            'channel_id' => request('channel_id'),
            'title' => request('title'),
            'body' => request('body'),
            'word_count'   => str_word_count(request('body')),
            'location'  =>  request('location') == null ? '' : request('location'),
            'source'  =>  request('source') == null ? '' : request('source'),
            'main_subject'  =>  request('main_subject') == null ? '' : request('main_subject'),
            'is_famous'  =>  request('is_famous',0),
            'age_restriction'  =>  request('age_restriction',0),
            'allow_image'  =>  request('allow_image',0),
        ];

        if(request('location') !=null){
            $location = $this->getGeocodeing(request('location'));
            if($location['accuracy'] != 'result_not_found'){
                $data['lat'] = $location['lat'];
                $data['lng'] = $location['lng'];
            }
        }

        $thread = Thread::create($data);

        $file_path = '';
        if (request()->hasFile('image_path')) {
            $extension = request()->file('image_path')->getClientOriginalExtension();
            $file_name = $thread->id.".".$extension;
            $file_path = request()->image_path->storeAs('threads', $file_name);
            $thread->image_path= 'uploads/'. $file_path;

        }

        
        $thread->save();
        $thread = $thread->fresh();

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



        if(request()->has('tags')){
            $tags = \request('tags');          
            
            foreach($tags as $tag){
                $bool = ( !is_int($tag) ? (ctype_digit($tag)) : true );
                if($bool){
                    $new_tags[] = $tag;
                }
                else{
                    $tag = Tags::create(['name'=>strtolower($tag)]);
                    $new_tags[]= $tag->id;
                }
            }
            $thread->tags()->sync($new_tags);
        }

        $this->sendNotification($thread, $authUser);

        if (request()->wantsJson()) {
            return response($thread, 201);
        }

        return redirect($thread->path())
            ->with('flash', 'Your thread has been published!');
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
    public function update($channel, Thread $thread)
    {
        // return response()->json(request()->all());

       $this->authorize('update', $thread);
       $authUser = auth()->user();
        
        $rule = request()->hasFile('image_path') ? 'image|max:2048' : '';

        request()->validate([
            'title' => 'required',
            'channel_id' => 'required',
            'body' => 'required',
            'image_path'    => $rule,
            // 'age_restriction'  => 'numeric', Rule::in([0, 13, 18]),

        ]);
        
        $data = [
            'title' => request('title'),
            'body' => request('body'),
            'word_count'   => str_word_count(request('body')),
            'location'  =>  request('location') == null ? "" : request('location'),
            'source'  =>  request('source') == null ? "" : request('source'),
            'main_subject'  =>  request('main_subject') == null ? '' : request('main_subject'),
            'is_famous'  =>  request('is_famous',0),
            // 'age_restriction'  =>  request('age_restriction',0),
            'allow_image'  =>  request('allow_image',0),
        ];

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
        // return response()->json(request()->all());

        $this->sendNotification($thread, $authUser);

        return $thread;
    }

    /**
     * Delete the given thread.
     *
     * @param        $channel
     * @param Thread $thread
     * @return mixed
     */
    public function destroy($channel, Thread $thread)
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

        return $threads->paginate(10);
    }

    public function report(){
        $id = \request('id');
        $reason = \request('reason');
        $thread = Thread::findOrFail($id);

        $thread->notify(new ThreadWasReported($thread, $reason));
        return $thread;
    }

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

    public function getGeocodeing($address){
        $client = new \GuzzleHttp\Client();

        $geocoder = new Geocoder($client);

        $geocoder->setApiKey(config('geocoder.key'));

        $geocoder->setCountry(config('geocoder.country', 'US'));

        return $geocoder->getCoordinatesForAddress($address);
    }

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
