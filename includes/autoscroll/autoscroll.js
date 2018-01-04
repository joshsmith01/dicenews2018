jQuery(document).ready( function($){

    var ie = false;

    /*
    function checkIE() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)){
            ie = true;
            //alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
        }
        else
            ie = false;
    }

    checkIE();*/
    if(ie){
        $('.autoscroll').css({display: 'none'});
        $('.pagination').css({display: 'inline-block'});
    }

    // Initialize variables
    var count = 1;
    var autoscroll = $('.autoscroll');
    var loadingText = $(document.createElement('div'))
        .addClass('loading')
        .text('Loading...');
    // autoscroll.append(loadingText);
    var moreButton = $(document.createElement('button'))
        .addClass('more')
        .text('More Posts')
        .css({'display': 'block'});
    autoscroll.append(moreButton);

    // Preload next page of posts
    // Don't load this as soon as the page loads, but load it in line 51 when the button is clicked. -JMS
    loadArticles();

    // Display preloaded posts and load next
    function showArticles(){
        $('.stories div.more.hidden').removeClass('hidden');
        moreButton.fadeOut(100, function(){
            loadingText.fadeIn(100, loadArticles());
        });
    }

    // Load posts when more posts button is clicked
    moreButton.click(function(){
      loadArticles();
      showArticles();
    });

    // AJAX call to get next set of posts
    function loadArticles(){
        $(function() {

            // Preload next posts
            $.ajax({
                url: '/wp-admin/admin-ajax.php',
                type: 'POST',
                data:{
                    action: "autoscroll",
                    paged: count,
                    query_vars: autoscroll_vars.query_vars,
                    ids: autoscroll_vars.ids

                },
                success: function (html) {

                    if(html.length < 10){
                        // Create no posts div
                        var noPosts = $(document.createElement('div'))
                            .addClass('no-posts')
                            .text('No more posts')
                            .fadeOut();

                        // Load no posts div
                        loadingText.fadeOut(function(){
                            $(autoscroll).append(noPosts).fadeIn();
                        });
                    }
                    else{
                        // Load more posts
                        var morePosts = $(document.createElement('div'))
                            .addClass('more hidden')
                            .append(html);
                        $('.stories').append(morePosts);

                        // Replace loading div with more posts button
                        loadingText.fadeOut(function(){
                            moreButton.fadeIn();
                        });
                        count++;
                    }
                },
                error: function(html){
                    console.log('autoscroll error');
                }
            });
            return false;
        });
    }
});
