/**
 * Created by Si1 on 08/03/17.
 */

var xScale = d3.scaleLog().domain([0.0007,1]).range([0, 1100]);
var yScale = d3.scaleLog().domain([0.00001,1]).range([650, 50])// was 700
var sizeScale = function(d) { return Math.sqrt(d) * 0.5; };
var splitScale = d3.scaleSqrt().domain([0, 1]).range([2,15]);
var nodeSize = 4, nodeGap = 0.5;
var its = 4;
var xCol = function(i) {
    return i == -1 ? 175 : i * 125 + 350;
    }
var categoryColor = function(d) {
    var i = skill_cats.indexOf(d.superskill_name)
    return i == -1 ? 'lightgrey' : d3.schemeCategory10[i]

}

var skill_cats = ['data',
// 'industry-specific',
'software development',
// 'marketing',
'i.t. administration', 'project management',
'systems analysis/design', 'hardware/embedded software'
// 'human resources'
// , 'supply chain management', 'sales'
]

// from skills_hierarchy_skill_list_txt.csv
var skill_cats = ['Data', 'Industry-specific', 'Software Development',
    'Communication', 'I.T. Administration', 'Management',
    'Systems Analysis/Design', 'Hardware/Embedded Software', 'Design']

var setupAxes = function() {

    var arrow2_d = 'M30 0 L50 10 L30 20 L30 10 H0 H30 V0 Z'

    var supplyAxis = d3.select('#chart').append('g').attr('id', 'supply-axis').classed('axis', true)
        .attr('transform', 'translate(500,560)')

    supplyAxis.append('text').text('Supply')
        .attr('text-anchor','end')
    supplyAxis.append('path').attr('d', arrow2_d)
        .attr('transform', 'translate(5,-15)')

    var demandAxis = d3.select('#chart').append('g').attr('id', 'demand-axis').classed('axis', true)
        .attr('transform', 'translate(40,250) rotate(270)')

    demandAxis.append('text').text('Demand')
        .attr('text-anchor','end')
    demandAxis.append('path').attr('d', arrow2_d)
        .attr('transform', 'translate(5,-15)')
}

var setupGuidelines = function() {
    var arrow_d = 'M15 0 L30 20 H0 Z'

    var guidelines = d3.select('#chartGroup').append('g').attr('id', 'guidelines')

    guidelines.append('line')
        .attr('x1',0)
        .attr('x2',1400)
        .attr('y1',300)
        .attr('y2',300)
        .attr('id', 'guideline')
        .style('stroke','grey')
        .style('stroke-dasharray', '3,2')
        .style('stroke-width', '3')

    guidelines
        .insert('text').text('more demand')
        .style('transform', 'translate(50px,300px) rotate(-90deg)')
        .style('fill', function() {return d3.interpolateRdBu(0.1)})
        // .append('tspan').text('than supply')
        // .attr('y', 13).attr('x', 0)
        // .style('fill', 'grey')


    guidelines
        .insert('text').text('more supply').attr('text-anchor','end')
        .style('transform', 'translate(50px,310px) rotate(-90deg)')
        .style('fill', function() {return d3.interpolateRdBu(0.9)})
        // .append('tspan').text('than demand')
        // .attr('y', 13).attr('x', 0)
        // .style('fill', 'grey')


    guidelines
        .append('path').attr('d', arrow_d)
        .attr('transform', 'translate(30,180)')
        .style('fill', function() {return d3.interpolateRdBu(0.1)})

    guidelines
        .append('path').attr('d', arrow_d)
        .attr('transform', 'translate(60' +
            ',420)rotate(180)')
        .style('fill', function() {return d3.interpolateRdBu(0.9)})

    
}

chart = d3.select('#chart')
.append('g')
.attr('id', 'chartGroup')

d3.select('#chartGroup').append('g')


var ticked = function() {
    d3.selectAll('.skill').attr('transform', function(d) {
        return 'translate(' + d.x + ',' + d.y + ')'
    })
}

simulation = d3.forceSimulation()
    .force('charge', d3.forceManyBody().strength(-5))
    .force("collide",d3.forceCollide(
        function(d){
            return Math.max(sizeScale(d.supply), sizeScale(d.demand)) + nodeGap;
            }
        ).iterations(its)
    )

    .force("y", d3.forceY(function(d){return d.demand}).strength(0.8))
    .force("x", d3.forceX(-400).strength(0.05))
    .alphaMin(0.2)
    .on("tick", ticked)

