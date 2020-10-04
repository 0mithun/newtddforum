<?php

namespace App\Http\Controllers;

use App\Thread;
use App\Traits\ThreadPrivacy;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Collection;

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

        $pageTitle = 'Search Threads';

        return view('threads.search', [
            'threads'   =>  $threads,
            'query'     => $query,
            'pageTitle' => $pageTitle,
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

        $threads = $this->convert_from_latin1_to_utf8_recursively($filterThreads->toArray());
        $threads = $this->convertToObject($threads);
return $threads;
        dd($threads);
 

        // if (auth()->check()) {
        //     $user = auth()->user();
        //     $privacy = $user->userprivacy;
        //     if ($privacy->restricted_18 == 1) {
        //         // $threads = Thread::search($query)
        //         //     ->paginate(10)
        //         //     ->load('emojis');
        //         // $collect = collect($threads);
        //     } else if ($privacy->restricted_13 == 1) {
        //         $threads = Thread::search($query)
        //             ->paginate()
        //             ->load('emojis');

        //         $collect = collect($threads);
        //         $threads = $collect->where('age_restriction', '!=', 18);
        //     } else {
        //         $threads = Thread::search($query)
        //             ->paginate()
        //             ->load('emojis');
        //         $collect = collect($threads);
        //         $threads = $collect->where('age_restriction', 0);
        //     }
        // } else {
        //     $threads = Thread::search($query)
        //         ->paginate()
        //         ->load('emojis');

        //     $collect = collect($threads);
        //     $threads = $collect->where('age_restriction', 0);
        // }



        // $threads = $this->paginate($threads, 10);

        return $threads;
    }

    // public function paginate($items, $perPage = 2, $page = null)
    // {
    //     $page = $page ?: (Paginator::resolveCurrentPage() ?: 1);
    //     $items = $items instanceof Collection ? $items : Collection::make($items);

    //     return new LengthAwarePaginator($items->forPage($page, $perPage), $items->count(), $perPage, $page, [
    //         'path'     => Paginator::resolveCurrentPath(),
    //         'pageName' => 'page',
    //     ]);
    // }
}
