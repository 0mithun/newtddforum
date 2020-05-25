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
                                @include('profiles.sidebarmenu')
                            </div>
                            <div class="col-md-9">
                                
                                <div class="row">
                                    <div class="col-md-9" >
                                        <h5>Banned all users: if thread (title or body) contains XXX</h5>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="modal fade" id="temporaryBanUser" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                                            <div class="modal-dialog" role="document">
                                              <div class="modal-content">
                                                <div class="modal-header">
                                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                  <h4 class="modal-title" id="myModalLabel">Temporary Banned Users</h4>
                                                </div>
                                                <div class="modal-body">
                                                <form action="{{ route('admin.bans.users') }}" class="form-horizontal" method="POST">
                                                    @csrf
                                                        
                                                      <div class="form-group">
                                                          <label for="ban_type" class="control-label col-md-3">Ban Type:</label>
                                                          <div class="col-md-9">
                                                             <select name="ban_type" id="ban_type" class="form-control">
                                                                 <option value="">Select Type</option>
                                                                 <option value="0">Tempoary Ban</option>
                                                                 <option value="1"> Permanent Ban</option>
                                                             </select>
                                                          </div>
                                                      </div>
                                                      
                                                      <div class="form-group">
                                                          <label for="ban_reason" class="control-label col-md-3">Message (optional):</label>
                                                          <div class="col-md-9">
                                                              <textarea name="ban_reason" id="ban_reason" cols="30" rows="4" class="form-control"></textarea>
                                                          </div>
                                                      </div>

                                                      <div class="form-group">
                                                          <label for="ban_expire_on" class="col-md-3 control-label">Days:</label>
                                                          <div class="col-md-9">
                                                              <input type="number" name="ban_expire_on" id="ban_expire_on" class="form-control">
                                                              <span class="help-block">Deafult 7 Days</span>
                                                          </div>
                                                      </div>
                                                      <div class="form-group">
                                                          <div class="col-md-9 col-md-offset-3">
                                                            <button type="submit" class="btn btn-primary">Ban Users</button>
                                                          </div>
                                                      </div>
                                                  </form>
                                                </div>
                                               
                                              </div>
                                            </div>
                                          </div>

                                        <button class="btn btn-primary btn-sm" type="button"  data-target="#temporaryBanUser" data-toggle="modal">Banned Users</button>
                                    </div>
                                </div>
                                <hr> 

                                <div class="row">
                                    <div class="col-md-9" >
                                        <h5>Un banned all users: if thread (title or body) contains XXX</h5>
                                    </div>
                                    <div class="col-md-3">
                                         <form action="{{ route('admin.unbans.users') }}" method="POST">
                                            @csrf
                                            <button class="btn btn-primary btn-sm">Unbanned Users</button>
                                        </form>
                                        
                                    </div>
                                </div>
                                <hr> 
                                


                                
                                <div class="row">
                                    <div class="col-md-9" >
                                        <h5>Ban single users</h5>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="modal fade" id="banSingleuser" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                                            <div class="modal-dialog" role="document">
                                              <div class="modal-content">
                                                <div class="modal-header">
                                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                                  <h4 class="modal-title" id="myModalLabel">Ban Single Users</h4>
                                                </div>
                                                <div class="modal-body">
                                                <form action="{{ route('admin.bans.singleusers') }}" class="form-horizontal" method="POST">
                                                    @csrf
                                                        <div class="form-group">
                                                            <label for="ban_type" class="control-label col-md-3">Username:</label>
                                                            <div class="col-md-9">
                                                                <input type="text" name="username" id="username" class="form-control">
                                                            </div>
                                                        </div>
                                                      <div class="form-group">
                                                          <label for="ban_type_single" class="control-label col-md-3">Ban Type:</label>
                                                          <div class="col-md-9">
                                                             <select name="ban_type" id="ban_type_single" class="form-control">
                                                                 <option value="">Select Type</option>
                                                                 <option value="0">Tempoary Ban</option>
                                                                 <option value="1"> Permanent Ban</option>
                                                             </select>
                                                          </div>
                                                      </div>
                                                      
                                                      <div class="form-group">
                                                          <label for="ban_reason_single" class="control-label col-md-3">Message (optional):</label>
                                                          <div class="col-md-9">
                                                              <textarea name="ban_reason" id="ban_reason_single" cols="30" rows="4" class="form-control"></textarea>
                                                          </div>
                                                      </div>

                                                      <div class="form-group">
                                                          <label for="ban_expire_on_single" class="col-md-3 control-label">Days:</label>
                                                          <div class="col-md-9">
                                                              <input type="number" name="ban_expire_on" id="ban_expire_on_single" class="form-control">
                                                              <span class="help-block">Deafult 7 Days</span>
                                                          </div>
                                                      </div>
                                                      <div class="form-group">
                                                          <div class="col-md-9 col-md-offset-3">
                                                            <button type="submit" class="btn btn-primary">Ban Users</button>
                                                          </div>
                                                      </div>
                                                  </form>
                                                </div>
                                               
                                              </div>
                                            </div>
                                          </div>

                                        <button class="btn btn-primary btn-sm" type="button"  data-target="#banSingleuser" data-toggle="modal">Banned Users</button>
                                    </div>
                                </div>
                                <hr> 



                            </div>
                        </div>
                    </div>
                        
                </div>
            </div>
        </div>
    </div>
@endsection

@section('head')
    <style>
        hr{
            margin-top:10px;
            margin-bottom:10px;
        }
        h5{
            font-size: 15px;
        }
    </style>
@endsection

@section('footer_script')
    <script>
        $('#ban_type').change(function(event){
            $('#ban_expire_on').removeAttr('disabled');
            if(this.value ==1){
                $('#ban_expire_on').attr('disabled','disabled')
            }
        })

        $('#ban_type_single').change(function(event){
            $('#ban_expire_on_single').removeAttr('disabled');
            if(this.value ==1){
                $('#ban_expire_on_single').attr('disabled','disabled')
            }
        })
        //
    </script>
@endsection