@php
    $totalPage = ceil($total_records / $per_page);
    $link_limit = 12; // maximum number of links (a little bit inaccurate, but will be ok for now)
@endphp

@if ($totalPage > 1)
    <ul class="pagination">
        <li class="{{ ($current_page== 1) ? ' disabled' : '' }}">
            <a href="?page=1">First</a>
         </li>
        @for ($i = 1; $i <= $totalPage; $i++)
            @php
            $half_total_links = floor($link_limit / 2);
            $from = $current_page - $half_total_links;
            $to = $current_page + $half_total_links;
            if ($current_page < $half_total_links) {
               $to += $half_total_links - $current_page;
            }
            if ($totalPage - $current_page < $half_total_links) {
                $from -= $half_total_links - ($totalPage- $current_page) - 1;
            }
            @endphp
            @if ($from < $i && $i < $to)
                <li class="{{ ($current_page == $i) ? ' active' : '' }}">
                    <a href="?page={{ $i }}">{{ $i }}</a>
                </li>
            @endif
        @endfor
        <li class="{{ ($current_page == $totalPage) ? ' disabled' : '' }}">
            <a href="?page={{ $totalPage }}">Last</a>
        </li>
    </ul>
@endif
