@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row top-margin">
            <div class="col-md-8">
                <div id="chartdiv"></div>
            </div>
        </div>
    </div>
@endsection

@section('footer_script')
    <script src="https://www.amcharts.com/lib/4/core.js"></script>
    <script src="https://www.amcharts.com/lib/4/charts.js"></script>
    <script src="https://www.amcharts.com/lib/4/plugins/wordCloud.js"></script>
    <script src="https://www.amcharts.com/lib/4/themes/animated.js"></script>


<!-- Chart code -->
<script>
    am4core.ready(function() {
    
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
    chart.fontFamily = "Courier New";
    var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());
    series.randomness = 0.1;
    series.rotationThreshold = 0.5;
    series.data =  {!! ($tags)   !!}



    // series.data = [ {
    //     "tag": "javascript",
    //     "count": "1765836"
    // }, {
    //     "tag": "java",
    //     "count": "1517355"
    // }, ];
    
    series.dataFields.word = "name";
    series.dataFields.value = "threads_count";
    
    series.heatRules.push({
     "target": series.labels.template,
     "property": "fill",
     "min": am4core.color("#0000CC"),
     "max": am4core.color("#CC00CC"),
     "dataField": "value"
    });
    //https://stackoverflow.com/questions/tagged/

    // series.labels.template.url = "https://stackoverflow.com/questions/tagged/{word}";
    ///tags/{word}/threads
    series.labels.template.url = "/tags/{word}/threads";
    series.labels.template.urlTarget = "_blank";
    series.labels.template.tooltipText = "{word}: {value}";
    
    var hoverState = series.labels.template.states.create("hover");
    hoverState.properties.fill = am4core.color("#FF0000");
    
    var subtitle = chart.titles.create();
    subtitle.text = "(click to open threads by tag)";
    
    var title = chart.titles.create();
    title.text = "Most Popular Tags @ Anecdotage";
    title.fontSize = 20;
    title.fontWeight = "800";
    
    }); // end am4core.ready()
    </script>



@endsection

@section('head')
<style>
    #chartdiv {
      width: 100%;
      height: 600px;
    }
    </style>
@endsection
