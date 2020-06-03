<?php

namespace App\Http\Controllers;

use App\Thread;
use Illuminate\Http\Request;

use DB;

class UserlocationController extends Controller
{
    public function show(){
        if(auth()->check()){
            $auth_user = auth()->user();

            $lat= $auth_user->lat;
            $lng= $auth_user->lng;
            $userLocations = [
                'lat'           =>  $auth_user->lat,
                'lng'           =>  $auth_user->lng,
            ];
        }else{
            $arr_ip = geoip()->getLocation($_SERVER['REMOTE_ADDR']);

            $userLocations = [
                'lat'           =>  $arr_ip['lat'],
                'lng'           =>  $arr_ip['lon'],
            ];
        }
        return view('map.show', compact('userLocations'));
    }

    public function showCloset(){
        $auth_user = auth()->user();
        $lat= $auth_user->lat;
        $lng= $auth_user->lng;
        $userLocations = [
                'lat'           =>  $auth_user->lat,
                'lng'           =>  $auth_user->lng,
            ];
        return view('map.closet', compact('userLocations'));
    }

    public function getAllThread(){
        $center=request('center');
        $lat=$center['lat'];
        $lng=$center['lng'];

        if(request('radius')){
            $distance=request('radius');
            $results = DB::select(DB::raw('SELECT *, ( 3959 * acos( cos( radians(' . $lat . ') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians(' . $lng . ') ) + sin( radians(' . $lat .') ) * sin( radians(lat) ) ) ) AS distance FROM threads HAVING distance < ' . $distance . ' ORDER BY distance') );
        }else{
            $results = Thread::all();
        }
       
        if(auth()->check()){
            $auth_user = auth()->user();
            $privacy = $auth_user->userprivacy;
            $results = collect($results)->filter(function($item) use($auth_user, $privacy){
                if($privacy->restricted_18 ==1){
                    return true;
                }else if($auth_user->id ==1){
                    return true;
                }else if($item->user_id == $auth_user->id){
                    return true;
                }else if($item->age_restriction == 0){
                    return true;
                }else if($item->age_restriction == 13 && $privacy->restricted_13 == 1){
                    return true;
                }
                return false;
    
            });

        }else{
            $results = collect($results)
                ->filter(function($item){
                    return $item->age_restriction == 0;
                });
        }


        $markers = collect($results)->map(function ($item, $key) {
            return [
                'position' => ['lat' => $item->lat, 'lng' => $item->lng],
                'name'=>$item->title,
                'thread_id'=>$item->id
            ];
        });

        $formattedResults = collect($results)->map(function ($item, $key) {
            return [
                'text'=>$item->title,
                'thread_id' => $item->id
            ];
        });


        $data=[
            'status'=>'success',
            'markers'=>$markers,
            'results'=>$formattedResults
        ];
        return response($data,200);
    }




    public function getNearestThread(Request $request){        
        $auth_user = auth()->user();
        $privacy = $auth_user->userprivacy;

        $center=request('center');
        $lat=$center['lat'];
        $lng=$center['lng'];
        if($lat == null || $lng == null){
            $data=[
                'status'=>'failed',
                'markers'=>[],
                'results'=>''
            ];
            return response($data,200);
        }
        

        // $distance=request('radius')??200;
        $distance=request('radius') ?? 500;
        
        // Search the rows in the markers table
        $results = DB::select(DB::raw('SELECT *, ( 3959 * acos( cos( radians(' . $lat . ') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians(' . $lng . ') ) + sin( radians(' . $lat .') ) * sin( radians(lat) ) ) ) AS distance FROM threads HAVING distance < ' . $distance . ' ORDER BY distance') );


        $results = collect($results)->filter(function($item) use($auth_user, $privacy){
            if($privacy->restricted_18 ==1){
                return true;
            }else if($auth_user->id ==1){
                return true;
            }else if($item->user_id == $auth_user->id){
                return true;
            }else if($item->age_restriction == 0){
                return true;
            }else if($item->age_restriction == 13 && $privacy->restricted_13 == 1){
                return true;
            }
            return false;

        });

        $markers = collect($results)->map(function ($item, $key) {
            return [
                'position' => ['lat' => $item->lat, 'lng' => $item->lng],
                'name'=>$item->title,
                'thread_id'=>$item->id
            ];
        });

        $formattedResults = collect($results)->map(function ($item, $key) {
            return [
                'text'=>$item->title,
                'thread_id' => $item->id
            ];
        });


        $data=[
            'status'=>'success',
            'markers'=>$markers,
            'results'=>$formattedResults
        ];
        return response($data,200);
    }

    public function threadDetails (){
        $thread_id = request('thread_id');
        $thread = Thread::where('id', $thread_id )->first();
        return response()->json($thread);
        
    }
}
