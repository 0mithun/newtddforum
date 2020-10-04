<?php

namespace App\Http\Controllers;

use App\Thread;
use App\Traits\ThreadPrivacy;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Collection;
use Illuminate\Validation\Rules\Unique;

class SearchController extends Controller
{
    use ThreadPrivacy;
    public function search()
    {
        $query = request('query');
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
        $threads = Thread::search($query)->paginate()->load('emojis');
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

        foreach($filterThreads as $thread){
            if(stripos($thread->title, $query)){
                $title_array[] = $thread;
            } else if(stripos($thread->body, $query)){
                $body_array[] = $thread;
            }
            else if(stripos($thread->tag_names, $query)){
                $tags_array[] = $thread;
            }
        }

        $newThreads = array_merge($title_array, $body_array, $tags_array);

        // $threads = $this->convert_from_latin1_to_utf8_recursively($filterThreads->toArray());
        $threads = $this->convert_from_latin1_to_utf8_recursively($newThreads);
        $threads = $this->convertToObject($threads);
        return $threads;
    }

}
