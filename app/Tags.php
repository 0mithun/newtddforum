<?php

namespace App;

use App\Jobs\TagImageProcessing;
use App\Traits\Followed;
use Illuminate\Database\Eloquent\Model;

class Tags extends Model
{
    // use Searchable;
    use Followed;

    // protected $indexConfigurator = ThreadsIndexConfigurator::class;

    // protected $mapping = [
    //     'properties' => [
    //         'id'   => [
    //             'type'  => 'integer',
    //             'index' => 'not_analyzed',
    //         ],
    //         'name' => [
    //             'type'     => 'string',
    //             'analyzer' => 'english',
    //         ],

    //     ],
    // ];

    protected $fillable = [
        'name',
        'photo',
        'description',
    ];
    protected $appends = ['profileAvatarPath', 'followType'];

    public $timestamps = false;

    protected static function boot()
    {
        parent::boot();

        static::created(function ($tag) {
            TagImageProcessing::dispatch($tag);
        });
    }

    public function threads()
    {
        //        return $this->belongsToMany(Thread::class);
        return $this->belongsToMany(Thread::class, 'thread_tag', 'tag_id', 'thread_id');
    }

    public function follows()
    {
        return $this->morphMany('App\Follows', 'followable');
    }

    public function getNameAttribute($name)
    {
        return ucfirst($name);
    }

    // public function toSearchableArray()
    // {
    //     return [
    //         'name' => $this->name,
    //     ];
    // }

    public function getProfileAvatarPathAttribute($avatar)
    {
        $avatar = $this->photo == '' ? 'images/avatars/default.png' : $this->photo;
        // $avatar = 'images/avatars/default.png';

        return asset($avatar);
    }

    public function getFollowTypeAttribute($type)
    {
        return 'tag';
    }
}
