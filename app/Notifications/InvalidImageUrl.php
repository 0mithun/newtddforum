<?php

namespace App\Notifications;


use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\BroadcastMessage;
use Illuminate\Notifications\Notification;

class InvalidImageUrl extends Notification implements ShouldQueue
{
    use Queueable;

    /**
     * @var \App\Reply
     */
    
    public $image_url;
    public $message;

    public $threadPath;

    /**
     * Create a new notification instance.
     *
     * @param \App\Reply $reply
     */
    public function __construct($path, $image_url)
    {
        $this->threadPath = $path;

        $this->image_url = $image_url;
        $this->message =  $this->image_url." is not a valid image url. Please edit this thread & put new valid image url";
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database', 'broadcast'];
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            'message' => $this->message,
            'link' => $this->threadPath
        ];
    }


    public function toBroadcast($notifiable)
    {
        return new BroadcastMessage([
            'message' => $this->message,
            'link' => $this->threadPath
        ]);
    }
}
