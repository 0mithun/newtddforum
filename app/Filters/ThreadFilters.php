<?php

namespace App\Filters;

use App\Emoji;
use App\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;


class ThreadFilters extends Filters
{
    /**
     * Registered filters to operate upon.
     *
     * @var array
     */
    protected $filters = ['by', 'popular', 'unanswered','viewed','recents','liked','rated','bestofweek','favorites','video','emoji'];

    /**
     * Filter the query by a given username.
     *
     * @param  string $username
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function by($username)
    {
        $user = User::where('username', $username)->firstOrFail();

        return $this->builder->where('user_id', $user->id);
    }

    /**
     * Filter the query according to most popular threads.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function popular()
    {
        $this->builder->getQuery()->orders = [];

        return $this->builder->orderBy('replies_count', 'desc');
    }

    /**
     * Filter the query according to those that are unanswered.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function unanswered()
    {
        return $this->builder->where('replies_count', 0);
    }

    public function viewed(){
        $this->builder->getQuery()->orders = [];
        return $this->builder->orderBy('visits','desc');
    }

    public function recents(){
        $this->builder->getQuery()->orders = [];
        return $this->builder->orderBy('created_at','desc');
    }

    public function liked(){
        $user = auth()->user();
        $likes = DB::table('likes')
//            ->where('user_id', $user->id)
            ->where('up',1)
            ->where('likeable_type','App\Thread')
            ->get()
        ;
        $likeThreadId = [];

        foreach ($likes as $like){
            $likeThreadId[] = $like->likeable_id;
        }

        return $this->builder->whereIn('id', $likeThreadId)->orderBy('created_at','desc');
    }

    public function rated(){
         return $this->builder->where('average_rating', '>', 0)->orderBy('average_rating','desc');
    }

    public function bestofweek(){
        return $this->builder->where('average_rating', '>', 0)->where('created_at', '>=', now()->subDays(7) )->orderBy('average_rating','desc');
    }



    public function favorites(){
        $user = auth()->user();
        $favorites = DB::table('favorites')
                ->where('user_id', $user->id)
                ->where('favorited_type','App\Thread')
                ->get()
            ;
        $favoriteThreadId = [];

        foreach ($favorites as $favorite){
            $favoriteThreadId[] = $favorite->favorited_id;
        }

        return $this->builder->whereIn('id', $favoriteThreadId)->orderBy('created_at','desc');

    }

    public function video(){
        $threads = DB::table('threads')
        ->where('body','LIKE','%https://www.youtube.com/watch?v=%')        
        ->get();

        return $this->builder
        ->where('body','LIKE','%https://www.youtube.com/watch?v=%')
        ->orderBy('created_at','desc');        
    }

    public function emoji($type){        
        $emoji = Emoji::where('name', $type)->first();

        $threadsId = DB::table('thread_emoji')
            ->groupBy('thread_id')
            ->where('emoji_id', $emoji->id)
            ->pluck('thread_id')
            ->all() 
            ;
        
        return $this->builder
                ->whereIn('id', $threadsId)       
                ->get(); 
    
    }
}
