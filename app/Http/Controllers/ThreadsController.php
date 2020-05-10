<?php

namespace App\Http\Controllers;

use App\Tags;
use App\User;
use App\Thread;
use App\Channel;
use App\Trending;
use http\Env\Request;
use App\Rules\Recaptcha;
use App\Filters\ThreadFilters;
use App\Notifications\ThreadPostFacebook;

use function GuzzleHttp\Promise\all;
use App\Notifications\ThreadWasReported;

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

        if(request()->hasFile('image_path')){
            $rule = 'image|max:2048';
        }else{
            $rule = '';
        }

        if(request('source') ==null){
            $source = '';
        }else{            
            $source = 'url';
            //|active_url
        }

        request()->validate([
            // 'tags'  =>  'required|array|min:1',
            //'source'    =>  $source,
            'title' => 'required|spamfree',
            'body' => 'required|spamfree',
            'channel_id' => 'required|exists:channels,id',
             //'g-recaptcha-response' => ['required', $recaptcha],
            'image_path'    => $rule

        ],[
            'channel_id.required'    => 'The channel field is required.',
            'channel_id.exists'    => 'Invalid channel',
            'g-recaptcha-response.required' =>  'Please solve the captcha',
            'image_path.max'    =>  'Thread image may not be greater than 2048 kilobytes'
        ]);

        
        
        // $user = auth()->user();
        $arr_ip = geoip()->getLocation($_SERVER['REMOTE_ADDR']);

        $thread = Thread::create([
            'user_id' => $authUser->id,
            'channel_id' => request('channel_id'),
            'title' => request('title'),
            'body' => request('body'),
            'word_count'   => str_word_count(request('body')),
            'location'  =>  request('location') == null ? '' : request('location'),
            'source'  =>  request('source') == null ? '' : request('source'),
            'main_subject'  =>  request('main_subject') == null ? '' : request('main_subject'),
            'is_famous'  =>  request('is_famous',0),
            'allow_image'  =>  request('allow_image',0),
            'lat'   => $arr_ip['lat'],
            'lng'   => $arr_ip['lon'],

        ]);



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
            $tag  = Tags::where('name', ucfirst($main_subject))->first();
            if($tag){
                $thread->tags()->sync([$tag->id]);
                $new_tags[] = $tag->id;
            }else{
                $tag = Tags::create(['name'=>ucfirst($main_subject)]);
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
                    $tag = Tags::create(['name'=>ucfirst($tag)]);
                    $new_tags[]= $tag->id;
                }
            }
            $thread->tags()->sync($new_tags);
        }
        if($authUser->userprivacy->thread_create_share_facebook ==1){
            $thread->notify(new ThreadPostFacebook);
        }
        
        

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
        if (auth()->check()) {
            auth()->user()->read($thread);
        }

        $trending->push($thread);

        $thread->increment('visits');
        



        $allTags = Tags::all();
        
        $threadTags = $thread->tags;

        $relatedThreads = [];

        foreach($threadTags as $tag){
            //$threads = $tag->threads;
            $threads = $tag->threads()->without(['creator', 'likes','tags'])->get();
            // dd($threads);
            //books = App\Book::without('author')->get();

            if($threads->count()){              

                foreach($threads as $relatedThread){
                    if($thread->id != $relatedThread->id){
                        $relatedThreads[] = $relatedThread;
                    }
                    
                }
            }
  
        }


        $collection = collect($relatedThreads);
        if($collection->count() > 4){
            $random =$collection->random(5);
        }else{
            $random =  $collection->random($collection->count());
        }
        
        $relatedThreads= $random;


        return view('threads.show', compact('thread','allTags','relatedThreads'));
    }

    /**
     * Update the given thread.
     *
     * @param string $channel
     * @param Thread $thread
     */
    public function update($channel, Thread $thread)
    {
        //return request('tags');

       $this->authorize('update', $thread);

       if(request()->hasFile('image_path')){
            $rule = 'image|max:2048';
        }else{
            $rule = '';
        }


        if(request('source') ==null){
            $source = '';
        }else{            
            $source = 'url';
            //|active_url
        }

        request()->validate([
            //'source'    =>  $source,
            'title' => 'required',
            'channel_id' => 'required',
            'body' => 'required',
            'image_path'    => $rule

        ]);

        $arr_ip = geoip()->getLocation($_SERVER['REMOTE_ADDR']);

        $data = [
            'title' => request('title'),
            //'channel_id'    => request('channel_id'),
            'body' => request('body'),
            'word_count'   => str_word_count(request('body')),
            'location'  =>  request('location') == null ? "" : request('location'),
            'source'  =>  request('source') == null ? "" : request('source'),
            'main_subject'  =>  request('main_subject') == null ? '' : request('main_subject'),
            // 'is_famous'  =>  (request('is_famous') == 'true')  ? 1 : 0,
            'is_famous'  =>  request('is_famous',0),
            'allow_image'  =>  request('allow_image',0),
            'lat'   => $arr_ip['lat'],
            'lng'   => $arr_ip['lon'],
        ];

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
            $tag  = Tags::where('name', ucfirst($main_subject))->first();
            if($tag){
                $thread->tags()->sync([$tag->id]);
                $new_tags[] = $tag->id;
            }else{
                $tag = Tags::create(['name'=>ucfirst($main_subject)]);
                $thread->tags()->sync([$tag->id]);
                $new_tags[] = $tag->id;
            }
        }


        if(\request()->has('tags')){
            $tags = json_decode(\request('tags'));


            //$tags = \request('tags');

            
            

            foreach($tags as $tag){

                $bool = ( !is_int($tag) ? (ctype_digit($tag)) : true );
                
                if($bool){
                    $new_tags[] = $tag;
                }
                else{
                    $tag = Tags::create(['name'=>$tag]);
                    $new_tags[]= $tag->id;
                }
            }



            $thread->tags()->sync($new_tags);
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

}
