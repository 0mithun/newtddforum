@extends('layouts.app')
@section('content')
    <div class="container">
        <div class="row top-margin">
            <div class="col-md-12">
                {{-- @php dd($threads); @endphp --}}
                <search-threads :threads="{{ json_encode($threads )}}" query="{{ $query }}"></search-threads>
            </div>
        </div>
    </div>
@endsection