///////////////////
// LOAD THE DATA //
///////////////////
var skillsSourceFile = 'static/skills_hierarchy_skill_list_txt.csv'//'/static/skills-proofed.csv';
var langsSourceFile = 'static/programming-languages.txt'

d3.csv(langsSourceFile, function(data) {
        programmingLanguages = data.map(function(o){ return o.language; });
    })

var bigLoad = function(fn) {
    d3.csv('static/historical_201604.csv', function(data) {
        skillsData = []
        data.forEach(function(d) {
            var skillData = {
                    tag:d.skill, 
                    sector: d.sector, 
                    superskill_name: d.sector,
                    supply: d['201604_supply'],
                    demand: d['201604_demand'],
                    history: 'NYI'
                }

            skillData.ratio = skillData.demand / skillData.supply;

            if(skillsData.length < 1400 && skillData.supply !== 0 && skillData.demand !== 0) {
                skillsData.push(skillData);
            }
        })
        fn()
    }) // do it in one load!
}

var smallLoad = function(fn) {
     d3.csv(langsSourceFile, function(data) {
        programmingLanguages = data.map(function(o){ return o.language; });
    })

    d3.csv(skillsSourceFile, function(data) {

        skillsData = data//.slice(0,100)

        skillsData.forEach(function(d) {
            d.supply = xScale(d.x)
            d.demand = yScale(d.y)

            d.ratio = d.y / d.x;// overriding existing ratio calculation

            d.superskill_name = d.sector;
        })
        fn()
    })
}

var init = function() {

    setupLabelForce()

    bigLoad(function() {


        var ratios = skillsData.map(function(d){return d.ratio})
        maxRatio = Math.max(...ratios);
        minRatio = Math.min(...ratios);
        heatColorScale = d3.scaleLog().domain([minRatio, maxRatio]).range([1,0])

        d3.select('body').append('div').attr('class', 'my-tooltip').html('&nbsp;')


        d3.select('#chart')
            .append('g')
            .attr('id', 'chartGroup');

        setupGuidelines();
        splitKeys();
        setupAxes();

        skillNodes = d3.select('#chartGroup')
            .selectAll('.skill')
            .data(skillsData)
            .enter()
            .append('g')
            .classed('skill', true)
            .on('mouseover', function(d){
                addSkillToSelection(d);
                updateLabels();
            })
            .on('mouseout', function(d){
            })
            .on('click', function(d) {
                focusOnSkill(d.tag)
            })

        zoom = d3.zoom().on("zoom", function(){
            d3.select('#chartGroup').attr("transform", d3.event.transform)
        }).scaleExtent([1, 3])

        d3.select('#chart')
            .call(zoom)
//                .on("wheel.zoom", null)

        skillNodes
            .append('circle')
            .classed('whole-circle', true)

        skillNodes
            .append('circle')
            .classed('top-half', true)
            .attr('clip-path', 'url(#cut-off-bottom)')

        skillNodes
            .append('circle')
            .classed('bottom-half', true)
            .attr('clip-path', 'url(#cut-off-top)')

        setColoring('heat')
        setPlotType('scatter')
        setPointStyling('uniform')

        // setting up autocomplete
        $( "#find" ).autocomplete({
            source: skillsData.map(function(d) { return d.tag; }),
            select: function( event, ui ) {
                focusOnSkill(ui.item.value)
                    ui.item.value = ''
            }
        })
    })
}

var splitHalves = function() {
    d3.selectAll('.top-half')
        .style('display', '')
        .transition()
        .attr('r', function(d) {
            return splitScale(d.demand);
        })

    d3.selectAll('.bottom-half')
        .style('display', '')
        .transition()
        .attr('r', function(d) {
            return splitScale(d.supply);
        })

    d3.selectAll('.whole-circle').style('display', 'none')

    if(plotType=='beeswarm') {
        simulation.force("collide",d3.forceCollide(
            function(d){
                return Math.max(splitScale(d.supply), splitScale(d.demand)) + nodeGap;
            }
        ).iterations(its)
        ).alpha(1).restart()
    }
}

