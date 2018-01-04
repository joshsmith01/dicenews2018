// load data

if(!console){
    console = {};
}

if(!console.log){
    console.log = function(){};
}

var viewModel = {
    zoomX:      ko.observable(0),
    zoomY:      ko.observable(0),
    zoomLevel:  ko.observable(1.0),
    chart:      undefined,
    selected:   false,
    dataType:   ko.observable("Skills"),
    logScale:   ko.observable(true),
    
    initialZoomX: ko.observable(1.0),
    initialZoomY: ko.observable(1.0),
    
    items:        ko.observableArray([]),
    json:         ko.observable(),
    selectedItem: ko.observable(""),
    
    largeDataSet: ko.observable(false),
    
    onDataTypeChanged: function(){
        this.selectedItem("");
    },
    onSelectedItemChanged: function(){},
    smallScreen: ko.observable(false)
}

function getTags(items){
    var tags = [""];
    for(var i =0; i < items.length; i++){
            var item = items[i];
            tags.push(item.tag);
    }
    return tags;
}

function resizeChart(){
    // remove max height setting
    $('#chart').css('max-height', '');
    console.log("resizing");
    // set the chart height dynamically
    var w = window;
    var d = document;
    var e = d.documentElement;
    var g = d.getElementsByTagName('body')[0];					

    var width = w.innerWidth || e.clientWidth || g.clientWidth;			
    var height = w.innerHeight || e.clientHeight|| g.clientHeight;

    var topBarHeight = d.getElementById('topBar').clientHeight;
    $("#chart").height( (height - topBarHeight - 40));
    $("#chart").width(width);
}

