@extends('layouts.app')

@section('content')


<tag-page :tag="{{ $tag }}"></tag-page>
{{-- <tag-page :tag="{{mb_convert_encoding($tag,"UTF-8","UTF-8") }}"></tag-page> --}}
@endsection