var uniformSkillSize = function() {
    d3.selectAll('.top-half, .bottom-half')
        .transition()
        .attr('r', function(d) {
            return nodeSize;
        }).style('display', 'none')

    d3.selectAll('.whole-circle')
        .transition()
        .attr('r', function(d) {
            return nodeSize;
        })
        .style('display', '')

    if(plotType=='beeswarm') {
        simulation.force("collide",d3.forceCollide(
            function(d){
                return nodeSize + nodeGap;
            }
        ).iterations(its)
        ).alpha(1).restart()
    }
}

var colorByHeat = function() {
    gradientBackground(false)
    d3.selectAll('.top-half, .bottom-half, .whole-circle')
        // .transition()
        .style('fill', function(d) {
            return d3.interpolateRdBu(heatColorScale(d.ratio))
        })
}

var colorByCategory = function() {
    d3.selectAll('.top-half, .bottom-half')
        // .transition()
        .style('fill', function(d) {
            return categoryColor(d)
        })
}

var splitKeys = function() {
    var splitKey = function(x, y, demand, supply) {
        key = d3.select('#chart').append('g').attr('class','split-key').attr('transform', 'translate('+x+','+y+')')

        key
            .append('circle').attr('r',function(){return splitScale(supply)})
            .style('fill', function(d) {
                return d3.interpolateRdBu(heatColorScale(demand / supply))
            }).attr('clip-path', 'url(#cut-off-top)')

        key.append('circle')
            .attr('r',function() {
                return splitScale(demand);
            })
            .style('fill', function(d) {
                return d3.interpolateRdBu(heatColorScale(demand / supply))
            }).attr('clip-path', 'url(#cut-off-bottom)')

        // key.append('line').attr('x1', 0).attr('x2', 100).attr('y1', 50).attr('y2', 50).style('stroke', 'white')

        key.append('text').text('Demand').attr('fill', '#000').attr('text-anchor', 'middle')
            .attr('y', -5)
            .attr('font-size',function(){return splitScale(demand) * 0.4})
//        attr('font-size', 0.5 * demand)
        key.append('text').text('Supply').attr('fill', '#000').attr('text-anchor', 'middle')
            .attr('y', function(){return splitScale(supply) * 0.4 + 2})
            .attr('font-size',function(){return splitScale(supply) * 0.4 + 2})
    }

    splitKey(100,150,30,3)
    splitKey(100,450,3,30)
}

/*
Function responsible for substantial setup also...
 */

var scatterPlot = function() {
    plotType = 'scatter'
    simulation.stop()

    d3.selectAll('.axis').transition().style('opacity', 1.0)
    d3.selectAll('.split-key').transition().attr('transform', function(d,i){
        return 'translate(' + (100 + 600*i) + ',' + (150 + 300*i) + ')';
    })

    // render all axes
//    xAxis = d3.select('#chart').append('g').attr('id', 'x-axis').attr('transform', 'translate(0,560)')
//        .call(d3.axisBottom().scale(xScale).tickFormat(d3.format(".1")))
//    yAxis = d3.select('#chart').append('g').attr('id', 'y-axis').attr('transform', 'translate(40,0)')
//        .call(d3.axisLeft().scale(yScale).tickFormat(d3.format(".1")))
//    xAxis.append('text').attr('id','axisTitle')
//        .text('Supply - relative number of job seekers')
//        .attr('x', 950).attr('y', 550).attr('text-anchor', 'end')

    // non-numeric axes
    skillsData.forEach(function(skill) {
        skill.x = xScale(skill.supply)
        skill.y = yScale(skill.demand)
    })

    d3.selectAll('.skill')
        .transition()
        .attr('transform', function(d) {
            return 'translate(' + d.x + ', ' + d.y + ')';
        })

    labelForce.alpha(1.0).restart()
}

// pull out the selection
var pulloutSwarm = function() {
    /*
        Pulls out a specific selection, be it a category or a type.
    */
    simulation.nodes(skillsData).on("tick", ticked);
    alignToHeatScale();

    d3.selectAll('.cat-label').style('opacity', 0)

    simulation.force('x', d3.forceX(function(d) {
            return d.pulledOut ? xCol(2) : xCol(0);
        }).strength(0.3))
        .alpha(1.0)
        .restart()
}

