@extends('layouts.app')

@section('content')
@php
    $user = auth()->user();
@endphp
   

<chat-message :authuser="{{ $user }}"></chat-message>
@endsection

