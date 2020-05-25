<?php

namespace App\Http\Controllers;

use App\{Thread, Trending};
use Illuminate\Support\Collection;
use Illuminate\Pagination\Paginator;
use Illuminate\Pagination\LengthAwarePaginator;

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

       

        if(auth()->check()){
            $user = auth()->user();
            $privacy = $user->userprivacy;
            if($privacy->restricted_18 ==1){
                $threads = Thread::search($query)
                    ->with('emojis')
                    ->paginate(10)
                    ;
            }else if($privacy->restricted_13 ==1){
                $threads = Thread::search($query)
                    ->with('emojis')
                    ;
                $collect = collect($threads->get());     

                $threads = $collect->where('age_restriction', '!=', 18);
                $threads = $this->paginate($threads, 10);
            }
            
            
            else{
                $threads = Thread::search($query)
                    ->with('emojis')
                    ;
                $collect = collect($threads->get());     

                $threads = $collect->where('age_restriction', 0);
                $threads = $this->paginate($threads, 10);
            }


        }else{
            $threads = Thread::search($query)
            ->with('emojis')
            ;
            $collect = collect($threads->get());     

            $threads = $collect->where('age_restriction', 0);
            $threads = $this->paginate($threads, 10);
        }
        
        
        return view('threads.search', [
            'trending' => $trending->get(),
            'threads' => $threads,
            'query' => $query,
        ]);


    }

    public function search(){

         if (request()->expectsJson()) {
             if(request('query')==''){
                $threads = Thread::all();
             }else{
                 $query = request('query');
                // $threads = Thread::search(request('query'))->with('emojis')->paginate(10);
                if(auth()->check()){
                    $user = auth()->user();
                    $privacy = $user->userprivacy;
                    if($privacy->restricted_18 ==1){
                        $threads = Thread::search($query)
                            ->with('emojis')
                            ->paginate(10)
                            ;
                    }else if($privacy->restricted_13 ==1){
                        $threads = Thread::search($query)
                            ->with('emojis')
                            ;
                        $collect = collect($threads->get());     
        
                        $threads = $collect->where('age_restriction', '!=', 18);
                        $threads = $this->paginate($threads, 10);
                    }
                    else{
                        $threads = Thread::search($query)
                            ->with('emojis')
                            ;
                        $collect = collect($threads->get());     
        
                        $threads = $collect->where('age_restriction', 0);
                        $threads = $this->paginate($threads, 10);
                    } 
                }else{
                    $threads = Thread::search($query)
                    ->with('emojis')
                    ;
                    $collect = collect($threads->get());     
        
                    $threads = $collect->where('age_restriction', 0);
                    $threads = $this->paginate($threads, 10);
                }
             }
            

           // $threads  = $threads->sortByDesc('visits');

            return $threads;
        }
    }


    //currently unused
    public function searchByTopRated(){
        return 'hello';
    }

    public function paginate($items, $perPage = 2, $page = null){
        $page = $page ?: (Paginator::resolveCurrentPage() ?: 1);
        $items = $items instanceof Collection ? $items : Collection::make($items);
        return new LengthAwarePaginator($items->forPage($page, $perPage), $items->count(), $perPage, $page, [
        'path' => Paginator::resolveCurrentPath(),
        'pageName' => 'page',
        ]);
    }
}
