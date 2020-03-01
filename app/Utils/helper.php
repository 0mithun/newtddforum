<?php

// use Cache;

function settings($key)
{
    $values = [
        'app_name' =>  'hello',
        'mail_driver' =>  '',
        'mail_host' =>  '',
        'mail_port' =>  '',
        'username' =>  '',
        'password' =>  '',
        'mail_encryption' =>  '',
        'timezone' =>  '',
    ];

    //$admin = App\Admin::first();

    // if($admin){
    //     $values['app_name']         =   $admin->app_name;
    //     $values['mail_driver']      =   $admin->mail_driver;
    //     $values['mail_host']        =   $admin->mail_host;
    //     $values['mail_port']        =   $admin->mail_port;
    //     $values['username']         =   $admin->username;
    //     $values['password']         =   $admin->password;
    //     $values['mail_encryption']  =   $admin->mail_encryption;
    //     $values['timezone']         =   $admin->timezone;
    // }
    // return $values[$key];


}