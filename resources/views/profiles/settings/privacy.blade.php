
@extends('layouts.app')

@section('content')
    @php
        $user = auth()->user();
        $profileUser = $user;
    @endphp
    <div class="container">
        <div class="row top-margin">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <div class="row">
                            @include('profiles._header')
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-md-3">
                                <a class="list-group-item " href="{{ route('user.settnigs', $user->username)  }}">Notifications</a>
                                <a class="list-group-item active" href="{{ route('user.settnigs.privacy', $user->username)  }}">Privacy</a>
                            </div>
                            <div class="col-md-9">
                                <form action="{{ route('user.settnigs.privacy.update', $user->username )  }}" method="post">
                                    @csrf

                                    <div class="row">
                                            
                                            <div class=" userprivacy">
                                                <div class="row">
                                                    <div class="col-md-6" >
                                                        <h4>Who can see my profile?</h4>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label class="radio-inline">
                                                            <input type="radio" name="see_my_profiles" id="see_my_profiles" value="1"
                                                                @if($privacy->see_my_profiles ==1) checked @endif
                                                            > Only Me
                                                        </label>


                                                        <label class="radio-inline">
                                                            <input type="radio" name="see_my_profiles" id="see_my_profiles" value="2"
                                                                @if($privacy->see_my_profiles ==2) checked @endif
                                                            > Me & My Friends
                                                        </label>


                                                        <label class="radio-inline">
                                                            <input type="radio" name="see_my_profiles" id="see_my_profiles" value="3"
                                                                @if($privacy->see_my_profiles ==3) checked @endif
                                                            > Everyone
                                                        </label>
                                                    </div>
                                                </div>
                                                <hr>

                                                <div class="row">
                                                    <div class="col-md-6" >
                                                        <h4>Who can see my Threads?</h4>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label class="radio-inline">
                                                            <input type="radio" name="see_my_threads" id="inlineRadio1" value="1"
                                                                @if($privacy->see_my_threads ==1) checked @endif
                                                            > Only Me
                                                        </label>


                                                        <label class="radio-inline">
                                                            <input type="radio" name="see_my_threads" id="inlineRadio2" value="2"
                                                                @if($privacy->see_my_threads ==2) checked @endif
                                                            > Me & My Friends
                                                        </label>


                                                        <label class="radio-inline">
                                                            <input type="radio" name="see_my_threads" id="inlineRadio3" value="3"
                                                                @if($privacy->see_my_threads ==3) checked @endif
                                                            > Everyone
                                                        </label>
                                                    </div>
                                                </div>
                                                <hr>
                                                <div class="row">
                                                    <div class="col-md-6" >
                                                        <h4>Who can see my Favorites?</h4>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label class="radio-inline">
                                                            <input type="radio" name="see_my_favorites" id="inlineRadio1" value="1"
                                                                    @if($privacy->see_my_favorites ==1) checked @endif
                                                            > Only Me
                                                        </label>


                                                        <label class="radio-inline">
                                                            <input type="radio" name="see_my_favorites" id="inlineRadio2" value="2"
                                                            @if($privacy->see_my_favorites ==2) checked @endif
                                                            > Me & My Friends
                                                        </label>


                                                        <label class="radio-inline">
                                                            <input type="radio" name="see_my_favorites" id="inlineRadio3" value="3"
                                                                @if($privacy->see_my_favorites ==3) checked @endif
                                                            > Everyone
                                                        </label>
                                                    </div>
                                                </div>
                                                
                                                <hr>
                                                <div class="row">
                                                    <div class="col-md-6" >
                                                        <h4>Who can see my Friends?</h4>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label class="radio-inline">
                                                            <input type="radio" name="see_my_friends" id="inlineRadio1" value="1"
                                                                @if($privacy->see_my_friends ==1) checked @endif
                                                            > Only Me
                                                        </label>


                                                        <label class="radio-inline">
                                                            <input type="radio" name="see_my_friends" id="inlineRadio2" value="2"
                                                                @if($privacy->see_my_friends ==2) checked @endif
                                                            > Me & My Friends
                                                        </label>


                                                        <label class="radio-inline">
                                                            <input type="radio" name="see_my_friends" id="inlineRadio3" value="3"
                                                                @if($privacy->see_my_friends ==3) checked @endif
                                                            > Everyone
                                                        </label>
                                                    </div>
                                                </div>

                                                <hr>
                                                <div class="row">
                                                    <div class="col-md-6" >
                                                        <h4>Who can send messages?</h4>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label class="radio-inline">
                                                            <input type="radio" name="send_me_message" id="inlineRadio1" value="1"
                                                                @if($privacy->send_me_message ==1) checked @endif
                                                            > Only Friends
                                                        </label>


                                                        <label class="radio-inline">
                                                            <input type="radio" name="send_me_message" id="inlineRadio2" value="2"
                                                                @if($privacy->send_me_message ==2) checked @endif
                                                            > Everyone
                                                        </label>
                                                    </div>
                                                </div>


                                                <hr>
                                                <div class="row">
                                                    <div class="col-md-6" >
                                                        <h4>Create new thread:</h4>
                                                    </div>
                                                    <div class="col-md-6">

                                                        

                                                        <div class="form-group">
                                                            <div class="checkbox">
                                                                <label>
                                                                    <input type="checkbox" name="thread_create_share_facebook" value="1"
                                                                        @if($privacy->thread_create_share_facebook ==1)
                                                                            checked
                                                                        @endif
                                                                    >
                                                                    Share on Facebook
                                                                </label>
                                                            </div>
                                                            <div class="checkbox ">
                                                                <label>
                                                                    <input type="checkbox" value="1" name="thread_create_share_twitter"

                                                                        @if($privacy->thread_create_share_twitter ==1)
                                                                        checked
                                                                            @endif
                                                                    >
                                                                    Share on Twitter
                                                                </label>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </div>


                                                <hr>
                                                <div class="row">
                                                    <div class="col-md-6" >
                                                        <h4>On show allow anyone:</h4>
                                                    </div>
                                                    <div class="col-md-6">

                                                        

                                                        <div class="form-group">
                                                            <div class="checkbox">
                                                                <label>
                                                                    <input type="checkbox" name="anyone_share_my_thread_facebook" value="1"
                                                                        @if($privacy->anyone_share_my_thread_facebook ==1)
                                                                            checked
                                                                        @endif
                                                                    >
                                                                    Share on Facebook
                                                                </label>
                                                            </div>
                                                            <div class="checkbox ">
                                                                <label>
                                                                    <input type="checkbox" value="1" name="anyone_share_my_thread_twitter"

                                                                        @if($privacy->anyone_share_my_thread_twitter ==1)
                                                                        checked
                                                                            @endif
                                                                    >
                                                                    Share on Twitter
                                                                </label>
                                                            </div>

                                                        </div>

                                                    </div>

                                                    
                                                

                                                
                                                </div>
                                                <hr>
                                                <div class="row">
                                                    <div class="col-md-6" >
                                                        <h4>Restrictions:</h4>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <div class="form-group">
                                                            <div class="checkbox">
                                                                <label>
                                                                    <input type="checkbox" name="restricted_13" value="1"
                                                                        @if($privacy->restricted_13 ==1)
                                                                            checked
                                                                        @endif
                                                                    >
                                                                    I confirm that I am 13+ and wish to view PG-13 content
                                                                </label>
                                                            </div>
                                                            <div class="checkbox">
                                                                <label>
                                                                    <input type="checkbox" name="restricted_18" value="1"
                                                                        @if($privacy->restricted_18 ==1)
                                                                            checked
                                                                        @endif
                                                                    >
                                                                    I confirm that I am 18+ and wish to view adult content
                                                                </label>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>

                                    <div class="fow">
                                        <div class="form-group">
                                            <button class="btn btn-primary">Save</button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('footer_script')

@endsection