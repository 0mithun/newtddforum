<?php

namespace App\Http\Middleware;

use Carbon\Carbon;
use Closure;

class UserbanMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (auth()->check()) {
            $user = auth()->user();

            $userBan = $user->userban;
            if($userBan){
                if($userBan->ban_type ==1){
                    return redirect('/');
                }

                $ban_expire_on = $userBan->ban_expire_on;
                $now = Carbon::now();
                if($ban_expire_on->lte($now)){
                    $user->userban->delete();
                    return $next($request);
                }else{
                    return redirect('/');
                }
            }
            return $next($request);
        }

        return redirect('/');
    }
}
