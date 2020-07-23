@extends('layouts.app')

@section('content')
<tag-page :tag="{{ $tag }}"></tag-page>
@endsection