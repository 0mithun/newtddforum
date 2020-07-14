<?php

namespace App\Http\Controllers;

use App\{Thread, Trending};
use Illuminate\Support\Collection;
use Illuminate\Pagination\Paginator;
use Illuminate\Pagination\LengthAwarePaginator;

class SearchController extends Controller
{
   

    public function search(Trending $trending){
        $query = request('query');
        if (request()->expectsJson()) {
             if($query == ''){
                $threads = Thread::all();
             }else{
                 $threads = $this->filterSearch($query);
             }

            return $threads;
        }else{
            $threads = $this->filterSearch($query);
            return view('threads.search', [
                'trending' => $trending->get(),
                'threads' => $threads,
                'query' => $query,
            ]);
        }
    }

    

    public function filterSearch($query){
        if(auth()->check()){
            $user = auth()->user();
            $privacy = $user->userprivacy;
            if($privacy->restricted_18 ==1){
                $threads = Thread::search($query)
                ->paginate(10)
                ->load('emojis')
                ;
                $collect = collect($threads); 
            }else if($privacy->restricted_13 ==1){
                $threads = Thread::search($query)
                    ->paginate()
                    ->load('emojis')
                ;

                $collect = collect($threads); 
                $threads = $collect->where('age_restriction', '!=', 18);
            }          
            
            else{
                $threads = Thread::search($query)
                    ->paginate()
                    ->load('emojis')
                ;
                $collect = collect($threads); 
                $threads = $collect->where('age_restriction', 0);
            }

        }else{
            $threads = Thread::search($query)
            ->paginate()
                ->load('emojis')
            ;

            $collect = collect($threads); 
            $threads = $collect->where('age_restriction', 0);
            
        }
        
        $threads = $this->paginate($threads, 10);

        return $threads;
        
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
