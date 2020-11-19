

<div class="col-md-3" style="display: flex;">
    <img src="{{ asset($profileUser->avatar_path)  }}" class="img-circle" alt="Cinque Terre" style="width:60px; height: auto;margin-right:20px">
    <h3>{{ ucfirst($profileUser->name) }}</h3>
</div>

<div class="col-md-6">
    @if(session()->has('message'))
        <div class="alert alert-success alert-dismissible" role="alert" style="margin-bottom: 0px">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <strong>{{ session('message')  }}</strong>
        </div>
    @endif

    @if(session()->has('errormessage'))
        <div class="alert alert-danger alert-dismissible" role="alert" style="margin-bottom: 0px">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <strong>{{ session('errormessage')  }}</strong>
        </div>
    @endif

    @if(session()->has('successmessage'))
        <div class="alert alert-success alert-dismissible" role="alert" style="margin-bottom: 0px">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <strong>{{ session('successmessage')  }}</strong>
        </div>
    @endif
</div>