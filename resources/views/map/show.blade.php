@extends('layouts.app')

@section('content')
    @php
        $user = auth()->user();
    @endphp
    
    <div class="">
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-3">
                        <div class="panel">
                            <div class="panel-heading">
                                <place-search  userLat={{ $userLocations['lat'] }} userLng={{ $userLocations['lng'] }} ></place-search>
                            </div>
                            <div class="panel-body">
                                
                            
                                <map-results></map-results>
                            </div>
                        </div>
                        
                    </div>
                    <div class="col-md-9">
                    
                        <div class="row">
                            <thread-map userLat={{ $userLocations['lat'] }} userLng={{ $userLocations['lng'] }} ></thread-map>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
@endsection
