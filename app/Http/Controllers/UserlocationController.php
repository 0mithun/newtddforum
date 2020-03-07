<?php

namespace App\Http\Controllers;

use App\Thread;
use Illuminate\Http\Request;

use DB;

class UserlocationController extends Controller
{
    public function show(){
        $arr_ip = geoip()->getLocation($_SERVER['REMOTE_ADDR']);


         $userLocations = [
                'lat'           =>  $arr_ip['lat'],
                'lng'           =>  $arr_ip['lon'],
            ];
        return view('map.show', compact('userLocations'));
    }

    public function getNearestThread(Request $request){

        $center=request('center');
        $lat=$center['lat'];
        $lng=$center['lng'];

        $distance=request('radius')??200;
        // Search the rows in the markers table
        $results = DB::select(DB::raw('SELECT *, ( 3959 * acos( cos( radians(' . $lat . ') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians(' . $lng . ') ) + sin( radians(' . $lat .') ) * sin( radians(lat) ) ) ) AS distance FROM threads HAVING distance < ' . $distance . ' ORDER BY distance') );

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
