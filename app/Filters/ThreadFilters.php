<?php

namespace App\Filters;

use App\Emoji;
use App\User;
use Illuminate\Support\Facades\DB;

class ThreadFilters extends Filters
{
    /**
     * Registered filters to operate upon.
     *
     * @var array
     */
    protected $filters = [
        // 'by', 'popular', 'unanswered',  'liked', 'bestofweek', 'favorites',

        'rated', 'viewed',  'recents',  'video', 'emoji'
    ];

    /**
     * Filter the query by a given username.
     *
     * @param  string $username
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function by($username)
    {
        $user = User::where('username', $username)->firstOrFail();

        // $this->filterThreads();
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

        // $this->filterThreads();
        return $this->builder->orderBy('replies_count', 'desc');
    }

    /**
     * Filter the query according to those that are unanswered.
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    protected function unanswered()
    {
        // $this->filterThreads();
        return $this->builder->where('replies_count', 0);
    }

    public function viewed()
    {
        $this->builder->getQuery()->orders = [];
        // $this->filterThreads();
        return $this->builder->orderBy('visits', 'desc');
    }

    public function recents()
    {
        $this->builder->getQuery()->orders = [];

        // $this->filterThreads();
        $this->builder->orderBy('created_at', 'desc');

        return $this->builder;
    }

    public function liked()
    {
        $likes = DB::table('likes')
            //            ->where('user_id', $user->id)
            ->where('up', 1)
            ->where('likeable_type', 'App\Thread')
            ->get();
        $likeThreadId = [];

        foreach ($likes as $like) {
            $likeThreadId[] = $like->likeable_id;
        }

        $this->builder->whereIn('id', $likeThreadId)->orderBy('created_at', 'desc');
        // $this->filterThreads();
        return $this->builder;
    }

    public function rated()
    {
        //  return $this->builder->where('average_rating', '>', 0)->orderBy('average_rating','desc');

        $this->builder->getQuery()->orders = [];
        // $threads = $this->builder->whereColumn('like_count', '>', 'dislike_count')->orderByRaw('like_count - (dislike_count + 1 ) DESC');
        // $this->builder->whereColumn('like_count', '>', 'dislike_count')->orderByRaw('like_count - dislike_count DESC');

        $this->builder
        // ->whereColumn('like_count', '>', 'dislike_count')
        ->orderByRaw('like_count - dislike_count DESC');

        // $this->filterThreads();
        return $this->builder;
    }

    public function bestofweek()
    {
        // return $this->builder->where('average_rating', '>', 0)->where('created_at', '>=', now()->subDays(7) )->orderBy('average_rating','desc');
        $this->builder->getQuery()->orders = [];
        // $this->builder->whereColumn('like_count', '>', 'dislike_count')->where('created_at', '>=', now()->subDays(7))->orderByRaw('like_count - (dislike_count + 1 ) DESC');
        $this->builder->whereColumn('like_count', '>', 'dislike_count')->where('created_at', '>=', now()->subDays(7))->orderByRaw('like_count - dislike_count) DESC');

        // $this->filterThreads();
        return $this->builder;
    }

    public function favorites()
    {
        $user = auth()->user();
        $favorites = DB::table('favorites')
            ->where('user_id', $user->id)
            ->where('favorited_type', 'App\Thread')
            ->get();
        $favoriteThreadId = [];

        foreach ($favorites as $favorite) {
            $favoriteThreadId[] = $favorite->favorited_id;
        }

        $this->builder->whereIn('id', $favoriteThreadId)->orderBy('created_at', 'desc');
        // $this->filterThreads();
        return $this->builder;
    }

    public function video()
    {
        $this->builder
            ->where('body', 'LIKE', '%https://www.youtube.com/%')
            ->orderBy('created_at', 'desc');
        // $this->filterThreads();
        return $this->builder;
    }

    public function emoji($type)
    {
        $emoji = Emoji::where('name', $type)->first();

        $threadsId = DB::table('thread_emoji')
            ->groupBy('thread_id')
            ->where('emoji_id', $emoji->id)
            ->pluck('thread_id')
            ->all();

        $this->builder
            ->whereIn('id', $threadsId)
            // ->get()
        ;
        // $this->filterThreads();


        return $this->builder;
    }

    public function filterThreads()
    {
        if (auth()->check()) {
            $user = auth()->user();
            $privacy = $user->userprivacy;
            if ($privacy->restricted_18 == 1) {
                // return $this->builder->puck('id')->all();
            } else if ($user->id == 1) {
                // return $this->builder->pluck('id')->all();
            } else if ($privacy->restricted_13 == 1) {
                $this->builder->where('age_restriction', '!=', 18)->orWhere('user_id', $user->id);
            } else {
                $this->builder->where('age_restriction', 0)->orWhere('user_id', $user->id);
            }
        } else {
            $this->builder->where('age_restriction', 0);
        }
    }
}
