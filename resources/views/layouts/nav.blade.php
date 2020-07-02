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
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                    aria-expanded="false">Top <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="/threads?rated=1">Top</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                    aria-expanded="false">Browse <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="/threads?rated=1">Top</a></li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                    aria-expanded="false">Emoji <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="/threads?rated=1">Top</a></li>
                    </ul>
                </li>
            </ul>
       </div>
       <div class="nav-col tools-menu">
            <form class="navbar-form ">
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Search">
                </div>
            </form>

            <ul class="nav navbar-nav  ">
                <li>
                    <a href="/threads?rated=1" class="navbar-menu-icon">
                        <img class="navbar-icon marker" src="{{ asset('images/map_marker.png') }}" alt="">
                    </a>
                </li>    
                <li>
                    <a href="/threads?rated=1" class="navbar-menu-icon">
                        <img class="navbar-icon pen" src="{{ asset('images/pen_with.png') }}" alt="">
                    </a>
                </li> 
            </ul>
       </div>
       <div class="nav-col user-menu">
            

            <ul class="nav navbar-nav user-nav-menu">
                <message-notification></message-notification>
                <user-notifications></user-notifications> 
 
            </ul>
            <ul class="nav navbar-nav">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle profile-avatar" data-toggle="dropdown" role="button" aria-haspopup="true"
                    aria-expanded="false">
                    <img class="profile-photo " src="{{ asset('images/default.png') }}" alt=""> Emoji 
                    <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="/threads?rated=1">Top</a></li>
                    </ul>
                </li>
            </ul>
       </div>
    </div>
</nav>