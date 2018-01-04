
var nodeOpacity = .8;
var strokeOpacity = .8;
var dimNodeOpacity = .15;
var dimStrokeOpacity = .15;
var maxTxtLength = 30;
var panelWidth = 250;
var xScale = null;
var yScale = null;
var sizeScale = null;
var lineScale = null;
var colorScale = null;
var supplyScale = null;
var supplyScale2 = null;
var clustScale = d3.scale.category20();
var apScale = d3.scale.ordinal().range(["#98a7f4", "#30c514", "#d31911", "#9321ff", "#6f6d3d", "#cb0783", "#e99b09", "#33bcc2", "#e894a0", "#315fe7", "#70bd6c", "#e787f5", "#5e6b80", "#aab31e", "#a25718", "#be3b4c", "#8c5697", "#b221c5", "#a4ae9f", "#19785e", "#cda562", "#915d55", "#fe8c65", "#1d7b0b", "#2d69c4", "#55b5e7", "#b9a4c3", "#fb83c5", "#4e50ff", "#a64d6c", "#d197dc", "#9f44ae", "#26c09e", "#607210", "#71be31", "#a5b17a", "#cca294", "#c9a836", "#4f6aa2", "#2dc45e", "#237a3c", "#ba432a", "#a3b353", "#8948d0", "#6f6a5f", "#7fb3c3", "#7f6914", "#237580", "#865f76", "#c115a4", "#ae408d", "#77b89e", "#7659b9", "#d01b37", "#e59b48", "#ca2062", "#e7987c", "#8f39e8", "#8e6133", "#a75240", "#4e7354", "#357096", "#b8a7ab", "#d59ab8", "#8daddb", "#24c285", "#1fbbda", "#fa913b", "#b34a07", "#63afff", "#50716a", "#b9aa87", "#75ba86", "#70648c", "#806649", "#6462ad", "#fd7ddd", "#f88d89", "#f988ad", "#bd3377", "#4a61d0", "#4e7530", "#8cb943", "#ae0edc", "#b8a1dc", "#91b91c", "#42c341", "#fd77f5", "#e690c4", "#d093f4", "#c3390c", "#69bf51", "#a35356", "#d2a17b", "#9f4f82", "#b7ad61", "#9eacc3", "#8fb76d", "#e29c63", "#b69ef4", "#ba3c62", "#ce1d4d", "#d6a401", "#6e56d0", "#734ce7", "#916116", "#763eff", "#46770e"]);
var lucrativeScale = null;
var toggleClick = true;
var inTransition = false;
var nodesSelected = false;
var salaryColorStart = "#FF3700";
var salaryColorMiddle = "#FFFF0A";
var salaryColorEnd = "#0FA331";
var width;
var height;
var yMargin;
var salaryMin = null;
var salaryMax = null;
var svg;
var mode = 1;
var changeMode;
var tgtNode;
var srcNode;
var skills_cnt_data;
var title_cnt_data;


var transitionDone = function()
{
    inTransition = false;
}

var transitionStart = function()
{
    inTransition = true;
}

function truncate_text(txt)
{
    if(txt.length > maxTxtLength)
    {
        return txt.substring(0, maxTxtLength) + '...';
    }
    else return txt;
}

function computeLucrativeness(salary, supply)
{
    if(supply > 0)
        return Math.pow(salary, 2)*1.0/Math.log(supply + 1);
    else if(salary >= 100000)
        return Math.pow(salary, 2)*1.0/Math.log(0.5 + 1);
    else
        return 0;
}

