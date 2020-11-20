<nav class="navbar navbar-default navbar-static-top navbar-fixed-top" style="margin-bottom:50px">
    <div class="container navbar-menu">
       <div class="nav-col main-logo">
            <a class=" navbar-brand" href="{{ url('/') }}">
                <img  class="main-menu-logo" src="{{ asset('images/anec_online.jpg') }}" alt="">
            </a>
       </div>
       <div class="main-menu">
            <ul class="nav navbar-nav">
                <li class="dropdown">

                    @if(request()->query('rated') == 1)
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                        aria-expanded="false">Trending <span class="caret"></span></a>
                    @elseif( request()->query('viewed') == 1)
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                        aria-expanded="false">Most Viewed <span class="caret"></span></a>
                    @elseif( request()->query('recents') == 1)
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                        aria-expanded="false">Most Recent <span class="caret"></span></a>
                    @elseif( request()->query('video') == 1)
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                        aria-expanded="false">Video <span class="caret"></span></a>
                    @elseif( Route::currentRouteName() == 'closet.thread')
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                        aria-expanded="false">Closset <span class="caret"></span></a>
                    @else
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                        aria-expanded="false">Top <span class="caret"></span></a>
                    @endif

                    <ul class="dropdown-menu">                        
                        <li class="{{ request()->query('rated') == 1 ? 'active' :'' }}"><a href="/anecdotes?rated=1">Trending</a></li>
                        <li class="{{ request()->query('viewed') == 1 ? 'active' :'' }}"><a href="/anecdotes?viewed=1" >Most Viewed</a></li>
                        <li class="{{ request()->query('recents') == 1 ? 'active' :'' }}"><a href="/anecdotes?recents=1">Most Recent</a></li>
                        <li class="{{ Route::currentRouteName() == 'closet.thread' ? 'active' :'' }}"><a href="{{ route('closet.thread') }}">Closest</a></li>
                        <li class="{{ request()->query('video') == 1 ? 'active' :'' }}"><a href="/anecdotes?video=1">Video</a></li>
                    </ul>
                </li>

                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                    aria-expanded="false">Categories <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        {{-- <li><a href="/anecdotes?rated=1">Top</a></li> --}}
                        @foreach ($channels as $channel)
                            <li><a href="{{ route('tags.threads.list', strtolower($channel->name)) }}">{{ $channel->name }}</a></li>
                        @endforeach
                        <li><a href="{{ route('show.tags') }}">More</a></li>
                    </ul>
                </li>

                <li class="dropdown">
                    <a href="#" class="dropdown-toggle " data-toggle="dropdown" role="button" aria-haspopup="true"
                    aria-expanded="false" >
                        <img src="/images/emojis/funny.png" class="navbar-icon" alt="">
                    <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                        @foreach($emojis as $emoji)
                            <li class="navigation-emoji-icon"><a href="/anecdotes?emoji={{ $emoji->name }}" class="navigation-emoji " style="background-image: url(/images/emojis/{{ $emoji->name }}.png)">{{ $emoji->name }}</a></li>
                        @endforeach 
                    </ul>
                </li>
            </ul>
       </div>
       <div class="nav-col tools-menu">
            {{-- <form class="navbar-form search-form"  method="GET" action="/threads/search">
                    <input type="text" class="form-control search-box" name="query" placeholder="Search">

            </form> --}}
            <search-form></search-form>
            <ul class="nav navbar-nav tools-right">
                <li>
                    <a href="{{ route('map.show') }}" class="navbar-menu-icon">
                        <img class="navbar-icon marker" src="{{ asset('images/map_marker.png') }}" alt="">
                    </a>
                </li>    
                <li>
                    <a href="/threads/create" class="navbar-menu-icon">
                        <img class="navbar-icon pen" src="{{ asset('images/pen_with.png') }}" alt="">
                    </a>
                </li> 
            </ul>
       </div>
        @if (Auth::guest())
            <div class="nav-col auth-btn"> 
                    <a href="{{ route('login') }}" class="btn sign-in-btn  btn-primary navbar-btn">Sign In</a>
                    {{-- <a href="{{ route('register') }}" class="btn btn-block  btn-primary navbar-btn">Sign Up</a> --}}
            </div>
        @else
            <div class="nav-col user-menu">
                <ul class="nav navbar-nav user-nav-menu">
                    <message-notification></message-notification>
                    <user-notifications></user-notifications>    
                </ul>
                <ul class="nav navbar-nav">
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle profile-avatar" data-toggle="dropdown" role="button" aria-haspopup="true"
                        aria-expanded="false">
                        {{-- <img class="profile-photo " src="{{ asset('images/default.png') }}" alt=""> {{ Auth::user()->name  }} --}}
                        <img class="profile-photo " src="{{ asset('images/default.png') }}" alt=""> Me
                        <span class="caret"></span></a>

                        <ul class="dropdown-menu" role="menu">
                            <li>
                                <a href="{{ route('profile', Auth::user()->username) }}">My Profile</a>
                                <a href="{{ route('user.settnigs', Auth::user()->username) }}">Settings</a>
                            </li>

                            <li>
                                <a href="{{ route('logout') }}"
                                   onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                    Logout
                                </a>

                                <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                      style="display: none;">
                                    {{ csrf_field() }}
                                </form>
                            </li>
                        </ul>

                    </li>
                </ul>
            </div>
       @endif
    </div>
</nav>