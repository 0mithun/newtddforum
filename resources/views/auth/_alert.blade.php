@if(session()->has('alert'))
    <div class="alert alert-{{ session('alert_type') }}>
        {{  session('alert') }}
    </div>
@endif