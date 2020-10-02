<?php

namespace App\Traits;


trait ThreadPrivacy{
   
    public function filterThreads($threads)
    {
        if (auth()->check()) {
            $user = auth()->user();
            $privacy = $user->userprivacy;
            if ($privacy->restricted_18 == 1) {
                // $threadsId = $threads->pluck('id')->all();
            } else if ($user->id == 1) {
                // $threadsId =  $threads->pluck('id')->all();
            } else if ($privacy->restricted_13 == 1) {
                $threads->where('age_restriction', '!=', 18)->orWhere('user_id', $user->id);
            } else {
                // $threads->where('age_restriction', 0)->orWhere('user_id', $user->id);
                $threads->where(function($query)use($user){      
                    $query->where('age_restriction', 0)->orWhere('user_id', $user->id);
                }); 
            }
        } else {
             $threads->where('age_restriction', 0);
        }

        // return $threadsId;
    }

    public function generateCurrentPageResults($threads, $perPage)
    {
        $currentPage = 1;
        if (request('page') && request('page') != '') {
            $currentPage = request('page');
        }
        $skip = ($currentPage - 1) * $perPage;
        return $threads->skip($skip)->take($perPage)->get();
    }

    /**
     * Convert latin to UTF-8
     */
    public static function convert_from_latin1_to_utf8_recursively($dat)
   {
      if (is_string($dat)) {
         return utf8_encode($dat);
      } elseif (is_array($dat)) {
         $ret = [];
         foreach ($dat as $i => $d) $ret[ $i ] = self::convert_from_latin1_to_utf8_recursively($d);
         return $ret;
      } elseif (is_object($dat)) {
         foreach ($dat as $i => $d) $dat->$i = self::convert_from_latin1_to_utf8_recursively($d);
         return $dat;
      } else {
         return $dat;
      }

   
   }

  public function convertToObject($threads){
    $threads = collect($threads)->map(function ($voucher) {
        return (object) $voucher;
    });

    return $threads;
   }
    

}