<?php

namespace App\Http\Controllers;

use App\Thread;
use Illuminate\Http\Request;
use App\Traits\ThreadPrivacy;
use Illuminate\Support\Collection;
use Illuminate\Pagination\Paginator;
use Illuminate\Validation\Rules\Unique;
use Illuminate\Pagination\LengthAwarePaginator;

class SearchController extends Controller
{
    use ThreadPrivacy;
    public function search(Request $request)
    {
        unset($request['page']);
        $query = request('query');

        // $total = Thread::search($query)->paginate()->total();
        // $threads = Thread::search($query)->paginate($total)->load('emojis');
        // return response()->json($threads);
        // dd($threads->all());
        
        
        if ($query == '') {
            return redirect()->back();
        }
        $threads = $this->filterSearch($query);
        $tags = [];
        foreach($threads as $thread){
            $split_tags = explode(',',  $thread->tag_names);
            $tags = array_merge($tags, $split_tags);
        }
        $new_array = array_unique($tags);
        $tags = $this->convert_from_latin1_to_utf8_recursively($new_array);

        $pageTitle = 'Search Threads';
        return view('threads.search', [
            'threads'   =>  $threads,
            'query'     => $query,
            'pageTitle' => $pageTitle,
            'tags'      => $tags
        ]);

        // if (request()->expectsJson()) {
        //     if ($query == '') {
        //         $threads = Thread::all();
        //     } else {
        //         $threads = $this->filterSearch($query);
        //     }

        //     return $threads;
        // }
    }

    public function filterSearch($query)
    {
       

        // $threads = Thread::search($query)->paginate(3,'page',5);
        $total = Thread::search($query)->paginate()->total();
        $threads = Thread::search($query)->paginate($total)->load('emojis');
        $allThreads = $threads->all();
        $collect = collect($allThreads);       
        
        if(auth()->check()){
            $user = auth()->user();
            $privacy = $user->userprivacy;

            $filterThreads = $collect->filter(function($threads) use($user, $privacy){
                
                if ($privacy->restricted_18 == 1) {
                    return true;
                } else if ($user->id == 1) {
                    return true;
                } else if( $threads->user_id == $user->id){
                    return true;
                } else if ($privacy->restricted_13 == 1) {
                    return ($threads->age_restriction != 18) ;
                    
                } else {
                    return ($threads->age_restriction == 0);
                }
            });
        }else{
            $filterThreads = $collect->filter(function($threads){
                return $threads->age_restriction == 0;
            });
        }

        $title_array = [];
        $body_array = [];
        $tags_array = [];
        $other_array = [];
        foreach($filterThreads as $thread){
            // $regex = "/({$query})/i";
            $regex = "/\s?({$query})/i";
           
             if(preg_match($regex, $thread->title, $matches))
             {
                $title_array[] = $thread;
             }             
             else if(preg_match($regex, $thread->body, $matches))
             {
                $body_array[] = $thread;
             }
             
             if(preg_match($regex, $thread->tag_names, $matches))
             {
                $tags_array[] = $thread;
             }else {
                 $other_array[] = $thread;
             }
 
        }   
    
        return $tags_array;

        $newThreads = array_merge($title_array, $body_array, $tags_array);
        
        $threads = $this->convert_from_latin1_to_utf8_recursively($newThreads);
        $threads = $this->convertToObject($threads);
        return $threads;
    }

}
