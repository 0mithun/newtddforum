<?php

namespace App\Http\Controllers;

use App\Thread;
use DB;
use Illuminate\Http\Request;

class UserlocationController extends Controller {
    public function show() {
        if ( auth()->check() ) {
            $auth_user = auth()->user();

            $lat = $auth_user->lat;
            $lng = $auth_user->lng;
            $userLocations = [
                'lat' => $auth_user->lat,
                'lng' => $auth_user->lng,
            ];
        } else {
            $arr_ip = geoip()->getLocation( $_SERVER['REMOTE_ADDR'] );

            $userLocations = [
                'lat' => $arr_ip['lat'],
                'lng' => $arr_ip['lon'],
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
            'lat' => $auth_user->lat,
            'lng' => $auth_user->lng,
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
            }
        }

        if ( $search != '' ) {
            $results = Thread::
                where( 'title', "LIKE", "%$search%" )
                ->orWhere( 'body', "LIKE", "%$search%" )
                ->get();
        } else {
            $center = request( 'center' );
            $lat = $center['lat'];
            $lng = $center['lng'];

            if ( request( 'radius' ) ) {
                $distance = request( 'radius' ) ?? 500;

                $results = $this->search($lat,$lng,$distance);
                
                // $results = DB::select( DB::raw( 'SELECT *, ( 3959 * acos( cos( radians(' . $lat . ') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians(' . $lng . ') ) + sin( radians(' . $lat . ') ) * sin( radians(lat) ) ) ) AS distance FROM threads HAVING distance < ' . $distance . ' ORDER BY distance' ) );
                // $threadsId = DB::select( DB::raw( 'SELECT id, ( 3959 * acos( cos( radians(' . $lat . ') ) * cos( radians( lat ) ) * cos( radians( lng ) - radians(' . $lng . ') ) + sin( radians(' . $lat . ') ) * sin( radians(lat) ) ) ) AS distance FROM threads HAVING distance < ' . $distance . ' ORDER BY distance' ) );
               

            } else {
                $results = Thread::all();
            }
        }


        if ( auth()->check() ) {
            $auth_user = auth()->user();
            $privacy = $auth_user->userprivacy;

            $filterResults = $results->filter( function ( $item ) use ( $auth_user, $privacy ) {
                if ( $item->lat == null || $item->lng == null ) {
                    return false;
                }
                if ( $privacy->restricted_18 == 1 ) {
                    return true;
                } else if ( $auth_user->id == 1 ) {
                    return true;
                } else if ( $item->user_id == $auth_user->id ) {
                    return true;
                } else if ( $item->age_restriction == 0 ) {
                    return true;
                } else if ( $item->age_restriction == 13 && $privacy->restricted_13 == 1 ) {
                    return true;
                }

                return false;

            } )->values();

        } else {
            $filterResults = collect( $results )
                ->filter( function ( $item ) {
                    if ( $item->lat == null || $item->lng == null ) {
                        return false;
                    }

                    return $item->age_restriction == 0;
                } )->values();
        }

        $markers = collect( $filterResults )->map( function ( $item, $key ) {
            return [
                'position'  => ['lat' => $item->lat, 'lng' => $item->lng],
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
        // ->lists('id')
        ->pluck('id')
        ;
        return Thread::whereIn('id', $threadsId)->get();
    }

}
