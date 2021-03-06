<?php

namespace App\Http\Controllers;

use App\Tags;
use App\User;
use App\Admin;
use App\Thread;
use App\Channel;
use App\Trending;
use App\Rules\Recaptcha;
use Illuminate\Http\Request;
use App\Traits\ThreadPrivacy;
use Spatie\Geocoder\Geocoder;
use App\Filters\ThreadFilters;
use App\Jobs\WikiImageProcess;
use Illuminate\Validation\Rule;
use Illuminate\Support\Collection;
use App\Jobs\DownloadThreadImageJob;
use function GuzzleHttp\Promise\all;
use Illuminate\Pagination\Paginator;
use App\Notifications\DownloadYourImage;
use App\Notifications\ThreadPostTwitter;
use App\Notifications\ThreadPostFacebook;
use App\Http\Requests\CreateThreadRequest;
use App\Http\Requests\UpdateThreadRequest;
use App\ThreadView;
use Carbon\Carbon;
use Illuminate\Pagination\LengthAwarePaginator;

use DB;

class ThreadsController extends Controller
{
    use ThreadPrivacy;

    public $perPage = 10;
    /**
     * Create a new ThreadsController instance.
     */
    public function __construct()
    {
        $this->middleware('auth')->except(['index', 'show', 'loadByTag', 'getTrending']);
        $this->middleware('userban')->only(['create', 'update', 'destroy']);
        $this->middleware('must-be-confirmed')->only(['create', 'update', 'destroy']);
        $this->middleware('throttle:10')->only(['show']);
    }

    /**
     * Display a listing of the resource.
     *
     * @param  Channel      $channel
     * @param ThreadFilters $filters
     * @param \App\Trending $trending
     * @return \Illuminate\Http\Response
     */
    public function index(Channel $channel, ThreadFilters $filters)
    {   
        $threads = $this->getThreads($channel, $filters);
        $totalRecords = $threads->count();
        $threads = $this->generateCurrentPageResults($threads, $this->perPage); 
        $threads = $this->convert_from_latin1_to_utf8_recursively($threads->toArray());
        $threads = $this->convertToObject($threads);

        
        if (request()->wantsJson()) {
            return $threads;
        }
        $admin = Admin::first();

       


        return view('threads.index', [
            'threads'   =>  $threads,
            'pageTitle' => $admin->app_title,
            'per_page'  => $this->perPage,
            'current_page'  => (request('page') && request('page') != '') ? request('page') : 1,
            'total_records' => $totalRecords,


        ]);
    }

  