function render()
{	

    var sp1;
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('#container')[0];

    width = w.innerWidth || e.clientWidth || g.clientWidth;
    height = w.innerHeight|| e.clientHeight|| g.clientHeight;

    var xMargin = width * 0.15;
    if(xMargin < panelWidth + 80) xMargin = panelWidth + 80;
    xMargin = 10;

    yMargin = height * 0.02;
    if(yMargin < 20) yMarhin = 20;

    var sizeMin = height * 0.005;
    var sizeMax = height * 0.025;

    var svgWidth = width - xMargin /* *2 */;
    var svgHeight =  height - yMargin * 2;	

    d3.select("svg").remove();

    var zoom = d3.behavior
                .zoom()
                .translate([0, 0])
                .scale(1)
                .scaleExtent([0, 10])
                .on("zoom", zoomed);

    /*

    var drag = d3.behavior.drag()
        .origin(function(d) { return d; })
        .on("dragstart", dragstarted)
        .on("drag", dragged)
        .on("dragend", dragended);
    */

    svg = d3.select("body")
        .append("svg")
        .attr("id", "bgrnd")
        .attr("width", svgWidth)
        .attr("height", svgHeight)
        .on("click", stopped, true);


    var rect = svg.append("rect")
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("fill", "none")
        .style("pointer-events", "all")
        .on("click", reset);

    zoom(svg);

    var container = svg.append("g");

    function selectNodes(n, selected)
    {
        if(!nodesSelected || !selected)
            unselectNodes(true);

        var grp = d3.select(n);

        var relatedTitles = [];

        if(!grp.classed("selected")  && selected)
            grp.classed("selected", true);

        var id = parseInt(grp.attr("id").replace("g", ""));

        var crl = grp.select("circle")
            .style("fill-opacity", nodeOpacity)
            .style("stroke-opacity", strokeOpacity);

        if(!crl.classed("active") && selected)
        {
            crl.classed("active", true);
            grp.select("text").select("tspan").classed("active", true);
        }

        grp.select("tspan")
            .style("opacity", strokeOpacity)
            .text(function (d) { return truncate_text(d.value); });

        if(mode == 1)
        {

        var selectedLinks = container
            .select(".link")
            .selectAll("line")
            .filter(function(d) { return d.source == id || d.target == id });

        selectedLinks.attr("x1", function(d) { return xScale(d.mx1); })
                .attr("y1", function(d) { return yScale(d.my1); })
                .attr("x2", function(d) { return xScale(d.mx2); })
                .attr("y2", function(d) { return yScale(d.my2); })
                //.style("stroke-dasharray", function(d) { return "" + lineScale(d.value) + "," + lineScale(d.value); })
                .style("opacity", strokeOpacity * .5)
                .each(function (d) 
                        {
                            var src = d3.select("#g" + d.source);

                            if(selected)
                            {
                                if(!src.classed("selected"))
                                    src.classed("selected", true);
                                else
                                    src.classed("multi", true);

                                if(src.datum().value != grp.datum().value)
                                    relatedTitles.push(src.datum().value);
                            }

                            var tgt = d3.select("#g" + d.target);

                            if(selected)
                            {
                                if(!tgt.classed("selected"))
                                    tgt.classed("selected", true);
                                else
                                    tgt.classed("multi", true);

                                if(tgt.datum().value != grp.datum().value)
                                    relatedTitles.push(tgt.datum().value);
                            }

                            if((tgt.classed("selected") || src.classed("selected")) && selected)
                                d3.select(this).classed("selected", true);

                            src.select("circle")
                                    .style("fill-opacity", nodeOpacity)
                                    .style("stroke-opacity", strokeOpacity);

                            src.select("tspan")
                                    .style("opacity", strokeOpacity)
                                    .text(function (o) { return truncate_text(o.value); });

                            tgt.select("circle")
                                    .style("fill-opacity", nodeOpacity)
                                    .style("stroke-opacity", strokeOpacity);

                            tgt.select("tspan")
                                    .style("opacity", strokeOpacity)
                                    .text(function (o) { return truncate_text(o.value); });

                        });
        }

        var salary = "$" + grp.datum().salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        var nodeName = grp.datum().value;
        var skills = grp.datum().skills;

        if(selected)
        {
            if(relatedTitles.length > 20)
            {
                relatedTitles = relatedTitles.slice(0,20);
                relatedTitles.push("and more...");
            }

            if(skills.length > 20)
            {
                skills = skills.slice(0,20);

            }

            var txt = nodeName + "<br/><br/><i>Mean salary:</i> " + salary + "<br/><br/><i>Top skills:</i><br/>" + skills.join(", ") /*skills.join("<br/>&nbsp;&nbsp;-")*/;
            if(mode == 1)
                txt += "<br/><br/><i>Related titles:</i><br/>" + relatedTitles.join(", ") /*relatedTitles.join("<br/>&nbsp;&nbsp;-")*/;

            if(!d3.select("#skill_graph").empty())
            {
                d3.select("#right")
                    .selectAll("svg").remove();
            }
            txt += "<br/><br/>";

            d3.select("#right").select("span").html(txt);

            if(mode == 1)
            {

                if(!d3.select("#skill_graph").empty())
                {
                    d3.select("#right")
                        .selectAll("svg").remove();
                }

                if(nodeName in title_cnt_data)
                {

                    var parseDate = d3.time.format("%Y").parse;

                    var graph_width = 190;

                    if(!d3.select("#skill_graph").empty())
                    {
                        d3.select("#right")
                            .selectAll("svg").remove();
                    }

                    var skill_graph = d3.select("#right").append("svg")
                            .attr("width", graph_width)
                            .attr("height", 190)
                            .append("g")
                            .attr("id", "skill_graph")
                            .attr("transform", "translate(" + 15 + "," + 25 + ")");

                    var x = d3.time.scale()
                        .range([0, 200]);

                    var y = d3.scale.linear()
                        .range([150, 0]);


                    var xAxis = d3.svg.axis()
                        .scale(x)
                        .orient("bottom");

                    var yAxis = d3.svg.axis()
                        .scale(y)
                        .ticks(0)
                        .orient("left");

                    var line = d3.svg.line()
                        .x(function(d) { return x(parseDate(d.year)); })
                        .y(function(d) { return y(d.pct); });

                    var dt = title_cnt_data[nodeName];


                    var ndt = [];
                    for (var k in dt) {
                        ndt.push({"year" : k, "pct" : dt[k]});
                    }

                    console.log(ndt);

                    x.domain(d3.extent(ndt, function(d) { return parseDate(d.year); }));
                    y.domain(d3.extent(ndt, function(d) { return d.pct; }));

                    skill_graph.append("g")
                      .attr("class", "x axis")
                      .attr("transform", "translate(0," + 150 + ")")
                      .call(xAxis);

                    skill_graph.append("g")
                      .attr("class", "y axis")
                      .call(yAxis)
                      .append("text")
                      .attr("transform", "rotate(-90)")
                      .attr("y", 6)
                      .attr("dy", ".71em")
                      .style("text-anchor", "end")
                      .text("% of all skills");

                    skill_graph.append("path")
                      .datum(ndt)
                      .attr("class", "line")
                      .attr("d", line);

                    skill_graph.append("text")
                            .attr("x", (graph_width / 2))             
                            .attr("y", -10)
                            .attr("text-anchor", "middle")  
                            .style("font-size", "11px")  
                            .text("Trend: \"" + nodeName + "\"");

                }	
            }
        }
    }

    var mouseOver = function ()
    {			
        if(inTransition) return false;
        selectNodes(this, false);
    }

    function unselectNodes(dim)
    {	  					

        var unselNodes = container.selectAll("g.node")
            .selectAll("g")
            .filter(function() { return !(d3.select(this).classed("selected")) || !nodesSelected; })
            .attr("class", null);

        unselNodes.selectAll("circle")
            .style("fill-opacity", dim ? dimNodeOpacity : nodeOpacity)
            .style("stroke-opacity", dim ? dimStrokeOpacity : strokeOpacity)
            .attr("class", null);

        unselNodes.selectAll("tspan")
        	.style("font-weight", null)
        	.attr("class", null)
            .text("");

        var links = container.select(".link")
            .selectAll("line")
            .filter(function() { return !d3.select(this).classed("selected") || !nodesSelected; });

        links.attr("x1", null)
            .attr("y1", null)
            .attr("x2", null)
            .attr("y2", null)
            .attr("class", null)
            .style("opacity", null)
            .style("stroke-width", null);
    }

    function getBounds()
    {
        var selNodes = container.selectAll("g")
            .filter(function () { return d3.select(this).classed("selected");});

        var bBoxX1 = width;
        var bBoxY1 = height;
        var bBoxX2 = 0; 
        var bBoxY2 = 0;

        selNodes.each(function () 
                      {
                        var nNode = d3.select(this).node().getBBox();

                        bBoxX1 = d3.min([nNode.x, bBoxX1]);
                        bBoxX2 = d3.max([nNode.x + nNode.width, bBoxX2]);
                        bBoxY1 = d3.min([nNode.y, bBoxY1]);
                        bBoxY2 = d3.max([nNode.y + nNode.height, bBoxY2]);
                     });

        return [bBoxX1, bBoxY1, bBoxX2, bBoxY2];
    }

    var mouseOut = function ()
    {
        if(inTransition) return false;

        unselectNodes(nodesSelected);		
    }

    function unselectDeactivated(n)
    {
        var grp = d3.select(n);

        var id = parseInt(grp.attr("id").replace("g", ""));		

        grp.select("circle")
            .attr("class", null);
            
        grp.select("text").select("tspan").attr("class", null);

        var selectedLinks = container.select(".link")
                    .selectAll("line")
                    .filter(function(d) { return (d.source == id || d.target == id) && d3.select(this).classed("selected"); })
                    .each(function (d) 
                    {
                        var src = d3.select("#g" + d.source);

                        if(id != d.source && !src.select("circle").classed("active"))
                        {										
                            d3.select(this).attr("x1", null)
                                .attr("y1", null)
                                .attr("x2", null)
                                .attr("y2", null)
                                .attr("class", null)
                                .style("opacity", null)
                                .style("stroke-width", null);										
                        }

                        var tgt = d3.select("#g" + d.target);

                        if(id != d.target && !tgt.select("circle").classed("active"))
                        {									
                            d3.select(this).attr("x1", null)
                                .attr("y1", null)
                                .attr("x2", null)
                                .attr("y2", null)
                                .attr("class", null)
                                .style("opacity", null)
                                .style("stroke-width", null);										
                        }

                    });

        selectedLinks = container.select(".link")
                    .selectAll("line")
                    .filter(function(d) { return d3.select(this).classed("selected"); });

        if(selectedLinks.empty())
            reset();
        else
        {
            var orphanNodes = container.selectAll("g.node")
                    .selectAll("g")
                    .filter(function() { return d3.select(this).classed("selected"); })
                    .each(function(d) 
                    {
                        var curNode = d3.select(this);
                        var myId = parseInt(d3.select(this).attr("id").replace("g", ""));	
                        var linksExists = container.select(".link")
                                        .selectAll("line")
                                        .filter(function(d) { return (d.source == myId || d.target == myId) && d3.select(this).classed("selected"); });

                        if(linksExists.empty())
                        {
                            curNode.attr("class", null)
                                .selectAll("circle")
                                .style("fill-opacity", dimNodeOpacity)
                                .style("stroke-opacity", dimStrokeOpacity)
                                .attr("class", null);

                            curNode.select("tspan")
                                .text("");
                        }


                    });

            unselectNodes(true);
        }


        if(!d3.select("#skill_graph").empty())
        {
            d3.select("#right")
                .selectAll("svg").remove();
        }

        d3.select("#right").select("text").text("");

    }


    function reset() 
    {
        nodesSelected = false;

        inTransition = true;

        container.transition()
            .duration(500)
            .call(zoom.translate([0,0]).scale(1).event)
            .each("start", transitionStart)
            .each("end", transitionDone); 

        unselectNodes(false);

        d3.select("#right")
            .select("span")
            .html("");

        if(!d3.select("#skill_graph").empty())
        {
            d3.select("#right")
                .selectAll("svg").remove();
        }

        /*var inputs = document.getElementsByTagName("input");

        for(var k = 0; k < inputs.length; k++)
        {
            if(inputs[k].type.toLowerCase() == 'text') 
            {
                inputs[k].value = "";
            }
            else if(inputs[k].type.toLowerCase() == 'radio')
            {
                if(inputs[k].value == "colorClusters" || inputs[k].value == "modeExplore")
                    inputs[k].checked = true;
                else inputs[k].checked = false;
            }
        }*/
    }

    function isNonZero(element) {
        return element >= 0;
    }

    d3.json("data/skills_counts.json", function(error, skill_cnt)
    {
        skills_cnt_data = skill_cnt;
    });

    d3.json("data/title_counts.json", function(error, title_cnt)
    {
        title_cnt_data = title_cnt;
    });

    d3.json("data/data.json", function(error, graph) 
    {

        sp1 = new ShortestPathCalculator(graph.nodes, graph.links);

        xScale = d3.scale.linear()
            .domain(d3.extent(graph.nodes, function(d) { return d.mx; }))
            .range([xMargin, width - 80]);

        yScale = d3.scale.linear()
            .domain(d3.extent(graph.nodes, function(d) { return d.my; }))
            .range([height - yMargin, yMargin]);

        sizeScale = d3.scale.linear()
            .domain(d3.extent(graph.nodes, function(d) { return d.r; }))
            .range([sizeMin, sizeMax]);

        lineScale = d3.scale.linear()
            .domain(d3.extent(graph.links, function(d) { return d.value; }))
            .range([1, 5]);

        salaryMin = d3.min(graph.nodes, function(d) { return d.salary; });
        salaryMax = d3.max(graph.nodes, function(d) { return d.salary; });

        var supplyMin = d3.min(graph.nodes, function(d) { return d.supply; });
        var supplyMax = d3.max(graph.nodes, function(d) { return d.supply; });

        supplyScale = d3.scale.log()
                .domain([supplyMin + 1, d3.median(graph.nodes, function(d) { return d.supply + 1; }), supplyMax + 1])
                .range([salaryColorStart, salaryColorMiddle, salaryColorEnd]);	

        supplyScale2 = d3.scale.linear()
                .domain([supplyMin + 1, d3.median(graph.nodes, function(d) { return d.supply + 1; }), supplyMax + 1])
                .range([0,50,100]);	

        lucrativeScale = d3.scale.linear()
                .domain([d3.min(graph.nodes, function(d) { return computeLucrativeness(d.salary, supplyScale2(d.supply)); }), d3.median(graph.nodes, function(d) { return computeLucrativeness(d.salary, supplyScale2(d.supply)); }), d3.max(graph.nodes, function(d) { return computeLucrativeness(d.salary, supplyScale2(d.supply)); })])
                .range([salaryColorStart, salaryColorMiddle, salaryColorEnd]);

        colorScale = d3.scale.linear()
                .domain([salaryMin, d3.median(graph.nodes, function(d) { return d.salary; }), salaryMax])
                .range([salaryColorStart, salaryColorMiddle, salaryColorEnd]);						


        //console.log([supplyMin, d3.mean(graph.nodes, function(d) { return d.supply; }), supplyMax]);
        var link = container.append("g")
                .attr("class", "link")
                .selectAll(".link")
                .data(graph.links)
                .enter()
                .append("line");

        var node = container.append("g")
                .attr("class", "node")
                .selectAll(".node")
                .data(graph.nodes)
                .enter()
                .append("g")
                .attr("id", function(d) { return "g" + d.index; })
                .on("mouseover", mouseOver)
                .on("mouseout", mouseOut)
                .on("click", nodeClick);

        var circle = node.append("circle")
                .attr("r", function(d) { return sizeScale(d.r); })
                .style("fill", function(d) { return clustScale(d.colour); })
                //.style("fill", function(d) { return colorScale(d.salary); })
                .style("fill-opacity", 0)
                .style("stroke-opacity", 0)
                .attr("cx", width/2)
                .attr("cy", height/2)
                /*.attr("cx", function(d) { return xScale(d.mx); })
                .attr("cy", function(d) { return yScale(d.my); })*/;


        circle.transition()
                .duration(500)
                .ease('cubic-in-out')
                .style("fill-opacity", nodeOpacity)
                .style("stroke-opacity", strokeOpacity)
                .attr("cx", function(d) { return xScale(d.mx); })
                .attr("cy", function(d) { return yScale(d.my); })
                .each("start", transitionStart)
                .each("end", transitionDone); 

        node.append("text")
                .attr("y", function(d) { return yScale(d.my) + sizeScale(d.r)/3; })
                .attr("x", function(d) { return xScale(d.mx); })
                .attr("text-anchor", "middle")
                .append("tspan")
                .attr("class", "tspan")
                .style("font-size", function(d) { return parseInt(sizeScale(d.r) * .8) + "px";});

    });


    var nodeClick = function ()
    {
        if(mode == 1)
        {
            var deactivated = false;

            if(d3.select(this).classed("selected"))
            {
                var crl = d3.select(this).select("circle");
                var tspan = d3.select(this).select("tspan");
                if(!crl.classed("active"))
                {
                    crl.classed("active", true);
                    tspan.classed("active", true);
                    nodesSelected = true;
                }
                else
                {
                    unselectDeactivated(this);
                    deactivated = true;
                }

            }
            else
            {
                d3.select(this).classed("selected", true);
                nodesSelected = true;
            }

            if(nodesSelected && !deactivated)
                selectNodes(this, true);

            var bBox = getBounds();


            if(bBox.length == 4)
            {					

                if(bBox[2] == 0 && bBox[3] == 0)
                {
                    reset();
                    return false;
                }

                var dx = bBox[2] - bBox[0],
                    dy = bBox[3] - bBox[1],
                    x = (bBox[0] + bBox[2]) / 2, 
                    y = (bBox[1] + bBox[3]) / 2;

                var scale = .9 / Math.max(dx / svgWidth, dy / svgHeight);

                var translate = [width / 2 - scale * x, height / 2 - scale * y];

                inTransition = true;

                container.transition()
                        .duration(500)
                        .call(zoom.translate(translate).scale(scale).event)
                        .each("start", transitionStart)
                        .each("end", transitionDone); 
            }
        }
        else 
        {

            var curNode = d3.select(this);

            if(srcNode == null && tgtNode == null)
            {
                srcNode = curNode.datum().index;
                curNode.classed("selected", true);
                nodesSelected = true;
            }
            else if(tgtNode == null)
            {
                if(srcNode != curNode.datum().index)
                {

                    tgtNode = curNode.datum().index;
                    curNode.classed("selected", true);
                    var route = sp1.findRoute(srcNode,tgtNode);
                    var path = ["<i>Path:</i><br/>"];

                    for(var k = 0; k < route.path.length; k++)
                    {

                        var routeLinks = container.select(".link")
                            .selectAll("line").filter(function(d) { return ((d.source == route.path[k].source && d.target == route.path[k].target) || (d.source == route.path[k].target && d.target == route.path[k].source));});

                        routeLinks.classed("selected", true)
                            .attr("x1", function(d) { return xScale(d.mx1); })
                            .attr("y1", function(d) { return yScale(d.my1); })
                            .attr("x2", function(d) { return xScale(d.mx2); })
                            .attr("y2", function(d) { return yScale(d.my2); })
                            //.style("stroke-dasharray", function(d) { return "" + lineScale(d.value) + "," + lineScale(d.value); })
                            .style("opacity", strokeOpacity * .5);

                        var routeNodes = container.select("g.node")
                            .selectAll("g")
                            .filter(function (d) { return d.index == route.path[k].source || d.index == route.path[k].target; })
                            .classed("selected", true);

                        routeNodes.select("circle")
                            .style("fill-opacity", nodeOpacity)
                            .style("stroke-opacity", strokeOpacity);

                        routeNodes.select("tspan")
                            .style("opacity", strokeOpacity)
                            .text(function (d) { path.push(d.value); return truncate_text(d.value); });
                    }

                    path = path.reverse().filter(function (e, i, arr) {return arr.indexOf(e, i+1) === -1;}).reverse();

                    var skills1 = container.select("#g" + srcNode).datum().skills;
                    var salary1 = container.select("#g" + srcNode).datum().salary;
                    var skills2 = curNode.datum().skills;
                    var salary2 = curNode.datum().salary;
                    var inters = intersect(skills1, skills2);
                    var diff = skills2.diff(skills1);
                    var salaryDiff = salary2 - salary1;
                    var propCommon = Math.round(100 * inters.length * 1.0/skills1.length);
                    var propGap = Math.round(100 * diff.length * 1.0/skills2.length);
                    var txt = path.join("<br/>-") + "<br/><br/><i>Common skills (" + propCommon.toString() + "%) :</i><br/><br/>" + inters.join(", ") + "<br/><br/><i>Skills gap (" + propGap.toString() + "%):</i><br/><br/>" + diff.join(", ");

                    if (salary1 > 0 && salary2 > 0)
                    {
                        txt += "<br/><br/><span><i>Salary difference:</i> $" + salaryDiff.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "&nbsp;</span>";
                        if(salaryDiff > 0)
                            txt += "<span class=\"upArrow\">&#x25B2;</span>";
                        else if(salaryDiff < 0)
                            txt += "<span class=\"downArrow\">&#x25BC;</span>";
                        else
                            txt += "None";
                    }

                    d3.select("#right").select("span").html(txt);


                }
                else
                {
                    srcNode = null;
                    tgtNode = null;
                    reset();
                }
            }
            else 
            {
                srcNode = null;
                tgtNode = null;
                reset();
            }			
        }

    }

    var arrayUnique = function(a) 
    {
        return a.reduce(function(p, c) 
        {
            if (p.indexOf(c) < 0) p.push(c);
            return p;
        }, []);
    };

    function zoomed() 
    {
        container.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
    }

    function stopped() 
    {
      if (d3.event.defaultPrevented) d3.event.stopPropagation();
    }


    changeMode = function(btn)
    {

        reset();

        if(btn.value == "modeExplore")
            mode = 1;
        else
            mode = 2;
    }

    /*	
    function dragstarted(d) 
    {
        d3.event.sourceEvent.stopPropagation();
        d3.select(this).classed("dragging", true);
    }

    function dragged(d) 
    {
        d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
    }

    function dragended(d) 
    {
        d3.select(this).classed("dragging", false);
    }
    */

    /*
    d3.select("#right")
        .attr("id", "right")
        .style("width", panelWidth + "px")
        .append("text")
        .text("");
        */
    /*				
    var rightPane = d3.select("body")
        .append("div")
        .attr("id", "right")
        .style("width", panelWidth + "px")
        .append("text")
        .text("");


    var leftPane = d3.select("body")
        .append("div")
        .attr("id", "left")
        .style("width", panelWidth + "px");
        */					



    var salaryGradient = svg.append("svg:defs")
        .append("svg:linearGradient")
        .attr("id", "salaryGradient")
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "0%")
        .attr("spreadMethod", "pad");

    salaryGradient.append("svg:stop")
        .attr("offset", "0%")
        .attr("stop-color", salaryColorStart)
        .attr("stop-opacity", 1);

    salaryGradient.append("svg:stop")
        .attr("offset", "50%")
        .attr("stop-color", salaryColorMiddle)
        .attr("stop-opacity", 1);

    salaryGradient.append("svg:stop")
        .attr("offset", "100%")
        .attr("stop-color", salaryColorEnd)
        .attr("stop-opacity", 1);

    var salaryLegend = svg.append("g")
            .attr("id", "legend")
            .style("opacity", 0);


    salaryLegend.append("rect")
            .attr("x", 300)
            .attr("y", 30)
            .attr("width", 150)
            .attr("height", 15)
            .attr("fill", "url(#salaryGradient)");

    salaryLegend.append("text")
            .attr("x", 300)
            .attr("y", 24)
            .attr("id", "legendText")
            .attr("class", "salary")
            .text("Clusters (centrality)");

    salaryLegend.append("text")
            .attr("x", 300)
            .attr("y", 60)
            .attr("id", "low")
            .attr("class", "salary")
            .text("low");

    salaryLegend.append("text")
            .attr("x", 355)
            .attr("y", 60)
            .attr("id", "median")
            .attr("class", "salary")
            .text("median");

    salaryLegend.append("text")
            .attr("x", 428)
            .attr("y", 60)
            .attr("id", "high")
            .attr("class", "salary")
            .text("high");


    var availableTitles = [];

    var availableSkills = [];

    $(document).ready(function() 
    {
        $.getJSON('data/titles.json', function(data) {
            $.each(data, function(key, value){
                availableTitles.push(value);
            });
        });

        $.getJSON('data/skills.json', function(data) {
            $.each(data, function(key, value){
                availableSkills.push(value);
            });
        });

        $( "#txt_search_titles" ).autocomplete({
        source: availableTitles,
        select:function(event, ui){
                processTitle(ui.item.value);
            }
            });

        $("#txt_search_titles").keypress(function(e) {
          if(e.keyCode == 13)
             {
                 e.preventDefault();
                 processTitle(this.value);
                 $(this).autocomplete("close");
             }
        });

        $('#btn_search_titles').click(function()
        {
            jobtitle = document.getElementById("txt_search_titles").value;
            processTitle(jobtitle);

        });

        $( "#txt_search_skills" ).autocomplete({
        source: availableSkills,
        select:function(event, ui){
                processSkill(ui.item.value);
            }
            });

        $("#txt_search_skills").keypress(function(e) {
          if(e.keyCode == 13)
             {
                 e.preventDefault();
                 processSkill(this.value);
                 $(this).autocomplete("close");
             }
        });

        $('#btn_search_skills').click(function()
        {
            skill = document.getElementById("txt_search_skills").value;
            processSkill(skill);

        });

      });


    var processTitle = function(jobtitle)
    {
        if(jobtitle == "")
        {
            alert("Title cannot be empty.\nPlease select from suggested titles.");
            return false;
        }


        if(availableTitles.indexOf(jobtitle) < 0)
        {
            alert("Sorry, no such title.\nPlease select from suggested titles.");
            return false;
        }

        var selNode = d3.selectAll("g.node")
            .selectAll("g")
            .filter(function(d) { return d.value == jobtitle; });

        //reset();
        selectNodes(selNode.node(), true);
        nodesSelected = true;

        if(mode == 2)
        {

            var curNode = selNode;

            if(srcNode == null && tgtNode == null)
            {
                srcNode = curNode.datum().index;
                curNode.classed("selected", true);
                nodesSelected = true;
            }
            else if(tgtNode == null)
            {
                if(srcNode != curNode.datum().index)
                {

                    tgtNode = curNode.datum().index;
                    curNode.classed("selected", true);
                    var route = sp1.findRoute(srcNode,tgtNode);
                    var path = ["<i>Path:</i><br/>"];

                    for(var k = 0; k < route.path.length; k++)
                    {

                        var routeLinks = container.select(".link")
                            .selectAll("line").filter(function(d) { return ((d.source == route.path[k].source && d.target == route.path[k].target) || (d.source == route.path[k].target && d.target == route.path[k].source));});

                        routeLinks.classed("selected", true)
                            .attr("x1", function(d) { return xScale(d.mx1); })
                            .attr("y1", function(d) { return yScale(d.my1); })
                            .attr("x2", function(d) { return xScale(d.mx2); })
                            .attr("y2", function(d) { return yScale(d.my2); })
                            //.style("stroke-dasharray", function(d) { return "" + lineScale(d.value) + "," + lineScale(d.value); })
                            .style("opacity", strokeOpacity * .5);

                        var routeNodes = container.select("g.node")
                            .selectAll("g")
                            .filter(function (d) { return d.index == route.path[k].source || d.index == route.path[k].target; })
                            .classed("selected", true);

                        routeNodes.select("circle")
                            .style("fill-opacity", nodeOpacity)
                            .style("stroke-opacity", strokeOpacity);

                        routeNodes.select("tspan")
                            .style("opacity", strokeOpacity)
                            .text(function (d) { path.push(d.value); return truncate_text(d.value); });
                    }

                    path = path.reverse().filter(function (e, i, arr) {return arr.indexOf(e, i+1) === -1;}).reverse();

                    var skills1 = container.select("#g" + srcNode).datum().skills;
                    var salary1 = container.select("#g" + srcNode).datum().salary;
                    var skills2 = curNode.datum().skills;
                    var salary2 = curNode.datum().salary;
                    var inters = intersect(skills1, skills2);
                    var diff = skills2.diff(skills1);
                    var salaryDiff = salary2 - salary1;
                    var propCommon = Math.round(100.0 * inters.length/skills1.length);
                    var propGap = Math.round(100.0 * diff.length/skills2.length);
                    var txt = path.join("<br/>-") + "<br/><br/><i>Common skills (" + propCommon.toString() + "%) :</i><br/><br/>" + inters.join(", ") + "<br/><br/><i>Skills gap (" + propGap.toString() + "%):</i><br/><br/>" + diff.join(", ");

                    if (salary1 > 0 && salary2 > 0)
                    {
                        txt += "<br/><br/><span><i>Salary difference:</i> $" + salaryDiff.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "&nbsp;</span>";
                        if(salaryDiff > 0)
                            txt += "<span class=\"upArrow\">&#x25B2;</span>";
                        else if(salaryDiff < 0)
                            txt += "<span class=\"downArrow\">&#x25BC;</span>";
                        else
                            txt += "None";
                    }


                    d3.select("#right").select("span").html(txt);

                }
                else
                {
                    srcNode = null;
                    tgtNode = null;
                    reset();
                }
            }
            else 
            {
                srcNode = null;
                tgtNode = null;
                reset();
            }			
        }

        var bBox = getBounds();

        if((bBox.length == 4 && mode == 1) || (srcNode != null && tgtNode != null))
        {					

            if(bBox[2] == 0 && bBox[3] == 0)
            {
                reset();
                return false;
            }

            var dx = bBox[2] - bBox[0],
                dy = bBox[3] - bBox[1],
                x = (bBox[0] + bBox[2]) / 2, 
                y = (bBox[1] + bBox[3]) / 2;

            var scale = .9 / Math.max(dx / svgWidth, dy / svgHeight);

            var translate = [width / 2 - scale * x, height / 2 - scale * y];

            inTransition = true;

            container.transition()
                    .duration(500)
                    .call(zoom.translate(translate).scale(scale).event)
                    .each("start", transitionStart)
                    .each("end", transitionDone); 
        }

        document.getElementById("txt_search_titles").value = jobtitle;

        if(mode == 1)
        {

            if(!d3.select("#skill_graph").empty())
            {
                d3.select("#right")
                    .selectAll("svg").remove();
            }

            if(jobtitle in title_cnt_data)
            {

                var parseDate = d3.time.format("%Y").parse;

                var graph_width = 190;

                if(!d3.select("#skill_graph").empty())
                {
                    d3.select("#right")
                        .selectAll("svg").remove();
                }

                var skill_graph = d3.select("#right").append("svg")
                        .attr("width", graph_width)
                        .attr("height", 190)
                        .append("g")
                        .attr("id", "skill_graph")
                        .attr("transform", "translate(" + 15 + "," + 25 + ")");

                var x = d3.time.scale()
                    .range([0, 200]);

                var y = d3.scale.linear()
                    .range([150, 0]);


                var xAxis = d3.svg.axis()
                    .scale(x)
                    .orient("bottom");

                var yAxis = d3.svg.axis()
                    .scale(y)
                    .ticks(0)
                    .orient("left");

                var line = d3.svg.line()
                    .x(function(d) { return x(parseDate(d.year)); })
                    .y(function(d) { return y(d.pct); });

                var dt = title_cnt_data[jobtitle];


                var ndt = [];
                for (var k in dt) {
                    ndt.push({"year" : k, "pct" : dt[k]});
                }

                console.log(ndt);

                x.domain(d3.extent(ndt, function(d) { return parseDate(d.year); }));
                y.domain(d3.extent(ndt, function(d) { return d.pct; }));

                skill_graph.append("g")
                  .attr("class", "x axis")
                  .attr("transform", "translate(0," + 150 + ")")
                  .call(xAxis);

                skill_graph.append("g")
                  .attr("class", "y axis")
                  .call(yAxis)
                  .append("text")
                  .attr("transform", "rotate(-90)")
                  .attr("y", 6)
                  .attr("dy", ".71em")
                  .style("text-anchor", "end")
                  .text("% of all skills");

                skill_graph.append("path")
                  .datum(ndt)
                  .attr("class", "line")
                  .attr("d", line);

                skill_graph.append("text")
                        .attr("x", (graph_width / 2))             
                        .attr("y", -10)
                        .attr("text-anchor", "middle")  
                        .style("font-size", "11px")  
                        .text("Trend: \"" + jobtitle + "\"");

            }	
        }

    };

    Object.size = function(obj) 
    {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };

    Array.prototype.diff = function(a) 
    {
        return this.filter(function(i) {return a.indexOf(i) < 0;});
    };

    function intersect(a, b) 
    {
        var t;
        if (b.length > a.length) t = b, b = a, a = t; 
        return a.filter(function (e) 
        {
            if (b.indexOf(e) !== -1) return true;
        });
    }


    var processSkill = function(skill)
    {
        if(skill == "")
        {
            alert("Skill cannot be empty.\nPlease select from suggested skills.");
            return false;
        }


        if(availableSkills.indexOf(skill) < 0)
        {
            alert("Sorry, no such skill.\nPlease select from suggested skills.");
            return false;
        }


        reset();					

        var selNodes = d3.selectAll("g.node")
            .selectAll("g")
            .filter(function(d) { return d.skills.indexOf(skill) != -1; })
            .classed("selected", true);

        nodesSelected = true;

        selNodes.select("circle")
            .classed("active", true);

        titles = [];

        selNodes.select("tspan")
            .style("opacity", strokeOpacity)
            .text(function (o) { titles.push(o.value); return truncate_text(o.value); });

        unselectNodes(true);

        if(titles.length > 20)
        {
            titles = titles.slice(0, 20);
            titles.push("<i>&nbsp;more titles found...</i>");
        }

        if(!d3.select("#skill_graph").empty())
        {
            d3.select("#right")
                .selectAll("svg").remove();
        }

        if(skill in skills_cnt_data)
        {
            var parseDate = d3.time.format("%Y").parse;

            var graph_width = 190;

            if(!d3.select("#skill_graph").empty())
            {
                d3.select("#right")
                    .selectAll("svg").remove();
            }

            var skill_graph = d3.select("#right").append("svg")
                    .attr("width", graph_width)
                    .attr("height", 190)
                    .append("g")
                    .attr("id", "skill_graph")
                    .attr("transform", "translate(" + 15 + "," + 25 + ")");

            var x = d3.time.scale()
                .range([0, 200]);

            var y = d3.scale.linear()
                .range([150, 0]);


            var xAxis = d3.svg.axis()
                .scale(x)
                .orient("bottom");

            var yAxis = d3.svg.axis()
                .scale(y)
                .ticks(0)
                .orient("left");

            var line = d3.svg.line()
                .x(function(d) { return x(parseDate(d.year)); })
                .y(function(d) { return y(d.pct); });

            var dt = skills_cnt_data[skill];

            var ndt = [];
            for (var k in dt) {
                ndt.push({"year" : k, "pct" : dt[k]});
            }

            x.domain(d3.extent(ndt, function(d) { return parseDate(d.year); }));
            y.domain(d3.extent(ndt, function(d) { return d.pct; }));

            skill_graph.append("g")
              .attr("class", "x axis")
              .attr("transform", "translate(0," + 150 + ")")
              .call(xAxis);

            skill_graph.append("g")
              .attr("class", "y axis")
              .call(yAxis)
              .append("text")
              .attr("transform", "rotate(-90)")
              .attr("y", 6)
              .attr("dy", ".71em")
              .style("text-anchor", "end")
              .text("% of all skills");

            skill_graph.append("path")
              .datum(ndt)
              .attr("class", "line")
              .attr("d", line);

            skill_graph.append("text")
                    .attr("x", (graph_width / 2))             
                    .attr("y", -10)
                    .attr("text-anchor", "middle")  
                    .style("font-size", "11px")  
                    .text("Trend: \"" + skill + "\"");

        }	

        d3.select("#right").select("span").html("Found titles: <br/><br/>&nbsp;&nbsp;-" + titles.join("<br/>&nbsp;&nbsp;-") + "<br/><br/>");


    /*
        var selNode = container.selectAll("g.node")
            .selectAll("g")
            .filter(function() { return d.value == skill; });

        jobtitle_orig = jobtitle;

        var title = translateSpecChar(jobtitle);

        drawChart(title); */

        document.getElementById("txt_search_skills").value = skill;

    };
}

