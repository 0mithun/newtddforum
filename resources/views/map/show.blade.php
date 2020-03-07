@extends('layouts.app')

@section('content')
    @php
        $user = auth()->user();
    @endphp
    
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-3"></div>
                    <div class="col-md-9">
                        <place-search  userLat={{ $userLocations['lat'] }} userLng={{ $userLocations['lng'] }} ></place-search>
                    </div>
                </div>
                <br>
                <div class="row">
                    <div class="col-md-3">
                    <map-results></map-results>
                    </div>
                    <div class="col-md-9">
                        
                    <thread-map userLat={{ $userLocations['lat'] }} userLng={{ $userLocations['lng'] }} ></thread-map>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
@endsection
