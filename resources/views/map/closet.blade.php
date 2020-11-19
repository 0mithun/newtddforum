
@extends('layouts.app')

@section('content')
    @php
        $user = auth()->user();
    @endphp
    
            <div class="col-md-12">
                <div class="row" style="margin-top:55px">
                    <div class="col-md-2">

                        <place-search  userLat={{ $userLocations['lat'] }} userLng={{ $userLocations['lng'] }} :defaultradius=0 :nearest=false></place-search>

                        <br>
                        <map-results></map-results>
                                               
                    </div>
                    <div class="col-md-10">
                            <thread-map userLat={{ $userLocations['lat'] }} userLng={{ $userLocations['lng'] }} :nearest=true ></thread-map>

                    </div>
                </div>
            </div>
@endsection


@section('head')
    <style>
        .container .row{
            margin-top: 0px;
        }
    </style>
@endsection
