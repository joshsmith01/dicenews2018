import $ from 'jquery';
import whatInput from 'what-input';

import fontawesome from '@fortawesome/fontawesome'
// import freeBrands from '@fortawesome/fontawesome-free-brands'
// import freeRegular from '@fortawesome/fontawesome-free-regular'
// import freeSolid from '@fortawesome/fontawesome-free-solid'
// import freeWebfonts from '@fortawesome/fontawesome-free-webfonts'
// import proLight from '@fortawesome/fontawesome-pro-light'
// import proRegular from '@fortawesome/fontawesome-pro-regular'
// import proSolid from '@fortawesome/fontawesome-pro-solid'
// import {faUser} from '@fortawesome/fontawesome-pro-webfonts'

// fontawesome.icon(faUser)
// fontawesome.library.add(freeBrands, freeRegular, freeSolid, proLight, proRegular, proSolid);


window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

// import './lib/demosite';

$(document).foundation();



// BEGIN the load more button. -JMS
let nextLink, nextPosts, getUrl;
// let getUrl = "/wp-json/wp/v2/posts?_embed&page=2";
// getUrl = "";
let pathname = window.location.pathname;

function buildGetUrl() {
    const restscrollId = $('#restscroll');
    let catId = restscrollId.data('catid');
    let authId = restscrollId.data('authid');
    let cptId   = restscrollId.data('cptid');
    let cptCatId   = restscrollId.data('cptcatid');

    if (catId) {
         getUrl = "/wp-json/wp/v2/posts?categories=" + catId + "&_embed&page=2";
    } else if (authId) {
        getUrl = "/wp-json/wp/v2/posts?author=" + authId + "&_embed&page=2";
    } else if (cptId) {
        getUrl = "/wp-json/wp/v2/erc-post?_embed&page=2";
    } else if (cptCatId) {
        getUrl = "/wp-json/wp/v2/erc-post?erc_category=" + cptCatId + "&_embed&page=2";
    } else {
         getUrl = "/wp-json/wp/v2/posts?_embed&categories_exclude=4722&page=2";
    }
    return getUrl;
}


// Unquote string (utility)
function unquote(value) {
    if (value.charAt(0) === '"' && value.charAt(value.length - 1) === '"') return value.substring(1, value.length - 1);
    return value;
}

// Parse a Link header
function parseLinkHeader(header) {
    let linkexp = /<[^>]*>\s*(\s*;\s*[^\(\)<>@,;:"\/\[\]\?={} \t]+=(([^\(\)<>@,;:"\/\[\]\?={} \t]+)|("[^"]*")))*(,|$)/g;
    let paramexp = /[^\(\)<>@,;:"\/\[\]\?={} \t]+=(([^\(\)<>@,;:"\/\[\]\?={} \t]+)|("[^"]*"))/g;
    let matches = header.match(linkexp);
    let rels = new Object();
    for (let i = 0; i < matches.length; i++) {
        let split = matches[i].split('>');
        let href = split[0].substring(1);
        let ps = split[1];
        let link = new Object();
        link.href = href;
        let s = ps.match(paramexp);
        for (let j = 0; j < s.length; j++) {
            let p = s[j];
            let paramsplit = p.split('=');
            let name = paramsplit[0];
            link[name] = unquote(paramsplit[1]);
        }
        if (link.rel !== undefined) {
            rels[link.rel] = link;
        }
    }
    return rels;
}


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function loadMore(url, responseHeaderNext) {
    // This only ever gets the posts from the main loop. -JMS
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
        success: function (data, textStatus, request) {
            responseHeaderNext = request.getResponseHeader('link');
            let responseHeaderTotalPages = request.getResponseHeader('X-WP-TotalPages');
            let currentPage = getParameterByName('page', url);
            nextLink = parseLinkHeader(responseHeaderNext);

            if ( currentPage < responseHeaderTotalPages ) {
                $('#restscroll').removeClass('invisible');
                confirmStorage();
            } else if (currentPage === responseHeaderTotalPages ) {
                $('#restscroll').removeClass('invisible');
                confirmStorage();
            } else {
                $('#restscroll').removeClass('invisible');
                confirmStorage();
            }
            sessionStorage.setItem('nextPosts', JSON.stringify(data));
            if ("href" in nextLink) {
                sessionStorage.setItem('nextLink', nextLink.next.href);
            }
        }
    });
}

let confirmStorage = () => {
    if (nextLink.next) {
        sessionStorage.setItem('nextLink', nextLink.next.href);
        return nextLink;
    }
};


