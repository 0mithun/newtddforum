<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use DB;

class UserlocationController extends Controller
{
    public function show(){
        return view('map.show');
    }

    public function getNearestThread(Request $request){
           
    //    dd(request()->all());
        $center=request('center');
        $lat=$center['lat'];
        $lng=$center['lng'];
    //    $lat=35.985510;
    //    $lng=-121.561489;
        $distance=request('radius')??200;
        // Search the rows in the markers table
        $results = DB::select(DB::raw('SELECT *, ( 3959 * acos( cos( radians(' . $lat . ') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians(' . $lng . ') ) + sin( radians(' . $lat .') ) * sin( radians(lat) ) ) ) AS distance FROM threads HAVING distance < ' . $distance . ' ORDER BY distance') );

        $markers = collect($results)->map(function ($item, $key) {
            return [
                'position' => ['lat' => $item->lat, 'lng' => $item->lng],
                'name'=>$item->title
            ];
        });

        $formattedResults = collect($results)->map(function ($item, $key) {
            return [
                'text'=>$item->title
            ];
        });


        $data=[
            'status'=>'success',
            'markers'=>$markers,
            'results'=>$formattedResults
        ];
        return response($data,200);
        }
}