// modifying mode via DOM... categories, programming language or none.
var select = function(name) {
    if(skill_cats.indexOf(name) > -1) {
        d3.selectAll('.skill').each(function(d) {
            d.pulledOut = (d.sector == name);    
        })
    } else if(name=="programming languages") {
        d3.selectAll('.skill').each(function(d) {
            d.pulledOut = (programmingLanguages.indexOf(d.tag) > -1);    
        })
    } else if (name=="all"){
        d3.selectAll('.skill').each(function(d) {
            d.pulledOut = true;
        })
    }
    else {
        d3.selectAll('.skill').each(function(d) {
            d.pulledOut = false;
            console.log('selecting none')
        })
    }

    labelSelection()
}

var addSkillToSelection = function(d) {
    // check not pre-existing
    if(labelData.links.some(function(e) { return d == e.anchor})) return;

   var label = {'name':d.tag, x:d.x, y:d.y, vx:0, vy:0}
    var anchor = {fx:d.x, fy:d.y, x:d.x, y:d.y}
    labelData.nodes.push(label)//, 'x': source.x, 'y':source.y})
    labelData.nodes.push(anchor)
    labelData.links.push({anchor: d, target: label, source:anchor}) // need anchor to update fixed points potentially
}


var labelSelection = function() {
    // remove labels, should be done in updateLabels really
    d3.selectAll('.pulled-label, .pulled-label-line').remove()

    if(typeof labelData == 'undefined') labelData = {nodes:[], links:[]}

        // empty all labelData
    while(labelData.nodes.length) labelData.nodes.pop();
    while(labelData.links.length) labelData.links.pop()

    sel = skillsData.filter(function(d) { return d.pulledOut;})

    // restrict to top and bottom slice
    sel.sort(function(a,b){return b.ratio - a.ratio;})
    var len = sel.length;
    var sliceWidth = 10;
    if(len > sliceWidth * 2) {
        sel = sel.slice(0,sliceWidth).concat(sel.slice(len-sliceWidth, len))
    }

    sel.forEach(function(d) { // for each skill
        addSkillToSelection(d)
    });

    updateLabels()

    if(plotType=="beeswarm") {
        pulloutSwarm();
    }
    labelForce.nodes(labelData.nodes).alpha(1).restart()
}

var updateLabels = function() {
    d3.select('#chartGroup').selectAll('.pulled-label-line')
            .data(labelData.links)
            .enter()
            .append('line')
            .attr('class', 'pulled-label-line')

    var labels = d3.select('#chartGroup')
        .selectAll('.pulled-label')
        .data(labelData.nodes)
        .enter()

    var render = function(selection, d, asShadow) {
        var lines = d.name.split(' ');
        for(var i = 0; i < lines.length; i++) {
            var line = selection.append("tspan")
                .style('text-anchor', 'middle')

                .attr('x', function(d) { return 0; })
                .attr('y', function(d) { return i * 10; })
                .text(lines[i])
            if(!!asShadow) {
                line.style('fill', 'none')
                    .style('stroke', '#fff')
                    .style('stroke-linejoin', 'round')
                    .style('stroke-width',3)
            }
//            line
//            .style('font-size', 0)
//            .transition()
//            .style('font-size', '10px')
        }
    }

    labels
        .append('g')
        .attr('class', 'pulled-label')
        .on('mouseover', function() {
//                d3.select(this).raise()// buggy
        })
        .style('opacity', 1.0)
        .append('text')
        .each(function(d) {
            if(!d.name) return; // skip anchors

            render(d3.select(this), d, true)
            render(d3.select(this), d, false)
        })
        .style('opacity', 1.0)

//        .style('fill', 'black')
//        .style('stroke-width', '0')

      labelForce.nodes(labelData.nodes).alpha(1).restart()
}

var setupLabelForce = function() {
    // force-driven label layout
    labelData = {nodes:[],links:[]}
    if(typeof labelForce !== "undefined") labelForce.stop()
    labelForce = d3.forceSimulation()
        .force('link', d3.forceLink(labelData.links).distance(25).strength(0.95))
        .force('charge', d3.forceManyBody().strength(function(d) {
            return !d.name ? -20 : -40;
        }))
        // .force('x', d3.forceX(400).strength(0.5)) // brush to the right
        .on('tick', function(d){
            d3.selectAll('.pulled-label')
                .attr('transform', function(d) {
                    return 'translate('+d.x+','+d.y+')';
                })

            d3.selectAll('.pulled-label-line')
            .attr('x1', function(d) {return d.anchor.x})
            .attr('y1', function(d) {return d.anchor.y})
            .attr('x2', function(d) {return d.target.x})
            .attr('y2', function(d) {return d.target.y})
            .each(function(d) {
                d.source.fx = d.anchor.x;
                d.source.fy = d.anchor.y;
            }) // in case anchor is moving
        })
}

