<?php


namespace App;


trait Likeable
{

    public function likes()
    {
        return $this->morphMany(Likes::class, 'likeable');
    }


    public function like($type)
    {
        $user = auth()->user();
        $attributes = [
            'user_id' => auth()->id(),
            'up' => 1
        ];

        if (!$this->likes()->where($attributes)->exists()) {
            $this->increment('like_count');

            
            $this->emojis()->detach($user->id);
            $this->emojis()->attach($user->id, ['emoji_type'=> (int) $type]);

            return $this->likes()->create($attributes);

        }
    }


    public function disLike()
    {
        $attributes = [
            'user_id' => auth()->id(),
             'down' => 1
        ];

        if (!$this->likes()->where($attributes)->exists()) {
            $this->increment('dislike_count');
            $this->emojis()->detach(auth()->id());
            return $this->likes()->create($attributes);
        }

    }




    public function unlike(){
        $attributes = [
            'user_id' => auth()->id(),
            //'up' => 1
        ];
        $this->emojis()->detach(auth()->id());
        $this->likes()->where($attributes)->delete();
    }

    public function getIsLikedAttribute()
    {
        return $this->isLiked();
    }

    public function isLiked()
    {
        return !!$this->likes->where('user_id', auth()->id())->where('up',1)->count();
    }


    public function getIsDeslikedAttribute(){
        return $this->isDesliked();
    }

    public function isDesliked(){
        return !!$this->likes->where('user_id', auth()->id())->where('down',1)->count();
    }






    public function getLikesCountAttribute(){
        return $this->likes()->where('up',1)->count();
    }
    public function getDislikesCountAttribute(){
        return $this->likes()->where('down',1)->count();
    }

    public function changeEmoji($type){
        $user = auth()->user();
        $this->emojis()->detach($user->id);
        $this->emojis()->attach($user->id, ['emoji_type'=> (int) $type]);
    }

}