<?php

namespace App;

use DB;
use Carbon\Carbon;
use Illuminate\Notifications\Notifiable;

use Hootlex\Friendships\Traits\Friendable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable, Friendable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'date_of_birth',
        'avatar_path',
        'city',
        'country',
        'about'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'email',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'confirmed' => 'boolean'
    ];

    protected $appends = ['profileAvatarPath'];

    /**
     * Get the route key name for Laravel.
     *
     * @return string
     */
    public function getRouteKeyName()
    {
        return 'username';
    }

    protected static function boot()
    {
        parent::boot();

//        static::deleting(function ($thread) {
//            $thread->replies->each->delete();
//        });

        static::created(function ($user) {
            $user->usersetting()->create([
                'mention_notify_anecdotage'                     =>  1,
                'mention_notify_email'                          =>  0,
                'mention_notify_facebook'                       =>  0,
                'new_thread_posted_notify_anecdotage'           =>  1,
                'new_thread_posted_notify_email'                =>  0,
                'new_thread_posted_notify_facebook'             =>  0,
                'receive_daily_random_thread_notify_anecdotage' =>  1,
                'receive_daily_random_thread_notify_email'      =>  0,
                'receive_daily_random_thread_notify_email'      =>  0,
            ]);

            $user->userprivacy()->create([
                'see_my_threads'                      =>  3,
                'see_my_favorites'                    =>  3,
                'see_my_friends'                      =>  3,

                'send_me_message'                     =>  2,

                'thread_create_share_facebook'        =>  0,
                'thread_create_share_twitter'         =>  0,


                'anyone_share_my_thread_facebook'     =>  1,
                'anyone_share_my_thread_twitter'      =>  1,
            ]);

            //$arr_ip = geoip()->getLocation($_SERVER['REMOTE_ADDR']);

            // $userLocations = [
            //     'ip'            =>  $arr_ip['ip'],
            //     'country'       =>  $arr_ip['country'],
            //     'city'          =>  $arr_ip['city'],
            //     'state'         =>  $arr_ip['state'],
            //     'zip'           =>  $arr_ip['postal_code'],
            //     'lat'           =>  $arr_ip['lat'],
            //     'lng'           =>  $arr_ip['lon'],
            // ];

           // $user->userlocation()->create($userLocations);


        });
    }


    /**
     * Fetch all threads that were created by the user.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function threads()
    {
        return $this->hasMany(Thread::class)->latest();
    }

    /**
     * Fetch the last published reply for the user.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function lastReply()
    {
        return $this->hasOne(Reply::class)->latest();
    }

    /**
     * Get all activity for the user.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function activity()
    {
        return $this->hasMany(Activity::class);
    }

    /**
     * Mark the user's account as confirmed.
     */
    public function confirm()
    {
        $this->confirmed = true;
        $this->confirmation_token = null;

        $this->save();
    }

    /**
     * Determine if the user is an administrator.
     *
     * @return bool
     */
    public function isAdmin()
    {
        return auth()->id() == 1;
    }

    public function getIsAdminAttribute(){
        return $this->isAdmin();
    }

    public function getNameAttribute(){
        return ucfirst($this->first_name) ." ".ucfirst($this->last_name);
    }


    /**
     * Record that the user has read the given thread.
     *
     * @param Thread $thread
     */
    public function read($thread)
    {
        cache()->forever(
            $this->visitedThreadCacheKey($thread),
            Carbon::now()
        );
    }

    /**
     * Get the path to the user's avatar.
     *
     * @param  string $avatar
     * @return string
     */
     public function getAvatarPathAttribute($avatar)
     {
         return $avatar ?: 'images/avatars/default.png';
     }

    public function getProfileAvatarPathAttribute($avatar){
         $test =   $this->avatar_path == '' ? 'default': $this->avatar_path;
        //$avatar  = $avatar == '' ?  'images/avatars/default.png' : $avatar;

        return asset($test);
       
    }
    

    /**
     * Get the cache key for when a user reads a thread.
     *
     * @param  Thread $thread
     * @return string
     */
    public function visitedThreadCacheKey($thread)
    {
        return sprintf("users.%s.visits.%s", $this->id, $thread->id);
    }


    // public function getIsReportedAttribute()
    // {
    //     $report = DB::table('reports')
    //         ->where('user_id', auth()->id())
    //         ->where('reported_id', $this->id)
    //         ->where('reported_type','App\User')
    //         ->first();
    //     ;
    //     //$report = true;
    //     if($report){
    //         return true;
    //     }else{
    //         return false;
    //     }

    // }

    public function getFullNameAttribute(){
        return $this->first_name. ' '. $this->last_name;
    }

    public function usersetting(){
        return $this->hasOne(Usersetting::class);
    }

    public function userprivacy(){
        return $this->hasOne(Userprivacy::class);
    }

    public function userlocation(){
        return $this->hasOne(Userlocation::class);
    }


    public function chat(){
        return $this->hasMany(Chat::class,'from');
    }
}