render();

window.addEventListener('resize', function(event){ render(); });

function changeColor(btn)
{

    var circles = d3.selectAll("circle");

    if(btn.value == "colorClusters")
    {
        circles.transition()
            .duration(500)
            .style("fill", function(d) { return clustScale(d.colour); })
            .each("start", transitionStart)
            .each("end", transitionDone); 

        d3.select("#legendText").text("Clusters (modularity)");
        d3.select("#legend").transition().duration(500).style("opacity", 0);
    }
    else if(btn.value == "colorSalary")
    {
        circles.transition()
            .duration(500)
            .style("fill", function(d) { return d.salary > 0 ? colorScale(d.salary) : "#eee"; })
            .each("start", transitionStart)
            .each("end", transitionDone); 

        d3.select("#legendText").text("Salary");
        d3.select("#legend").transition().duration(500).style("opacity", 1);
    }
    else if(btn.value == "colorSupply")
    {
        circles.transition()
            .duration(500)
            .style("fill", function(d) { d.value == 'OBIEE Developer' ? console.log(d.supply) : null; return d.supply > 0.0 ? supplyScale(d.supply + 1) : "#eee"; })
            .each("start", transitionStart)
            .each("end", transitionDone); 

        d3.select("#legendText").text("Supply/demand");
        d3.select("#legend").transition().duration(500).style("opacity", 1);
    }
    else if(btn.value == "colorAP")
    {
        circles.transition()
            .duration(500)
            .style("fill", function(d) { return apScale(d.cluster); })
            .each("start", transitionStart)
            .each("end", transitionDone); 

        d3.select("#legendText").text("Clusters (affinity)");
        d3.select("#legend").transition().duration(500).style("opacity", 0);
    }
    else if(btn.value == "colorLucrativeness")
    {
        circles.transition()
            .duration(500)
            .style("fill", function(d) { return ((d.supply > 0 && d.salary > 0) || d.salary > 100000) ? lucrativeScale(computeLucrativeness(d.salary, supplyScale2(d.supply))) : "#eee"; })
            .each("start", transitionStart)
            .each("end", transitionDone); 

        d3.select("#legendText").text("Salary vs. supply/demand");
        d3.select("#legend").transition().duration(500).style("opacity", 1);
    }
}