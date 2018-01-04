jQuery(document).ready( function($){

    var svg, svgWidth, svgHeight, ratio, d3, containerWidth, containerHeight;
    var iframe = $('.story .d3 iframe');

    if(iframe.length > 0){

        iframe.load(function() {

            svg = iframe.contents().find('.d3 iframe').contents().find('svg')[0];
            svgWidth = $(svg).attr('width');
            svgHeight = $(svg).attr('height');

            // Check if height has been overridden in post settings
            var tempHeight = $('data').attr('height');
            if(tempHeight > 0){
                svgHeight = tempHeight;
                svgWidth = 850;
                //console.log('D3 height field set');
            }
            //else
                //console.log('Grabbing D3 height from iframe');

            ratio = svgHeight/svgWidth;

            d3 = $('.story > .d3');
            containerWidth = d3.width();
            containerHeight = Math.round(ratio * containerWidth);
            if(containerHeight > 0)
                iframe.css('height', containerHeight);
            else
                console.log('iframe height must be greater than 0');

        });

        $(window).resize(function(){
            containerWidth = d3.width();
            containerHeight = Math.round(ratio * containerWidth);
            iframe.css('height', containerHeight);
        });
    }

});