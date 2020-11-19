<?php

namespace App\Http\Controllers;

use App\Thread;
use App\Traits\ThreadPrivacy;
use DB;
use Illuminate\Http\Request;

class UserlocationController extends Controller {
    use ThreadPrivacy;
    public function show() {
        if ( auth()->check() ) {
            $auth_user = auth()->user();

            $lat = $auth_user->lat;
            $lng = $auth_user->lng;
            $userLocations = [
                'lat' => (float) $auth_user->lat,
                'lng' => (float)  $auth_user->lng,
            ];
        } else {
            $arr_ip = geoip()->getLocation( $_SERVER['REMOTE_ADDR'] );

            $userLocations = [
                'lat' =>(float)  $arr_ip['lat'],
                'lng' => (float) $arr_ip['lon'],
            ];
        }

        $pageTitle = 'Maps';

        return view( 'map.show', compact( 'userLocations', 'pageTitle' ) );
    }

    public function showCloset() {
        $auth_user = auth()->user();
        $lat = $auth_user->lat;
        $lng = $auth_user->lng;
        $userLocations = [
            'lat' =>(float)  $auth_user->lat,
            'lng' => (float) $auth_user->lng,
        ];

        $pageTitle = 'Closet maps';

        return view( 'map.closet', compact( 'userLocations', 'pageTitle' ) );
    }

    /**
     * Get all thread with threads
     */

    public function getAllThread() {
      
        $query = request( 'query' );
        $search = '';
        if ( $query != '' ) {
            $query = ltrim( $query, '?' );
            $splitQueryString = explode( '=', $query );
            if ( count( $splitQueryString ) > 1 ) {
                $search = array_pop( $splitQueryString );
                $search = urldecode($search);
            }
        }

        if ( $search != '' ) {
            $results = Thread::
                where(function($query) use($search){

                    $query->where( 'title', "LIKE", "%$search%" );
                    $query->orWhere( 'body', "LIKE", "%$search%" );
                    $query->orWhere('tag_names','LIKE',"%$search%");
                })
                ->where('lat','!=',null)
                ->where('lng','!=',null)
              
                ;
               
            // return $results->toSql();
                // ->get()
            ;
        } else {
            $center = request( 'center' );
            $lat = $center['lat'];
            $lng = $center['lng'];

            $distance = request( 'radius' ) ?? 1000;
            $results = $this->search($lat,$lng,$distance);

            // if ( request( 'radius' ) ) {
            //     $distance = request( 'radius' ) ?? 500;
            //     $results = $this->search($lat,$lng,$distance);
                
            //     // $results = DB::select( DB::raw( 'SELECT *, ( 3959 * acos( cos( radians(' . $lat . ') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians(' . $lng . ') ) + sin( radians(' . $lat . ') ) * sin( radians(lat) ) ) ) AS distance FROM threads HAVING distance < ' . $distance . ' ORDER BY distance' ) );
            //     // $threadsId = DB::select( DB::raw( 'SELECT id, ( 3959 * acos( cos( radians(' . $lat . ') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians(' . $lng . ') ) + sin( radians(' . $lat . ') ) * sin( radians(lat) ) ) ) AS distance FROM threads HAVING distance < ' . $distance . ' ORDER BY distance' ) );
               

            // } else {
            //     $results = Thread::latest();
            // }
        }
        $this->filterThreads($results);

        $results->whereNotNull('lat')->whereNotNull('lng');

        $threads = $results->get();
        $threads = $this->convert_from_latin1_to_utf8_recursively($threads->toArray());
        
       $threads = $this->convertToObject($threads);

       
        $filterResults = $threads;

        $markers = collect( $filterResults )->map( function ( $item, $key ) {
            return [
                'position'  => ['lat' => (float) $item->lat, 'lng' => (float)  $item->lng],
                'name'      => $item->title,
                'thread_id' => $item->id,
            ];
        } );

        $data = [
            'status'  => 'success',
            'markers' => $markers,
            'results' => $filterResults,
        ];

        return response( $data, 200 );
    }


    public function search($lat,$lng,$distance=10){
        $threadsId = \DB::table('threads')
        ->selectRaw('id, ( 3959 * acos( cos( radians('.$lat.') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians('.$lng.') ) + sin( radians('.$lat.') ) * sin(radians(lat)) ) ) AS distance')
        ->having('distance','<',$distance)
        ->orderBy('distance')
        ->limit(100)
        // ->lists('id')
        ->pluck('id')
        ;
        return Thread::whereIn('id', $threadsId);
    }

}