function renderChart(){
    
    resizeChart();
    
     $("#mobileInfoBox").html("");
    // load drop down
    var items = viewModel.json();
    if(false == viewModel.largeDataSet()){
        items = items.slice(0,200);
    }
    
    var ddItems = getTags(items);
    ddItems.sort();
    viewModel.items(ddItems);
    
    if(!viewModel.smallScreen()){
        $("#selItems").trigger("chosen:updated");
    }
    else{
        $("option").addClass("largerfont");        
    }

    var xs = {};

    var minX = 99999;
    var minY = 99999;
    var maxX = 0;
    var maxY = 0;

    var xy2item = {};
    var lbl2item = {};

    function getKey(x,y){
        return parseFloat(x).toString().trim() + "," + parseFloat(y).toString().trim();
    }

    var lblToCols = {};

    var keys = [];
    var lbls = [];

    var columns = [];
    var minRatio = 99999999;
    var maxRatio = 0;
    
    for(var i =0; i < items.length; i++){

        var item = items[i];
        var original_item = item;
        if(viewModel.logScale()){
            item = {
                tag: item.tag,
                x:   Math.log(1.0 + 100.0 * item.x),
                y:   Math.log(1.0 + 100.0 * item.y),
                ratio: item.ratio
            }
        }
        
        lbl2item[item.tag] = item;
        
        var itemTxt = item.tag;
        var xy = getKey(item.x, item.y);
        xy2item[xy] = original_item;

        var xlbl = item.tag + "_x";
        columns.push([xlbl, item.x]);
        columns.push([item.tag, item.y]);
        lbls.push(item.tag);
        xs[item.tag] = xlbl;

        minX = Math.min(item.x, minX);
        minY = Math.min(item.y, minY);

        maxX = Math.max(item.x, maxX);
        maxY = Math.max(item.y, maxY);
        
        minRatio = Math.min(minRatio, item.ratio);
        maxRatio = Math.max(maxRatio, item.ratio);
    }
            
    var colorScaleRed = d3.scale.linear()
        .range(['yellow', 'red'])
        .domain([0.0, 3]);
    
    var colorScaleBlue = d3.scale.linear()
        .range(['yellow', 'blue'])
        .domain([1.0, minRatio]);
    
    function getColor(item){
        if(item.ratio > 1.0){
            return colorScaleRed(Math.min(3.0,item.ratio));    
        }
        else{
            return colorScaleBlue(item.ratio);
        }
    }
    
    var colors = {};
    for(var i = 0; i < lbls.length; i++){
        var item = lbl2item[lbls[i]];
        colors[item.tag] = getColor(item);
    }

    var offset = 0.05 * (maxX - minX);

    maxX = maxX + offset;
    minX = minX - offset;
    
    // ensure positive
    minX = Math.max(0.0, minX);
    minY = Math.max(0.0, minY);
    
    // define line
    minLine = Math.max(minX, minY);
    maxLine = Math.min(maxX, maxY);
    
    columns.push(['fit_x', minLine, maxLine]);
    columns.push(['fit', minLine, maxLine]);
    lbls.push("fit");
    xs["fit"] = "fit_x";
    colors['fit'] = '#000000';
    // end define line

    var initialZoomValueX = (maxX - minX) / 4.0;
    var initialZoomValueY = (maxY - minY) / 4.0;

    viewModel.initialZoomX(initialZoomValueX);
    viewModel.initialZoomY(initialZoomValueY);
    
    viewModel.zoomX(initialZoomValueX);
    viewModel.zoomY(initialZoomValueY);
    viewModel.zoomLevel(1.0);
    
    function zoomTo(item, increaseZoom){
        if(increaseZoom){
            viewModel.zoomX(viewModel.zoomX() / 2.0);
            viewModel.zoomY(viewModel.zoomY() / 2.0);
            viewModel.zoomLevel(viewModel.zoomLevel() * 2.0);
        }
        
        var x = parseFloat(item.x);
        var y = parseFloat(item.y);
        
        var xmin = x - viewModel.zoomX();
        var ymin = y - viewModel.zoomY();

        var xmax = x + viewModel.zoomX();
        var ymax = y + viewModel.zoomY();
        
        xmin = Math.max(0.0, xmin);
        ymin = Math.max(0.0, ymin);

        viewModel.chart.zoom([xmin, xmax, ymin, ymax]);
        viewModel.chart.select([item.tag], null, true);
    }
    
    viewModel.onSelectedItemChanged = function(){
        var key = viewModel.selectedItem();
        if(key.trim().length > 0){
            var item = lbl2item[key];
            if(item){
                zoomTo(item, false);
                if(viewModel.smallScreen()){
                    
                    var temperature = "Tepid";
                    if(item.ratio >= 3.0){
                        temperature = "Hot";
                    }
                    else if(item.ratio >= 1.5){
                        temperature = "Warm";
                    }
                    else if(item.ratio < 0.35){                    
                        temperature = "Cold";
                    }
                    else if(item.ratio < 0.65){
                        temperature = "Cool";
                    }
                    
                    var color = colors[item.tag];

                    var html = "<table class='c3-tooltip'><tbody><tr><td colspan='4' class='name' style='font-weight:bold; font-size:12pt;text-align:left;'><span style='padding:5px;background-color:" + color + "'></span>" + item.tag + "</td></tr>" + 
                        "<tr><td style='padding:5pt;font-weight:bold;text-align:left;'>Temperature:</td><td style='padding:5pt;font-weight:bold;color:" + color + "'>" + temperature + "</td>" + 
                        "<td style='padding:5pt;font-weight:bold;text-align:left;'>Demand Ratio:</td><td style='padding:5pt;'>" + round(item.ratio,2) + "</td></tr>" + 
                        "<tr><td style='padding:5pt;font-weight:bold;text-align:left;'>Supply:</td><td style='padding:5pt;'>" + round(item.x,3) + "%</td>" + 
                        "<td style='padding:5pt;font-weight:bold;text-align:left;'>Demand:</td><td style='padding:5pt;'>" + round(item.y,3) + "%</td></tr>" + 
                        "</tbody></table>";
                    $("#mobileInfoBox").html(html);
                }
            }
        }
        else{
            // reset chart
            renderChart();            
        }
    }    
    
    function genChart(){
        point = {
          show: false, 
          r: 3.5,
          select: {
            //r: 10.0
          },
          focus: {
            expand: {
              r: 7.5
            }
          }
        };
        var upScale = 3.0;
        if(viewModel.smallScreen()){
            point.r = point.r * upScale;
            point.focus.expand = point.focus.expand * upScale;
        }        
        
        var chart = c3.generate({
            bindto: '#chart',
            legend: {
                hide: true,
                position: 'right'            
            },
            zoom: {
                enabled: false,
                rescale: true,
                //extent: [1, 100]
            },
            data: {
                xs: xs,            
                columns: columns,
                
                type: 'scatter',
                types:{
                    fit: 'line'
                },
            
                labels: false,
                colors: colors,

                // ZOOM
                onclick: function (d, element) {
                    if(d.id == viewModel.selectedItem()){
                        // zoom in
                        var item = lbl2item[d.id];
                        zoomTo(item, true);
                    }
                    else{
                        viewModel.selectedItem(d.id);
                        $("#selItems").trigger("chosen:updated");
                        viewModel.onSelectedItemChanged();
                    }
                },
                selection: {
                    enabled: true
                }
            },
            axis: {
                x: {
                    label: viewModel.logScale()? 'Supply - relative number of job seekers (log scale)' : 'Supply (percentage of job seeker\'s ' + viewModel.dataType().toLowerCase() + ')',
                    tick: {
                        fit: false,
                        format: function(x){ return d3.round(x, 5)},
                    },
                    min : minX,
                    max:  maxX
                },
                y: {
                    label: viewModel.logScale()? 'Demand - relative number of jobs (log scale)' : 'Demand (percentage of job listing\'s ' + viewModel.dataType().toLowerCase() + ')',
                    tick: {
                        fit: false,
                        format: function(x){ return d3.round(x, 5)},
                    },
                    min: minY,
                    max: maxY
                },
                y2: {
                    min: minY,
                    max: maxY
                }
            },
            tooltip: {
                contents: function (d, defaultTitleFormat, defaultValueFormat, color) {
                    if(viewModel.smallScreen()){
                        return;
                    }
                    var xy = getKey(d[0].x, d[0].value);
                    var item = xy2item[xy];
                    if(!item){
                        return;
                    }
                                    
                    var temperature = "Tepid";
                    if(item.ratio >= 3.0){
                        temperature = "Hot";
                    }
                    else if(item.ratio >= 1.5){
                        temperature = "Warm";
                    }
                    else if(item.ratio < 0.35){                    
                        temperature = "Cold";
                    }
                    else if(item.ratio < 0.65){
                        temperature = "Cool";
                    }

                    var html = "<table class='c3-tooltip'><tbody><tr><td colspan='2' class='name' style='font-weight:bold; font-size:12pt;text-align:left;'><span style='padding:5px;background-color:" + color(d[0]) + "'></span>" + item.tag + "</td></tr>" + 
                        "<tr><td style='padding:5pt;font-weight:bold;text-align:left;'>Temperature:</td><td style='padding:5pt;font-weight:bold;color:" + color(d[0]) + "'>" + temperature + "</td></tr>" + 
                        "<tr><td style='padding:5pt;font-weight:bold;text-align:left;'>Demand Ratio:</td><td style='padding:5pt;'>" + round(item.ratio,2) + "</td></tr>" + 
                        "<tr><td style='padding:5pt;font-weight:bold;text-align:left;'>Supply:</td><td style='padding:5pt;'>" + round(item.x,3) + "%</td></tr>" + 
                        "<tr><td style='padding:5pt;font-weight:bold;text-align:left;'>Demand:</td><td style='padding:5pt;'>" + round(item.y,3) + "%</td></tr>" + 
                        "</tbody></table>";
                    return html;
                }
            },
            point: point
        });
        
        viewModel.chart = chart;
    }    

    genChart();
    
    if(viewModel.selectedItem() != ""){
        viewModel.onSelectedItemChanged();
    }
}

