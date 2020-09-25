@php
    $totalPage = ceil($total_records / $per_page);
@endphp

<nav aria-label="...">
    <ul class="pagination">
        @if($current_page != 1)
      <li >
        <a href="?page={{ $current_page - 1 }}"><span aria-hidden="true">&laquo;</span></a>
      </li>


      @endif

      @for($page = 1; $page<=$totalPage; $page++)
        <li class="{{ $current_page == $page ? 'active':'' }}">
                <a href="?page={{ $page }}">{{ $page }}</a>
        </li>
      @endfor

      @if($current_page != $totalPage)
      <li >
        <a href="?page={{ $current_page + 1 }}"><span aria-hidden="true">&raquo;</span></a>
      </li>
      @endif
    </ul>
  </nav>
