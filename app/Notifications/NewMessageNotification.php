<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Messages\BroadcastMessage;

class NewMessageNotification extends Notification
{
    use Queueable;

    public $friend;
    public $message;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($friend, $message)
    {
        $this->friend = $friend;
        $this->message = $message;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['database','broadcast'];
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
        $user = auth()->user();
        return [
//            'data' => "User " . $user->username . " ".  " reported thread with id = " . $this->thread->id . " because: " . $this->reason,
            'message' => $this->message,
            'friend'  => $this->friend,
            //'link' => $this->thread->path()
        ];


    }

    public function toBroadcast($notifiable){
        $user = auth()->user();
        return new BroadcastMessage([
            'message' => $this->message,
            'friend'  => $this->friend,
            //'link' => $this->thread->path()
        ]);
    }
}