function displayData(nextLink) {
    nextPosts = sessionStorage.getItem('nextPosts');
    nextLink = sessionStorage.getItem('nextLink');

    let data = JSON.parse(nextPosts);
    $.each(data, function (index, value) {
        let published = new Date(Date.parse(value.date));
        let monthName = new Array(7);
        monthName[0] = "January";
        monthName[1] = "February";
        monthName[2] = "March";
        monthName[3] = "April";
        monthName[4] = "May";
        monthName[5] = "June";
        monthName[6] = "July";
        monthName[7] = "August";
        monthName[8] = "September";
        monthName[9] = "October";
        monthName[10] = "November";
        monthName[11] = "December";

        let image = "";
        if ( (value._embedded["wp:featuredmedia"]["0"].code !== "rest_forbidden") && (value._embedded["wp:featuredmedia"]["0"].code !== "rest_post_invalid_id") ) {
            image = value._embedded["wp:featuredmedia"]["0"].media_details.sizes["thumbnail-desktop"].source_url;
        }
        $('.stories').append(

            "<article class='grid-x content-standard post-" + value.id + " post type-post status-publish format-standard has-post-thumbnail hentry category-ai category-headline tag-a-i tag-artificial-intelligence tag-google'>" +
            ((image)?("<div class='article-excerpt-img'>" +

                "<img src='" + image + "'>" +
                "<div class='overlay'></div>" +

                "</div>"):("<div class='small-12 cell'>")) +
            "<div class='article-excerpt-details'>" +
            "<header>" +
            "<h2 class='entry-title'>" +
            "<a href='" + value.link + "'>" +
            value.title.rendered +
            "</a>" +
            "</h2>" +
            "<div class='entry-meta entry-meta-standard'>" +
            "<p class='byline author'>" + value._embedded.author["0"].name + "</p>" +
            "<time class='updated' datetime='" + value.date + "'>, " +
            monthName[published.getMonth(Date.parse(value.date))] +
            " " + published.getDate(Date.parse(value.date)) + ", " +
            published.getFullYear(Date.parse(value.date)) +
            "</time>" +
            "</div>" +
            "</header>" +
            "<div class='entry-content hide-for-small-only'>" +
            value.excerpt.rendered +
            "</div>" +
            "</article>" );
    });
    loadMore(nextLink);
}

$('#restscroll').click(function () {
    displayData();
    $('#restscroll').addClass('invisible');
});
$(document).ready(function () {
    sessionStorage.clear('nextPosts');
    sessionStorage.clear('nextLink');
    buildGetUrl();
    $('#restscroll').addClass('invisible');
    loadMore(getUrl);
});


// END the load more button. -JMS
let clickable = false;
let topLinks = $("footer .heading");
let innerLinks = $("footer .menu");

const breakpoint = 1023;


// Make footer headings clickable for smaller windows
function smallWindow() {
    clickable = true;
    innerLinks.slideUp();
    $('footer .heading').click(function () {
        $(this).next().children('footer .menu').slideToggle();
    });
}

// Make footer headings static for larger windows
function bigWindow() {
    clickable = false;
    topLinks.unbind("click");
    $('footer .menu').css('display', 'block');
}

// Initial settings
$(document).ready(function () {
    if ($(window).width() < breakpoint) {
        smallWindow();
    } else {
        bigWindow();
    }
});

// If we jump down to smaller size, make footer links clickable
$(window).resize(function () {
    if ($(window).width() < breakpoint && !clickable) {
        smallWindow();
    }// If we jump up to larger size, make footer links static
    else if ($(window).width() > breakpoint - 1 && clickable) {
        bigWindow();
    }
});

// $('.top-employers.active').removeClass('active').addClass('hidden');
// $('.top-employers.employers_global').removeClass('hidden').addClass('active');


$('.locale-topmenu li a').click(function () {
    var dataId = $(this).data('id');
    $('.locale-topmenu li a.active').removeClass('active');
    $('.locale-submenu.active').removeClass('active').addClass('hidden');
    $('.locale-submenu li a.active').removeClass('active');
    $('.locale-submenu').find("[data-parent='" + dataId + "']").first().addClass('active');
    $(this).addClass('active');
    $('.locale-submenu.submenu_' + dataId).removeClass('hidden').addClass('active');

    var activeSubmenuItemClass = $('.locale-submenu.active li a.active').attr('class');
    var activeClass = activeSubmenuItemClass.substring(10).slice(0, -7);

    $('.top-employers.active').removeClass('active').addClass('hidden');
    $('.top-employers.employers_' + activeClass).removeClass('hidden').addClass('active');


});


// Add view the top lists by menu click. -JMS
$('.locale-submenu li a').click(function () {
    $('.locale-menu li a.active').removeClass('active');
    $('.top-three-posts article.active').removeClass('active').addClass('hidden');

    $('.locale-topmenu .locale-menu .active').removeClass('active');
    $('.locale-topmenu .locale-menu .active .locale-submenu').removeClass('active');
    $(this).addClass('active').parent('.locale-submenu').addClass('active');

    // Analysis articles
    var wholeClass = $(this).attr('class');
    var activeClass = wholeClass.substring(10).slice(0, -7);

    $('.article-card' + '.' + activeClass).removeClass('hidden').addClass('active');

    // Display the top employer list
    $('.top-employers.active').removeClass('active').addClass('hidden');
    $('.top-employers' + '.employers_' + activeClass).addClass('active').removeClass('hidden');

    // Display hide and show the submenu
    if ($('.locale-submenu').hasClass('xxxactive')) {
        $('.locale-submenu.active').removeClass('active').addClass('hidden');
    }
    $('.submenu_' + activeClass).addClass('active').removeClass('hidden');

    // Update the locale.
    var localeData = $(".top-employers.active .locale-data").html();
    $("#dyn-locale-data").text(localeData);

    // Activate the top menu item
    var menuParent = $(this).data('parent');
    $('.locale-topmenu li a[data-id="' + menuParent + '"]').addClass('active');

});
