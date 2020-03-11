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

       
        $threads = Thread::search(request('query'))->paginate(3);
        $query = request('query');
        return view('threads.search', [
            'trending' => $trending->get(),
            'threads' => $threads,
            'query' => $query
        ]);
    }

    public function search(){
        //return request('q');
         if (request()->expectsJson()) {
            return Thread::search(request('query'))->paginate(3);
            // return Thread::search(request('q'))->get();
        }
    }
}