    /**
     * Display the specified resource.
     *
     * @param  integer      $channel
     * @param  \App\Thread  $thread
     * @param \App\Trending $trending
     * @return \Illuminate\Http\Response
     */
    // public function show($channel, Thread $thread, Trending $trending)
    public function show($channel, Thread $thread)
    {
        $this->authorize('show', $thread);

        $thread->increment('visits');
        $thread->views()->create([]); 
        // DB::table('views')->insert(['thread_id' => $thread->id]);


        // $relatedThreads = $this->getRelatedThread( $thread );
        $pageTitle = $thread->title;

        

        return view('threads.show', compact('thread', 'pageTitle'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $channel = Channel::select(['id', 'name'])->orderBy('name', 'ASC')->get();
        $pageTitle = 'Add new Thread';

        return view('threads.create', compact('channel', 'pageTitle'));
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
            'user_id'                => $authUser->id,
            'title'                  => $request->title,
            'body'                   => $request->body,
            'word_count'             => str_word_count($request->body),
            'source'                 => $request->source == null ? '' : $request->source,
            'location'               => $request->location == null ? '' : $request->location,
            'main_subject'           => $request->main_subject == null ? '' : $request->main_subject,
            'wiki_info_page_url'     => $request->wiki_info_page_url == null ? '' : $request->wiki_info_page_url,
            'wiki_image_description' => $request->wiki_image_description == null ? '' : $request->wiki_image_description,
            'cno'                    => $request->cno == null ? '' : $request->cno,
            'age_restriction'        => $request->age_restriction ? $request->age_restriction : 0,
            'anonymous'              => request('anonymous', 0),
        ];

        if ($request->location != null) {
            $location = $this->getGeocodeing($request->location);
            if ($location['accuracy'] != 'result_not_found') {
                $data['lat'] = $location['lat'];
                $data['lng'] = $location['lng'];
            }
        }

        $channel = '';
        if ($request->has('channel') && $request->channel != null) {
            $channel = json_decode($request->channel);
            
            $type = gettype($channel);
            if($type == 'string'){
                $findChannel = Channel::where('name', $channel)->first();
                if($findChannel){
                    $data['channel_id'] = $findChannel->id;
                }
            }else{
                $data['channel_id'] = $channel->id;
            }
        } else {
            $data['channel_id'] = 2;
        }

        $thread = Thread::create($data);

        $this->uploadThreadImages($request, $thread);
        $this->attachTags($request, $thread);

        if (request('wiki_info_page_url') != '') {
            // WikiImageProcess::dispatch(request('wiki_info_page_url'), $thread, false);
            dispatch(new DownloadThreadImageJob(request('wiki_info_page_url'), $thread));
            $auth_user->notify(new DownloadYourImage($thread));
        }

        if ($request->expectsJson()) {
            return response()->json(['status' => 'success', 'thread' => $thread], 200);
        }

        return redirect($thread->path())
            ->with('flash', 'Your thread has been published!');
    }

    /**
     * Edit Thread
     * @param string $slug
     */

    public function edit(Thread $thread)
    {
      
        $channel = Channel::select(['id', 'name'])->orderBy('name', 'ASC')->get();

        $pageTitle = 'Edit: ' . $thread->title;

        return view('threads.edit', compact('channel', 'thread', 'pageTitle'));
    }

    /**
     * Update the given thread.
     *
     * @param string $channel
     * @param Thread $thread
     */
    public function update(UpdateThreadRequest $request, Thread $thread)
    {
        $this->authorize('update', $thread);
        $authUser = auth()->user();

        $data = [
            'title'                  => $request->title,
            'body'                   => $request->body,
            'word_count'             => str_word_count($request->body),
            'source'                 => $request->source == null ? '' : $request->source,
            'location'               => $request->location == null ? '' : $request->location,
            'main_subject'           => $request->main_subject == null ? '' : $request->main_subject,
            'wiki_info_page_url'     => $request->wiki_info_page_url == null ? '' : $request->wiki_info_page_url,
            'wiki_image_description' => $request->wiki_image_description == null ? '' : $request->wiki_image_description,
            'cno'                    => $request->cno == null ? '' : $request->cno,
            'age_restriction'        => $request->age_restriction ? $request->age_restriction : 0,
            'anonymous'              => request('anonymous', 0),
            'is_published'           => $thread->is_published == 1 ? 1 : ($authUser->id ==1 ? 1 : 0)
        ];

        // if ($request->location != null) {
        //     $location = $this->getGeocodeing($request->location);
        //     if ($location['accuracy'] != 'result_not_found') {
        //         $data['lat'] = $location['lat'];
        //         $data['lng'] = $location['lng'];
        //     }
        // }

        $channel = '';
        if ($request->has('channel') && $request->channel != null) {
            $channel = json_decode($request->channel);
            // $data['channel_id'] = $channel->id;
             
            $type = gettype($channel);
            if($type == 'string'){
                $findChannel = Channel::where('name', $channel)->first();
                if($findChannel){
                    $data['channel_id'] = $findChannel->id;
                }
            }else{
                $data['channel_id'] = $channel->id;
            }
        } else {
            $data['channel_id'] = 2;
        }

       if($authUser->id ==1){
           $data['is_published'] = 1;
           $data['flagged'] = null;
           $data['slug'] = str_slug(strip_tags($request->title)); 
       }

        $thread->update($data);
        $thread = $thread->fresh();
       

        $this->uploadThreadImages($request, $thread);
        $this->attachTags($request, $thread);

        if (request('wiki_info_page_url') != '') {
            // WikiImageProcess::dispatch(request('wiki_info_page_url'), $thread, false);
            dispatch(new DownloadThreadImageJob(request('wiki_info_page_url'), $thread));
            $authUser->notify(new DownloadYourImage($thread));
        }

        if ($request->expectsJson()) {
            return response()->json(['status' => 'success', 'thread' => $thread], 200);
        }

        return response()->json(['thread'=> $thread]);

        // return redirect($thread->path())
        //     ->with('flash', 'Your thread has been published!');
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
        $thread_thumb = $thread->image_path;
        if (file_exists($thread_thumb)) {
            unlink($thread_thumb);
        }
        session()->flash('success', 'Thread delete Successfully');

        if (request()->wantsJson()) {
            return response([], 204);
        }

        // return redirect('/');
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
        // $threads = Thread::latest()->filter( $filters );

        $threads = Thread::latest();
        $this->filterThreads($threads);

        if (request()->path() == '/') {
            $threads->getQuery()->orders = [];
            // $threads->whereColumn('like_count', '>', 'dislike_count')->orderByRaw('like_count - (dislike_count + 1 ) DESC');
            // $threads->whereColumn('like_count', '>', 'dislike_count')->orderByRaw('like_count - dislike_count DESC');

            $threads
            // >whereColumn('like_count', '>', 'dislike_count')
            ->orderByRaw('like_count - dislike_count DESC');
        } elseif(request()->query('trending') == '1'){
            $treanding = ThreadView::where('created_at','>=',Carbon::now()->subHours(24))
            ->select('thread_id', DB::raw('count(*) as total'))
            ->orderBy('total','desc')
            ->groupBy('thread_id')
            ->pluck('thread_id')
            ->toArray()
            ;
            // ->limit(3)
            // ->get()
            // ->load('thread')
            // ->pluck('thread');
           
            $threads = Thread::whereIn('id', $treanding);

            
            return $threads;
    
        } else {
            $threads->latest()->filter($filters);
        }

        if ($channel->exists) {
            $threads->where('channel_id', $channel->id);
        }
        return $threads;
    }


    /**
     * Paginate Filter Threads
     */
    //currently not used

    public function paginate($items, $perPage = 2, $page = null)
    {
        $page = $page ?: (Paginator::resolveCurrentPage() ?: 1);
        $items = $items instanceof Collection ? $items : Collection::make($items);

        return new LengthAwarePaginator($items->forPage($page, $perPage), $items->count(), $perPage, $page, [
            'path'     => Paginator::resolveCurrentPath(),
            'pageName' => 'page',
        ]);
    }

    /**
     * Get Threads by tag
     */
    public function loadByTag($tagname)
    {
        
        $tag = Tags::where('name', \request('tagname'))->first();

        if (!$tag) {
            $channel = Channel::where('name', ucfirst($tagname))->first();
            if ($channel) {
                $tag = Tags::create(['name' => strtolower($channel->name)]);
            } else {
                abort(404);
            }
        }


        // $threads = Thread::where('tag_names','LIKE', "%{$tag->name}%");
        $threads = $tag->threads();

        
        $this->filterThreads($threads);
        
        $totalRecords = $threads->count();
        $threads = $this->generateCurrentPageResults($threads, $this->perPage);

     
        $threads = $this->convert_from_latin1_to_utf8_recursively($threads->toArray());
        // $tag = $this->convert_from_latin1_to_utf8_recursively($tag->toArray());
       
        return view('threads.threadsbytag', [
            'tag' => $tag,
            'threads'   =>  $threads,
            'current_page'  => (request('page') && request('page') != '') ? request('page') : 1,
            'total_records' => $totalRecords,
        ]);
    }
    
   
    
    /**
     * Get lat, lng with thread location
     */

    public function getGeocodeing($address)
    {
        $client = new \GuzzleHttp\Client();

        $geocoder = new Geocoder($client);

        $geocoder->setApiKey(config('geocoder.key'));

        $geocoder->setCountry(config('geocoder.country', 'US'));

        return $geocoder->getCoordinatesForAddress($address);
    }


    /**
     * Uplod Thread Images
     */

    public function uploadThreadImages($request, $thread)
    {
        if ($request->hasFile('image_path')) {
            $thread_thumb = $thread->image_path;
            if (file_exists($thread_thumb)) {
                unlink($thread_thumb);
            }

            $extension = $request->file('image_path')->getClientOriginalExtension();
            $file_name = $thread->id . "." . $extension;
            $file_path = $request->image_path->storeAs('threads', $file_name);
            $thread->image_path = 'uploads/' . $file_path;
            $thread->image_path_pixel_color = $this->getImageColorAttribute('uploads/' . $file_path);        


            $thread->save();
        }
    }

    /**
     * Get Image color attribute from image
     *
     * @param string $image_path
     * @return void
     */
    public function getImageColorAttribute($image_path)
    {
        if ($image_path != '') {
            $splitName = explode('.', $image_path);
            $extension = strtolower(array_pop($splitName));

            if ($extension == 'jpg') {
                $im = imagecreatefromjpeg($image_path);
            }
            if ($extension == 'jpeg') {
                $im = imagecreatefromjpeg($image_path);
            } else if ($extension == 'png') {
                $im = imagecreatefrompng($image_path);
            } else if ($extension == 'gif') {
                $im = imagecreatefromgif($image_path);
            }

            if (isset($im)) {
                $rgb = imagecolorat($im, 0, 0);
                $colors = imagecolorsforindex($im, $rgb);
                array_pop($colors);
                array_push($colors, 1);
                $rgbaString = join(', ', $colors);

                return $rgbaString;
            }
        }
        return '';
    }

    /**
     * Attacg & Save Thread Tags
     */

    public function attachTags($request, $thread)
    {
        $tags = [];
        $tag_names = '';
        if ($request->has('tags') && $request->tags != null) {
            $tags = explode(',', $request->tags);
            $tag_names = $request->tags;
        }

        if ($request->has('channel') && $request->channel != null) {
            $channel = json_decode($request->channel);
             
            $type = gettype($channel);
            if($type == 'string'){
                $findChannel = Channel::where('name', $channel)->first();
                if($findChannel){
                    if (!in_array(\strtolower($findChannel->name), $tags)) {
                        $tags[] = \strtolower($findChannel->name);
                    }
                }
            }else{
                if (!in_array(\strtolower($channel->name), $tags)) {
                    $tags[] = \strtolower($channel->name);
                }
            }

            
        }

        $main_subject = $request->main_subject;
        if ($request->has('main_subject') && $request->main_subject != null) {
            if (!in_array(\strtolower($request->main_subject), $tags)) {
                $tags[] = \strtolower($request->main_subject);
            }
        }

        $tag_ids = [];
        foreach ($tags as $tag) {
            $searchTag = Tags::where('name', strtolower($tag))->first();

            if ($searchTag) {
                $tag_ids[] = $searchTag->id;
            } else {
                if ($tag != 'null') {
                    $newTag = Tags::create(['name' => strtolower($tag)]);
                    $tag_ids[] = $newTag->id;
                }
            }
            // $thread->tags()->delete();
        }

        $thread->tags()->sync($tag_ids);
        if($tag_names != ''){
            $thread->tag_names = $tag_names;
            $thread->save();
        }
    }

    /**
     * Share Thread
     */

    public function share(Request $request)
    {
        $thread = Thread::where('id', $request->thread)->first();
        $authUser = auth()->user();

        //Send user Notification
        if ($authUser->userprivacy->thread_create_share_facebook == 1) {
            return response()->json('under default facebook');
            $thread->notify(new ThreadPostFacebook);
        } else if ($request->has('share_on_facebook') && $request->share_on_facebook == true) {
            $thread->notify(new ThreadPostFacebook);
        }

        //Send user Notification
        if ($authUser->userprivacy->thread_create_share_twitter == 1) {
            return response()->json('under default twitter');
            $thread->notify(new ThreadPostTwitter);
        } else if ($request->has('share_on_twitter') && $request->share_on_twitter == true) {
            $thread->notify(new ThreadPostTwitter);
        }
    }

    /***
     * Get all trending item
     */

    public function getTrending(Trending $trending)
    {


        $treanding = ThreadView::where('created_at','>=',Carbon::now()->subHours(24))
        ->select('thread_id', DB::raw('count(*) as total'))
        ->orderBy('total','desc')
        ->groupBy('thread_id')
        // ->limit(3)
        ->get()
        ->load('thread')
        ->pluck('thread');





        // $trendingThreads = $trending->get();
        $trendingThreads = $treanding;
        if (auth()->check()) {
            $auth_user = auth()->user();
            $threads = collect($trendingThreads)->filter(function ($thread) use ($auth_user) {
                if ($thread->age_restriction == 0) {
                    return true;
                } elseif ($auth_user->id == 1) {
                    return true;
                } elseif ($thread->user_id == $auth_user->id) {
                    return true;
                } elseif ($auth_user->userprivacy->restricted_18 == 1) {
                    return true;
                } elseif ($auth_user->userprivacy->restricted_13 == 1 && $thread->age_restriction == 13) {
                    return true;
                }
            })->values();
        } else {
            $threads = collect($trendingThreads)->filter(function ($thread) {
                return $thread->age_restriction == 0;
            })->values();
        }

        $threads = $threads->map(function($thread){
            $thread->title = html_entity_decode($thread->title);
            return $thread;
        });

        $threads =$this->convert_from_latin1_to_utf8_recursively($threads->toArray());

        return response()->json($threads);
    }

    public function getSingleThread(Thread $thread)
    {
        return response()->json($thread);
    }

    public function getAllTags(){
        if(request()->has('q')){
            $query = request()->q;
            // $tags = Tags::where('name','LIKE',"%$query%")->distinct()->orderBy('name', 'ASC')->limit(5)->get()->pluck('name');
            $tags = Tags::where('name','LIKE',"$query%")->orderBy('name', 'ASC')->limit(5)->get()->pluck('name');
        }else{
            $tags = Tags::orderBy('name', 'ASC')->limit(5)->get()->pluck('name');
        }

        $tags = $tags->map(function ($tag) {
            return \trim(strtolower($tag));
        });
     
        $tags = $this->convert_from_latin1_to_utf8_recursively($tags->all());

        return $tags;
    }
}
