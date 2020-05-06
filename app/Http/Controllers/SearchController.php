<?php

namespace App\Http\Controllers;

use App\{Thread, Trending};

class SearchController extends Controller
{
    /**
     * Show the search results.
     *
     * @param  \App\Trending $trending
     * @return mixed
     */
    public function show(Trending $trending)
    {
        // if (request()->expectsJson()) {
        //     return Thread::search(request('q'))->paginate(10);
        // }
        
        $query = request('query');
       
        $threads = Thread::search($query)
        //->get()
        ->paginate(10);
            ;
        // dd($threads);
        
        //$threads->sortByDesc('visits');

        //$threads = collect($threads);

        //dd($threads->sortByDesc('visits'));

        $query = request('query');


        return view('threads.search', [
            'trending' => $trending->get(),
            'threads' => $threads,
            'query' => $query
        ]);


    }

    public function search(){
        //return request('q');
        //return request('sort_by');

         if (request()->expectsJson()) {
             if(request('query')==''){
                $threads = Thread::all();
             }else{
                $threads = Thread::search(request('query'))->paginate(10);
             }
            

           // $threads  = $threads->sortByDesc('visits');

            return $threads;

            // if(request()->has('sort_by')){
            //     $sort_by = request('sort_by');
            //     $threads = collect($threads);
            //     $threads->sortBy('like_count');

            //     return $threads;
            // }

           

            //return Thread::search(request('q'))->get();
        }
    }


    //currently unused
    public function searchByTopRated(){
        return 'hello';
    }
}
