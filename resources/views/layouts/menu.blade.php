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
    <a class=" navbar-brand" href="{{ url('/') }}">
    <img  class="main-logo" src="{{ asset('images/anec_online.jpg') }}" alt="">
    </a>
</div>

<div class="collapse navbar-collapse " id="app-navbar-collapse">
    <!-- Left Side Of Navbar -->
            <div class="col-md-3 main-nav">
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
            <div class="col-md-3 tools-nav">
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
            <div class="col-md-4 user-nav navbar-right">
                <ul class="nav navbar-nav user-nav  ">
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                           aria-expanded="false">
                           <img class="navbar-icon marker" src="{{ asset('images/default.png') }}" alt=""> Emoji 
                           <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="/threads?rated=1">Top</a></li>
                        </ul>
                    </li>
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
        
        

        


        {{-- <ul class="nav navbar-nav user-nav navbar-right">
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                   aria-expanded="false">Browse <span class="caret"></span></a>
                <ul class="dropdown-menu">

                <!-- Need to change -->
                    <li><a href="/threads?rated=1">Top Rated</a></li>

                </ul>
            </li>
        </ul> --}}

</div>