<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use ScoutElastic\Searchable;

class Tags extends Model
{   
    // use Searchable;

    protected $indexConfigurator = ThreadsIndexConfigurator::class;

    protected $mapping = [
        'properties' => [
            'id' => [
                'type' => 'integer',
                'index' => 'not_analyzed'
            ],
            'name' => [
                'type' => 'string',
                'analyzer' => 'english'
            ],
            
        ]
    ];

    protected $fillable = [
            'name'
    ];

    public $timestamps = false;

    public function threads(){
//        return $this->belongsToMany(Thread::class);
        return $this->belongsToMany(Thread::class,'thread_tag','tag_id','thread_id');
    }

    public function getNameAttribute($name){
        return ucfirst($name);
    }

    public function toSearchableArray(){
        return [
            'name'  =>  $this->name
        ];
    }
}
