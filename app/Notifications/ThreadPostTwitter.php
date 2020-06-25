<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use NotificationChannels\Twitter\TwitterChannel;
use Illuminate\Notifications\Messages\MailMessage;
use NotificationChannels\Twitter\TwitterStatusUpdate;

class ThreadPostTwitter extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return [TwitterChannel::class];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->line('The introduction to the notification.')
                    ->action('Notification Action', url('/'))
                    ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }

    public function toTwitter($notifiable){
        $limit =270; 
        // $title_count = strlen($notifiable->title);
        $tag_count = strlen("#anecdotes");
        $path_count = strlen($notifiable->path);
        $total_count = $path_count + $tag_count;
        $end = $limit - $total_count;

        $description = substr(strip_tags($notifiable->body), 0, $end);

        $status = "{$description} #anecdotes {$notifiable->path} ";

        if($notifiable->image_path == ''){
            // return (new TwitterStatusUpdate($notifiable->title));
            return (new TwitterStatusUpdate($status));
        }else{
            // return (new TwitterStatusUpdate($notifiable->title))
            return (new TwitterStatusUpdate($status))
            ->withImage($notifiable->image_path);
        }        
    }
}
