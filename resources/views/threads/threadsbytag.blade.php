@extends('layouts.app')

@section('content')


<tag-page :threads="{{ json_encode($threads) }}" :tag="{{ ($tag) }}" :total_records="{{ $total_records}}" :current_page="{{ $current_page }}" ></tag-page>
{{-- <tag-page :tag="{{ json_encode(mb_convert_encoding($tag,"UTF-8","UTF-8")) }}"></tag-page> --}}
@endsection