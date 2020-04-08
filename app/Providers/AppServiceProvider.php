<?php

namespace App\Providers;

use App\Admin;
use App\Channel;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        \View::composer('*', function ($view) {
            $channels = \Cache::rememberForever('channels', function () {
                return Channel::all();
            });
           

            $view->with('channels', $channels);
        });
        \View::composer('layouts.footer', function($view){
            $admin = Admin::first();
            
            $view->with('admin',$admin);
        });

        \Validator::extend('spamfree', 'App\Rules\SpamFree@passes');
        
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        
        if ($this->app->isLocal()) {
            $this->app->register(\Barryvdh\Debugbar\ServiceProvider::class);
        }
    }
}
