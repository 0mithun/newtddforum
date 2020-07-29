<?php

namespace App;

use App\Events\ThreadReceivedNewReply;
use App\Filters\ThreadFilters;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Thread extends Model {
    //use RecordsActivity,  Notifiable, Favoritable, Likeable, Searchable;
    use RecordsActivity, Notifiable, Favoritable, Likeable;

    protected $indexConfigurator = ThreadsIndexConfigurator::class;

    protected $searchRules = [
        ThreadSearchRule::class,
    ];

    protected $mapping = [
        'properties' => [
            'id'    => [
                'type'  => 'integer',
                'index' => 'not_analyzed',
            ],
            'title' => [
                'type'     => 'string',
                'analyzer' => 'english',

            ],
            'body'  => [
                'type'     => 'string',
                'analyzer' => 'english',
            ],

        ],
    ];

    // use Searchable;
    /**
     * Don't auto-apply mass assignment protection.
     *
     * @var array
     */
    protected $guarded = [];

    /**
     * The relationships to always eager-load.
     *
     * @var array
     */
    protected $with = ['creator', 'channel', 'likes', 'tags'];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    // protected $appends = ['isSubscribedTo','isReported','isFavorited','excerpt','threadImagePath','path'];
    protected $appends = ['excerpt', 'threadImagePath', 'imageColor', 'path', 'isLiked', 'isDesliked', 'splitCategory', 'topRated'];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'locked' => 'boolean',
    ];

    /**
     * Boot the model.
     */
    protected static function boot() {
        parent::boot();

        static::deleting( function ( $thread ) {
            $thread->replies->each->delete();
        } );

        static::created( function ( $thread ) {
            $thread->update( ['slug' => $thread->title] );
        } );

    }

    /**
     * Get a string path for the thread.
     *
     * @return string
     */
    public function path() {
        $lower = strtolower( $this->channel->slug );

        return "/anecdotes/{$lower}/{$this->slug}";
    }

    public function getPathAttribute() {
        return url( $this->path() );
    }

    /**
     * A thread belongs to a creator.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function creator() {
        return $this->belongsTo( User::class, 'user_id' );
    }

    /**
     * A thread is assigned a channel.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function channel() {
        return $this->belongsTo( Channel::class );
    }

    /**
     * A thread may have many replies.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function replies() {
        return $this->hasMany( Reply::class );
    }

    /**
     * Add a reply to the thread.
     *
     * @param  array $reply
     * @return Model
     */
    public function addReply( $reply ) {
        $reply = $this->replies()->create( $reply );

        event( new ThreadReceivedNewReply( $reply ) );

        return $reply;
    }

    /**
     * Apply all relevant thread filters.
     *
     * @param  Builder       $query
     * @param  ThreadFilters $filters
     * @return Builder
     */
    public function scopeFilter( $query, ThreadFilters $filters ) {
        return $filters->apply( $query );
    }

    /**
     * Subscribe a user to the current thread.
     *
     * @param  int|null $userId
     * @return $this
     */
    public function subscribe( $userId = null ) {
        $this->subscriptions()->create( [
            'user_id' => $userId ?: auth()->id(),
        ] );

        return $this;
    }

    /**
     * Unsubscribe a user from the current thread.
     *
     * @param int|null $userId
     */
    public function unsubscribe( $userId = null ) {
        $this->subscriptions()
            ->where( 'user_id', $userId ?: auth()->id() )
            ->delete();
    }

    /**
     * A thread can have many subscriptions.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function subscriptions() {
        return $this->hasMany( ThreadSubscription::class );
    }

    /**
     * Determine if the current user is subscribed to the thread.
     *
     * @return boolean
     */
    public function getIsSubscribedToAttribute() {
        return $this->subscriptions()
            ->where( 'user_id', auth()->id() )
            ->exists();
    }

    /**
     * Determine if the thread has been updated since the user last read it.
     *
     * @param  User $user
     * @return bool
     */
    public function hasUpdatesFor( $user ) {
        $key = $user->visitedThreadCacheKey( $this );

        return $this->updated_at > cache( $key );
    }

    /**
     * Get the route key name.
     *
     * @return string
     */
    public function getRouteKeyName() {
        return 'slug';
    }

    /**
     * Access the body attribute.
     *
     * @param  string $body
     * @return string
     */
    // public function getBodyAttribute($body)
    // {
    //     return \Purify::clean($body);
    // }

    /**
     * Set the proper slug attribute.
     *
     * @param string $value
     */
    public function setSlugAttribute( $value ) {
        if ( static::whereSlug( $slug = str_slug( $value ) )->exists() ) {
            $slug = "{$slug}-{$this->id}";
        }

        $this->attributes['slug'] = $slug;
    }

    /**
     *
     * Set the word_count attribute
     * @param string $value
     */

    /**
     * Mark the given reply as the best answer.
     *
     * @param Reply $reply
     */
    public function markBestReply( Reply $reply ) {
        $this->update( ['best_reply_id' => $reply->id] );
    }

    // /**
    //  * Get the indexable data array for the model.
    //  *
    //  * @return array
    //  */
    public function toSearchableArray() {
        $tags = $this->tags;
        $tagsList = [];
        $tagName = '';
        if ( $tags->count() ) {
            foreach ( $tags as $tag ) {
                array_push( $tagsList, $tag->name );
            }

            $tagName = join( ' ', $tagsList );
        }
        $searchable = [
            'title' => $this->title,
            'body'  => $this->body,
            'tags'  => $tagName,
        ];

        return $searchable;
        //return $this->toArray($searchable) + ['path' => $this->path()];
    }

    public function tags() {
        return $this->belongsToMany( Tags::class, 'thread_tag', 'thread_id', 'tag_id' );
    }

    public function emojis() {
        return $this->belongsToMany( Emoji::class, 'thread_emoji', 'thread_id', 'emoji_id' );
    }

    public function getExcerptAttribute() {
//        return substr(strip_tags($this->body),80);
        $body = strip_tags( $this->body );
        $body = preg_replace( '/\s+/', ' ', $this->body );

        return substr( strip_tags( $body ), 0, 250 );

    }

    public function threadImagePath() {
        return $this->image_path == '' ? '//upload.wikimedia.org/wikipedia/commons/thumb/8/84/Picture_font_awesome.svg/512px-Picture_font_awesome.svg.png' : asset( $this->image_path );
    }

    public function getThreadImagePathAttribute() {
        return $this->threadImagePath();
    }

    public function splitCategory() {
        $categories = $this->category;
        if ( $categories != null ) {
            $categories = explode( '|', $categories );
        }

        return $categories;
    }

    public function getSplitCategoryAttribute() {
        return $this->splitCategory();
    }

    /**
     * Get rgb color value from image
     */

    public function getImageColorAttribute() {
        if ( $this->image_path != NULL ) {
            $splitName = explode( '.', $this->image_path );
            $extension = array_pop( $splitName );

            if ( $extension == 'jpg' ) {
                $im = imagecreatefromjpeg( $this->image_path );

            }
            if ( $extension == 'jpeg' ) {
                $im = imagecreatefromjpeg( $this->image_path );

            } else if ( $extension == 'png' ) {
                $im = imagecreatefrompng( $this->image_path );

            }
            $rgb = imagecolorat( $im, 0, 0 );
            $colors = imagecolorsforindex( $im, $rgb );
            array_pop( $colors );
            array_push( $colors, 1 );
        } else {
            $colors = ['red' => 0, 'green' => 0, 'blue' => 0, 'alpha' => 1];
        }
        $rgbaString = join( ', ', $colors );

        return $rgbaString;

    }

    /**
     * A thread may have many ratings.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function ratings() {
        return $this->hasMany( Rating::class );
    }

    public function getTopRatedAttribute() {
        return ( $this->like_count - ( $this->dislike_count + 1 ) );
    }
}