var title_json = get_titles();
var skills_json = get_skills();

viewModel.json(skills_json);

function switchJson(){
    if(viewModel.dataType() == "Titles" && viewModel.json() != title_json){
        viewModel.json(title_json)
    }
    else if(viewModel.dataType() == "Skills" && viewModel.json() != skills_json){
        viewModel.json(skills_json)
    }
    else{
        return;
    }
    renderChart();
}

ko.applyBindings(viewModel);


var w = window;
    var d = document;
    var e = d.documentElement;
    var g = d.getElementsByTagName('body')[0];					

var width = w.innerWidth || e.clientWidth || g.clientWidth;			
if(width < 768 || window.matchMedia("only screen and (max-width: 1000px)").matches){
    var items = $(".regularfont");
    items.removeClass("regularfont");
    items.addClass("largerfont");
    
    // default to small dataset for 
    viewModel.largeDataSet(false);
    viewModel.smallScreen(true);
}

// now load the chart
renderChart();

$("#btnReset").click(function(){
    renderChart();
});

if(!viewModel.smallScreen()){
    $("#selItems").chosen( {
                    disable_search_threshold:   10, 
                    allow_single_deselect:      true, 
                    enable_split_word_search:   true
    });    
}

$("#checkLogScale").click(function(){
    renderChart();
});
$("#checkLargeDataset").click(function(){
    renderChart();
});
$("#radioTitles").click(switchJson);
$("#radioSkills").click(switchJson);

var timerVar = {};
var onResize = function(){
    clearTimeout(timerVar);
    timerVar = setTimeout(renderChart, 1000);     
};

$( window ).resize(function() {
  console.log("window resized");
  onResize();
});