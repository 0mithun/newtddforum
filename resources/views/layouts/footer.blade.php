    <div  id="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-4 footer-content" >
                    <p> {!! $admin->copyright !!} </p>
                </div>
                <div class="col-md-8">
                    <div class="pull-right">
                        <ul class="footer-menu">

                            <li><a href="{{ route('privacypolicy') }}">Privacy</a></li>
                            <li>
                                <a href="{{ route('faq')  }}">faq</a>
                            </li>
                            <li>
                                <a href="{{ route('tos')  }}">Terms</a>
                            </li>
                            <li><a href="{{ route('contact') }}">Contact</a></li>
                        </ul>


                    </div>
                </div>
            </div>
        </div>
    </div>