var alignToHeatScale = function() {
    // align skills along an axes of 'heat', i.e. demand/supply ratio.
    return simulation.force('y', d3.forceY(function(d) {
        return heatColorScale(d.ratio) * 440 + 80; // was 525
        }).strength(0.95)
    )
    .alpha(1.0).restart()
}

var alignToDemandScale = function() {
    simulation
        .force("y", d3.forceY(function(d){return d.demand}).strength(0.9))
        .alpha(1.5).restart()
    simulation.nodes(skillsData).on("tick", ticked);
}

var beeSwarm = function() {
    d3.selectAll('.split-key').transition().attr('transform', function(d,i){
        return 'translate(100,' + (150 + 300*i) + ')';
    })

    simulation.nodes(skillsData).on("tick", ticked);
    alignToHeatScale();
    simulation.force("x", d3.forceX(200).strength(0.1))
    .alpha(1.5)
    .restart()

    labelForce.alpha(1.0).restart()
}

var gradientBackground = function(status) {
    if(typeof status == 'undefined') status = true;
    d3.selectAll('.pulled-label-line').classed('gradbg', status)
    if(status) {
        d3.select('svg').style('background', 'linear-gradient(180deg,#e33 0%, lightgrey,#33e)')
        d3.selectAll('.skill > circle').style('fill', 'white')
    } else {
        d3.select('svg').style('background', '');
    }
}

var focusOnSkill = function(skillName) {

    addSkillToSelection(skillsData.filter(function(d){ return d.tag == skillName; })[0]); 
    updateLabels()
    return;

    d3.selectAll('.skill')//.filter(function(d){ return d.tag == skillName; })
    .transition()
    .attr('transform', function(d) {
        return d.tag == skillName ? 'translate(' + d.x + ',' + d.y + ') scale(3)' : 'translate(' + d.x + ',' + d.y + ')'
        // return 'translate(' + d.x + ',' + d.y + ') scale(3)'
    })
    .selectAll('circle').style('filter', 'url(#glow)')

    d3.selectAll('.skill').filter(function(d){ return d.tag == skillName; })
        .append('text').attr('class', 'focus-box')
        .text(skillName)
        .attr('x', 5)
        .attr('y', 10)
}

var setPlotType = function(name) {
    plotType = name; // to be refactored into NG implementation
    switch(name){
        case 'scatter':
            d3.select('#style-heat-background').node().disabled = true;
            d3.select('#style-heat-background').node().checked = false;
            colorByHeat();
            scatterPlot();
            d3.selectAll('#guidelines').style('opacity', 0);
            break;

        case 'beeswarm':
            beeSwarm();
            d3.selectAll('#guidelines').style('opacity', 1);
            d3.selectAll('.axis').style('opacity', 0);
            d3.selectAll('#x-axis').style('opacity', 0);
            d3.selectAll('#y-axis').style('opacity', 0);
            d3.select('#style-heat-background').node().disabled = false;
            pulloutSwarm()
            break;
    }
}

var setColoring = function(name) {
    switch(name) {
        case 'heat':
            colorByHeat();
        break;

        case 'category':
            colorByCategory()
        break;

        case 'gradient':
            gradientBackground()
        break;    
    }
}

var setPointStyling = function(name) {
    switch(name) {
        case 'uniform':
            uniformSkillSize()
        break;

        case 'split':
            splitHalves();
        break;
    }
}

var setSplitStyle = function(val) {
    if(val) {
        d3.selectAll('.split-key').transition().style('opacity', 1.0)
        splitHalves();
    } else {
        uniformSkillSize();
        d3.selectAll('.split-key').transition().style('opacity', 0.0)
    }
}

var setHeatStyle = function(val) {
    if(val) {
        gradientBackground();
    } else {
        colorByHeat();
    }
}

var zoomIn = function() {
    zoom.scaleBy(d3.select('#chart').transition(), 1.5)
}

var zoomOut = function() {
//    d3.select('#chart').transition().call(zoom.transform, d3.zoomIdentity);  // zoom right out
    zoom.scaleBy(d3.select('#chart').transition(), 0.5)
}

// intitial setup
setupAxes();
init()