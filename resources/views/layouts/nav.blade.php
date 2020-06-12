<nav class="navbar navbar-default navbar-static-top navbar-fixed-top" style="margin-bottom:50px">
    <div class="container">
        <div class="navbar-header">

            <!-- Collapsed Hamburger -->
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#app-navbar-collapse">
                <span class="sr-only">Toggle Navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>

            <!-- Branding Image -->
            <a class="navbar-brand" href="{{ url('/') }}">
                {{ config('app.name', 'Laravel') }}
            </a>
        </div>

        <div class="collapse navbar-collapse" id="app-navbar-collapse">
            <!-- Left Side Of Navbar -->
            <ul class="nav navbar-nav">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false">Browse <span class="caret"></span></a>

                    <ul class="dropdown-menu">

                    <!-- Need to change -->
                        <li><a href="/threads?rated=1">Top Rated</a></li>
                        
                        <li><a href="/threads">All Threads</a></li>
                        <!-- Need to change  -->

                        <li><a href="{{ route('closet.thread') }}">Closest</a></li>

                        @if (auth()->check())
                            <li><a href="/threads?by={{ auth()->user()->username }}">My Threads</a></li>
                            <li><a href="/threads?favorites=1">My Favorites</a></li>
                        @endif
                        <li><a href="/threads?popular=1">Most Commented</a></li>
                        <li><a href="/threads?viewed=1">Most Viewed</a></li>
                        <li><a href="/threads?recents=1">Most Recent</a></li>
                        <li><a href="/threads?liked=1">Most Liked</a></li>
                        
                        <li><a href="/threads?bestofweek=1">Best Of The Week</a></li>

                        <li><a href="/threads?video=1">Video</a></li>
                        <!-- <li><a href="/threads?unanswered=1">Unanswered Threads</a></li> -->
                    </ul>
                </li>

                <li>
                    <a href="/threads/create">New Thread</a>
                </li>

                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false">Channels <span class="caret"></span></a>

                    <ul class="dropdown-menu">
                        @foreach ($channels as $channel)
                            <li><a href="/threads/{{ $channel->slug }}">{{ $channel->name }}</a></li>
                        @endforeach
                    </ul>
                </li>
                <li>
                <a href="{{ route('show.tags') }}">Tags</a>
                </li>
                <li>
                    <a href="{{ route('map.show') }}">Map</a>
                </li>
                
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                       aria-expanded="false">Emoticions <span class="caret"></span></a>

                    <ul class="dropdown-menu">
                        @foreach($emojis as $emoji)
                            <li class="navigation-emoji-icon"><a href="/threads?emoji={{ $emoji->name }}" class="navigation-emoji " style="background-image: url(images/emojis/{{ $emoji->name }}.png)">{{ $emoji->name }}</a></li>

                        @endforeach 
                    <!-- Need to change -->
                        {{-- <li class="navigation-emoji-icon"><a href="/threads?emoji=like" class="navigation-emoji navigation-emoji-like">Like</a></li>
                        <li class="navigation-emoji-icon"><a href="/threads?emoji=love" class="navigation-emoji navigation-emoji-love">Love</a></li>
                        <li class="navigation-emoji-icon"><a href="/threads?emoji=haha" class="navigation-emoji navigation-emoji-haha">Haha</a></li>
                        <li class="navigation-emoji-icon"><a href="/threads?emoji=wow" class="navigation-emoji navigation-emoji-wow">Wow</a></li>
                        <li class="navigation-emoji-icon"><a href="/threads?emoji=sad" class="navigation-emoji navigation-emoji-sad">Sad</a></li>
                        <li class="navigation-emoji-icon"><a href="/threads?emoji=angry" class="navigation-emoji navigation-emoji-angry">Angry</a></li> --}}
                    </ul>
                </li>




                @if(Auth::check())
                <li>
                    <a href="{{ route('chat.index') }}">Message</a>
                </li>

                @endif

            </ul>

            <!-- Right Side Of Navbar -->
            <ul class="nav navbar-nav navbar-right">
                <!-- Authentication Links -->


                @if (Auth::guest())
                    <li><a href="{{ route('login') }}">Login</a></li>
                    <li><a href="{{ route('register') }}">Register</a></li>
                @else
                <message-notification></message-notification>
                    <user-notifications></user-notifications>
                   
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                           aria-expanded="false">
                            {{ Auth::user()->name  }} <span class="caret"></span>
                        </a>

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
                @endif
            </ul>
        </div>
    </div>
</nav>