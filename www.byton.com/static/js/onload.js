$(document).ready(function(e){

    // if ($(this).scrollTop() < 500 && screen.width > 768) {
    //     $("#footer").hide();
    // }
    // else {
    //     $("#footer").show();
    // }

    // detect cn site to replace video src
    if (isCnSite()) {
        $('video').children('source').each(function(index,val)  {
            var curSrc = $(val).attr('src');
            curSrc = curSrc.replace("media.byton.com", "media.byton.cn");
            $(val).attr('src',curSrc);
            $(val).attr('data-src',curSrc);
        });

        $('video').each(function(index,val){
            val.load();
        })
    }

    function isCnSite(){
        return (window.location.host.indexOf('byton.cn') != -1) 
    }

    var windowHeight = $(window).height();
    var windowWidth = $(window).width();
    function update() {
        $('#santa-clara span, #los-angeles span, .time.santa-clara, .time.los-angeles')
            .html(moment().tz("America/Los_Angeles").format("HH:mm A"));
        $('#munich span, .time.munich')
            .html(moment().tz("Europe/Berlin").format("HH:mm A"));
        $('#hong-kong span, .time.hong-kong')
            .html(moment().tz("Hongkong").format("HH:mm A"));
        $('#beijing span, #nanjing span, #Shanghai span, .time.beijing, .time.nanjing, .time.shanghai')
            .html(moment().tz("Asia/Shanghai").format("HH:mm A"));
    }

    setInterval(update, 1000);
    AOS.init();

    $('.bxslider').bxSlider({
        pager: false
    });

    $('.center').slick({
        centerMode: true,
        variableWidth: true,
        infinite: false,
        slidesToShow: 1,
        arrows: true,
        dots: true,
        verticalScrolling: true,
        customPaging : function(center, i) {
            var title = $(center.$slides[i]).data('title');
            return '<a class="pager__item '+title+'">  </a>';
        },
        responsive: [
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    variableWidth: false,
                    speed: 500,
                    fade: true
                }
            }
        ]
    });

    $('#co-creator-slider').slick({
        centerMode: true,
        variableWidth: false,
        infinite: false,
        slidesToShow: 1,
        arrows: true,
        dots: true,
        dotsClass: "slick-dots-2",
        verticalScrolling: true,
        customPaging : function(center, i) {
            return '';
        },
        responsive: [
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    variableWidth: false,
                    speed: 500,
                    fade: true
                }
            }
        ]
    });

    // feature slider

    // var item_length = $('.feature-slider > div').length - 1;
    $('.feature-slider').slick({
        centerMode: true,
        variableWidth: true,
        infinite: false,
        slidesToShow: 1,
        arrows: true,
        dots: true,
        verticalScrolling: false,
        afterChange: function(slide, index) {
            if( index === 0){
                //console.log('First Slide');
            } else if( index === 1 ){
                //console.log('Second Slide');
            } else if( index === 2){
                //console.log('Third Slide');
            } else if( index === 3) {
                //console.log('Fourth Slide');
            }
        },
        customPaging : function(feature, i) {
            var title = $(feature.$slides[i]).data('title');
            return '<a class="pager__item '+title+'"></a>';
        },
        responsive: [
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                    variableWidth: false,
                    speed: 500,
                    fade: true
                }
            }
        ]

    });

    $('.feature-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('.text-pagination li.active').removeClass('active');
        if( currentSlide === 0){
            $('.text-pagination li.slide-1').addClass('active');
        } else if( currentSlide === 1 ){
            $('.text-pagination li.slide-2').addClass('active');
        } else if( currentSlide === 2){
            $('.text-pagination li.slide-3').addClass('active');
        } else if( currentSlide === 3) {
            $('.text-pagination li.slide-4').addClass('active');
        }
    });

    $('.text-pagination li[data-slide]').click(function(e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.text-pagination li.active').removeClass('active');
        $(this).addClass('active');
        $('.feature-slider').slick('slickGoTo', slideno - 1);
    });

    var docWidth = $(window).width();
    var gridWidth = 1200;
    var rightPosition = (docWidth - gridWidth) / 2;

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {

        $('.map-slider-en').bxSlider({
            infiniteLoop: false,
            pager: false,
            hideControlOnEnd: true,
            useCSS: false
        });

        $('.map-slider-cn').bxSlider({
            startSlide: 1,
            infiniteLoop: false,
            pager: false,
            hideControlOnEnd: true,
            useCSS: false
        });
    }
    
    /* join page */

    if (isCnSite()) {
        $('.join-bxslider-1').prepend('<li><div class="join-banner-bg fmc_img_01"></div></li>');
        $('.join-bxslider-2 li:eq(0)').after('<li><div class="join-banner-bg fmc_img_02"></div></li>');
    }

    $('.join-bxslider-1').bxSlider({
        Controls: true,
        pager: false,
        mode: 'fade',
        auto: true,
        controls: false,
        infiniteLoop: true,
        pause: 4000,
        touchEnabled: false
    });

    $('.join-bxslider-2').bxSlider({
        Controls: true,
        pager: false,
        mode: 'fade',
        auto: true,
        controls: false,
        infiniteLoop: true,
        pause: 6000,
        touchEnabled: false
    });

    $('.join-bxslider-3').bxSlider({
        Controls: true,
        pager: false,
        mode: 'fade',
        auto: true,
        controls: false,
        infiniteLoop: true,
        pause: 8000,
        touchEnabled: false
    });

    $('.join-bxslider-4').bxSlider({
        Controls: true,
        pager: false,
        mode: 'fade',
        auto: true,
        controls: false,
        infiniteLoop: true,
        pause: 10000,
        touchEnabled: false
    });
    /* end join page */
    setTimeout(AOS.refreshHard, 150);



   /* Design Page
     ================================================================ */

   if(windowWidth > 1024 ){
       $(".design-slider .video-player").hover(function () {
           $(this).children("video")[0].play();
           $(this).children("/img").stop(true, false).animate({
               'opacity': '0'
           }, 500);
       }, function () {
           var el = $(this).children("video")[0];
           $(this).children("/img").stop(true, false).animate({
               'opacity': '1'
           }, 500);
           setTimeout(function(){
               el.currentTime = 0;
               el.pause();
           }, 500);
       });
   }

   /* Upload File
     ================================================================ */
    const inputs = document.querySelectorAll('.inputfile');

    $('input#resume-file').change(function(){
        $(".resume-file-name").text(this.files[0].name);
    });

    $('input#cover-letter-file').change(function(){
        $(".cover-file-name").text(this.files[0].name);
    });

    window.addeventasync = function(){
        addeventatc.settings({
            appleical  : {show:true, text:"Apple Calendar"},
            google     : {show:false, text:"Google <em>(online)</em>"},
            outlook    : {show:false, text:"Outlook"},
            outlookcom : {show:false, text:"Outlook.com <em>(online)</em>"},
            yahoo      : {show:false, text:"Yahoo <em>(online)</em>"}
        });
    };

    $(".modal-trigger").click(function () {
        
        $(".success-text").hide();
        $('.error-text').hide();
        var dataAttr = $(this).data('submodal');
        $('#inquiryModal .sign-up-wrapper').addClass('hidden');
        $('#' + dataAttr).removeClass('hidden');   
    });

    $('.switch-inquiry').click(function(e){
        e.preventDefault();
        // debugger;
        var dataAttr = $(this).data('switch');
        $(this).parent().addClass('hidden');
        $('#' + dataAttr).removeClass('hidden');
        //console.log(dataAttr);
    });

    setTimeout(function(){
        $('.atcb-link').addClass('foo box');
    }, 2000);


    $('.open-btn').on('click', function(){
        $(this).toggleClass('open');
    });

    // hide wrapper after fade out
    setTimeout(function() {
        $('.white-wrapper').css("display",'none')
    }, 1000);
    $(".bx-controls-direction .bx-next").click(function(){
        alert("sadsadsa")
    })
    /* Concept Page
     ================================================================ */

    var slider_index = $('.index-slider').bxSlider({
        mode: 'fade',
        auto: true,
        speed: 2000,
        infiniteLoop: true,
        hideControlOnEnd: false,
        pause: 10000,
        video: false,
        adaptiveHeight: true,
        touchEnabled: false,
        pager: true,
        controls: true,
        stopAutoOnClick: true,
        autoStart: true,
        autoHover: true,
        onSliderLoad: function () {
            playTextTransition(true)
        },
        onSlideBefore: function ($slideElement, oldIndex, newIndex) {
            // fix for edge and safari flicker
            $slideElement.css("visibility", "hidden");
            setTimeout(function () {
                $slideElement.css("visibility", "visible");
            }, 100);
            // text transition
            playTextTransition(false)
        }
    });

    var slider_current = 0;
    function playTextTransition(firstLoad){
        //console.log(slider_index.active.index);
        $('.index-slider').children('li').each(function (key,li) {
            $(li).children('div').each(function(dKey, div) {
                $(div).children().each(function(eKey, element){
                    var aniIn = $(element).data('in');
                    var aniOut = $(element).data('out');
                    if($( li ).css("z-index") === 50 && !firstLoad){
                        $(element).removeClass(aniOut).addClass(aniOut).removeClass(aniIn)
                    }else{
                        $(element).removeClass(aniIn).addClass(aniIn).removeClass(aniOut)
                    }
                })
            })
        })
    }

    // add share buttons to images
    var $imageActions = $(
        '<div class="gallery-actions">' +
            '<a class="share-image-btn round-btn" href="javascript:void(0)"></a>' +
        '</div>');
    var $images = $('.shared-image');
    $images.append($imageActions);

    // add share and fullscreen buttons to galleries
    var $galleryActions = $('<div class="gallery-actions">');
    $galleryActions.append('<a class="share-image-btn round-btn" href="javascript:void(0)"></a>');
    if(document.fullscreenEnabled) {
        $galleryActions.append(
            '<a class="fullscreen-btn" href="javascript:void(0)"></a>' +
            '<a class="fullscreen-close-btn" href="javascript:void(0)"></a>');
    }

    var $galleries = $('.gallery-container');
    $galleries.append($galleryActions);

    // button listeners
    $(".fullscreen-btn").click(function(evt) {
        var fullScreenElem = evt.target.parentElement.parentElement;
        requestFullscreen(fullScreenElem);
    });
    $(".fullscreen-close-btn").click(function(evt) {
        exitFullscreen();
    });

    $(".share-image-btn").click(function(evt) {
        // in case we're in full screen mode, exit
        exitFullscreen();
        // determine which image was shared
        var element = evt.target.parentElement.parentElement;
        var bxSlider = $(element).find('.image-slider').data("bxSlider");
        var galleryId = $(element).attr("id");
        var galleryIndex = 0;
        if(bxSlider) {
            bxSlider.stopAuto();
            galleryIndex = bxSlider.getCurrentSlide();
        }
        // store image ref and show modal
        $('#image-share').data("image", [galleryId,galleryIndex].join(","));
        $('#image-share').modal('show');
    });

    $.getJSON("/json/gallery.json", function(galleryJson) {
        // build galleries from json
        $galleries.each(function() {
            var $elem = $(this);
            var galleryData = galleryJson[$elem.attr("id")];
            var $slider = $elem.find('.image-slider');
            $.each(galleryData, function(index, item) {
                // add images to sliders
                var $li = $('<li>');
                $li.append('<div style="background-image: url(\'/img/' + item.path + '\')"></div>');
                var caption = item[window.SITE.language].caption;
                if(caption) $li.append('<p class="image-caption">' + caption + '</p>');
                $slider.append($li);
            });
            var slider4 = $slider.bxSlider({
                mode: 'horizontal',
                auto: true,
                adaptiveHeight: false,
                speed: 500,
                infiniteLoop: true,
                hideControlOnEnd: false,
                pause: 6000,
                video: true,
                stopAutoOnClick: true,
                autoStart: true,
                autoHover: true,
                controls: true,
                shrinkItems: true
            });
            $slider.data("bxSlider", slider4);
        });

        // build images from json
        $images.each(function() {
            var $elem = $(this);
            var item = galleryJson[$elem.attr("id")][0];
            $elem.append('<img style="width: 100%" src="/img/' + item.path + '">');
        });

        // deep link to images
        var imageDeeplink = getURLParameter("img");
        if(imageDeeplink) {
            // get ids from query
            var a = imageDeeplink.split(",");
            var galleryId = a[0]; var galleryIndex = a[1] || 0;

            // find target image or gallery
            var $target = $("#" + galleryId);
            if(!$target.length) {
                console.log("Deep link gallery not found");
                return;
            }

            // scroll to correct item
            console.log("Deep linking to gallery: ", galleryId, " image: " + galleryIndex);
            scrollToTarget($target);
            var bxSlider = $target.find('.image-slider').data("bxSlider");
            if(bxSlider) {
                bxSlider.goToSlide(galleryIndex);
                bxSlider.stopAuto();
            }
        }

        // define share function
        $("a[data-share]").click(function() {
            // retrieve image ref and social network or share method
            var method = $(this).data("share");
            var imageId = $("#image-share").data("image");
            var a = imageId.split(",");
            var galleryId = a[0]; var galleryIndex = a[1];
            var data = galleryJson[galleryId][galleryIndex];

            // build deep link
            var url = window.location.href.split("#")[0].split("?")[0];
            url = url + "?img=" + imageId;
            var title = data[window.SITE.language].title;
            console.log("URL to share: ", url);

            var socialLink;
            var target = "_blank";
            switch(method) {
                case "facebook":
                    socialLink = "https://www.facebook.com/sharer/sharer.php?u={url}";
                    break;
                case "linkedin":
                    socialLink = "https://www.linkedin.com/shareArticle?mini=true&url={url}&title={title}";
                    break;
                case "twitter":
                    socialLink = "https://twitter.com/home?status={title}%0A{url}";
                    break;
                case "whatsapp":
                    socialLink = "https://api.whatsapp.com/send?text={title}%0A{url}";
                    break;
                case "wechat":
                    break;
                case "email":
                    socialLink = "mailto:?body={title}%0A{url}";
                    target = "_current";
                    break;
            }
            if(socialLink) {
                socialLink = socialLink.replace("{url}", encodeURIComponent(url));
                socialLink = socialLink.replace("{title}", encodeURIComponent(title) );
                window.open(socialLink, target);
            }
            if(method === "copy") {
                // create textfield to copy from
                var imgModal = $("#image-share")[0];
                var el = document.createElement('textarea');
                el.value = url;
                el.contenteditable = true;
                el.readonly = false;
                imgModal.appendChild(el);
                if(isIOS()) {
                    var range = document.createRange();
                    range.selectNodeContents(el);
                    var s = window.getSelection();
                    s.removeAllRanges();
                    s.addRange(range);
                    el.setSelectionRange(0, 999999); // A big number, to cover anything that could be inside the element.
                }
                else {
                    el.select();
                }
                document.execCommand('copy');
                imgModal.removeChild(el);

                // show "copied" tooltip
                $(".copy-tooltip").fadeTo(200, 1);
                setTimeout(function() {
                    $(".copy-tooltip").fadeTo(200, 0);
                }, 1500);
            }
        });
    });


    var slider5 = $('.app-slide').bxSlider({
        mode: 'fade',
        auto: true,
        adaptiveHeight: true,
        speed: 500,
        infiniteLoop: true,
        hideControlOnEnd: true,
        pause: 6000,
        video: false,
        pager: true,
        controls: false,
        stopAutoOnClick: true,
        autoStart: false,
        autoHover: true
    });

   if ( slider5.length > 0 ){
        $(window).scroll(function(){
            if (slider5.isVisible()){
                slider5.startAuto();
            }
        });
    }

    $(".toggle-submenu").on('click', function() {
        $('.mobile-submenu-container').slideToggle(300);
        $('.mobile-submenu-container').toggleClass('submenu-expanded')
    });

    $(".navbar-toggle").on('click', function() {
        $('body').toggleClass('no-scroll');
    });
    $(".sign-up-btn").on('click', function() {
        $('body').removeClass('no-scroll');
    });

    // Smooth Scrolling

    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var $target = $(this.hash);
                $target = $target.length ? $target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if ($target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    scrollToTarget($target);
                }
            }
        });

    if (typeof($('.keep-ar').keepRatio) != "undefined")
        $('.keep-ar').keepRatio({ ratio: 16/9, calculate: 'height' });

});

$(window).scroll(function(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {}
});

$(window).on('beforeunload', function() {
    // $(window).scrollTop(0);
});

/* Move down fullpage button
========================================================= */
//adding the action to the button
$(document).on('click', '.moveDown', function(){
    $.fn.fullpage.moveSectionDown();
});


/*  Go Back Button
========================================================= */

function goBack() {
    window.history.back();
}

/* File Upload
========================================================= */
function uploadFile(){
    var x = document.getElementById("file");
    var txt = "";
    if ('files' in x) {
        if (x.files.length == 0) {
            txt = "No file chosen.";
        } else {
            for (var i = 0; i < x.files.length; i++) {
                var file = x.files[i];
                if ('name' in file) {
                    txt += file.name + "<br>";
                }
            }
        }
    }
    document.getElementById("fileName").innerHTML = txt;
}



/* Character counter for textarea
 ================================================================ */
/*

/* Rotate See More Button
================================================================= */
$( ".morelink" ).click(function() {
    if (  $( this ).css( "transform" ) == 'none' ){
        $(this).css("transform","rotate(45deg)");
        $(this).css("opacity","1");
        $(this).parent().addClass('opened');
    } else {
        $(this).css("transform","" );
        $(this).css("opacity","1");
        $(this).parent().removeClass('opened');
    }
});

/* Scroll to Top
==================================================================== */
$("#scroll").click(function() {
    if (screen.width > 768){
        $('html, body').animate({
            scrollTop: $('#to-content').offset().top -84
        }, 'slow');
    }
    else{
        $('html, body').animate({
            scrollTop: $('#to-content').offset().top -34
        }, 'slow');
    }
});

$(".sub-scroll").on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top -84
        }, 1000);
    }

});

/* Header on scroll
===================================================================== */
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var halfWindowHeight = $(window).height() / 4;

    if ($(this).scrollTop() > 300) { // this refers to window
        $('.banner').addClass('animate');
    } else {
        $('.banner').removeClass('animate');
    }
});

/* Footer visibility
=================================================================== */
$(window).scroll(function() {
    if ($(this).scrollTop() < 500 && screen.width > 768) {
        $("#footer").css({
            'display': 'none'
        });
        //console.log('Footer hidding');
    }
    else {
        $("#footer").css({
            'display': 'block'
        });
        //console.log('Footer showing');
    }
});

/* Team Bio
=================================================================== */

$(".member-bio").click(function () {
    $(this).closest('.member-wrapper').find( ".member-bio-content" ).fadeIn( "slow" );
    $('body').css({
        'overflow': 'hidden'
    });
    if ($(window).width() < 920) {
        $(this).closest('.slick-slider').find( ".slick-arrow" ).fadeOut( "slow" );
    }
});

$(".close").click(function () {
    $(this).closest('.member-wrapper').find( ".member-bio-content" ).fadeOut( "slow" );
    if ($(window).width() < 920) {
        $(this).closest('.slick-slider').find( ".slick-arrow" ).fadeIn( "slow" );
    }
});

$(".bio-wrapper .close").click(function(){
    $('body').css({
        'overflow': 'auto'
    });
});

/* Product Menu
 =================================================================== */
(function() {

    var overMenu = false;
    var overTrigger = false;
    var index = 0;
    // $('.products,div.submit h3').onmouseover = function(){
    //     alert("dsadsa")
    // }
    $(".menu-2-3").hover(function(e){
        $('.navbar-nav .products').each(function () {
            if(e.target.innerHTML == $(this).text()){
                index = $('.navbar-nav .products').index($(this));
                $('.product-menu .sub-pages').hide();
                $('.product-menu .sub-pages').eq(index).show();
            }

        })
    })
    $('.products,div.submenu h3').hover(function (e) {
            $('header').addClass('product-menu-active-lg');
            $('header').removeClass('product-menu-left');
            overTrigger = true;
            $('.navbar-nav .products').each(function () {
                if(e.target.innerHTML == $(this).text()){
                    index = $('.navbar-nav .products').index($(this));
                    $('.product-menu .sub-pages').hide();
                    $('.product-menu .sub-pages').eq(index).show();
                }

            })
        },
        function () {
            // action=setTimeout(function(){
            // }

            overTrigger = false;
            checkHideMenu();
            // $('.product-menu .sub-pages').hide();
            // window.clearTimeout(action);
        });
    $('div.submenu h3').hover(function () {
            $('header').addClass('product-menu-left');
        });

    $('.product-menu').hover(function () {
            overMenu = true;
        },
        function () {
            overMenu = false;
            checkHideMenu();
        });

    function checkHideMenu() {
        setTimeout(function() {
            if(!overMenu && !overTrigger) {
                $('header').removeClass('product-menu-active-lg');
            }
        }, 500);
    }

    $('.navbar-nav .products').click(function () {
            $('header').addClass('product-menu-active-sm');
        });
    $('.product-menu .products').click(function () {
            $('header').removeClass('product-menu-active-sm');
        });
})();

/* Custom Scrollbar
 =================================================================== */
(function($){
    $(window).on("load",function(){
        if (typeof($(".custom-scroll").mCustomScrollbar) != "undefined"){
            $(".custom-scroll").mCustomScrollbar({
                theme: "inset-dark",
                scrollButtons: {enable:true}
            });
        }
    });
})(jQuery);



$.fn.isVisible = function() {
    // Current distance from the top of the page
    var windowScrollTopView = $(window).scrollTop();

    // Current distance from the top of the page, plus the height of the window
    var windowBottomView = windowScrollTopView + $(window).height();

    // Element distance from top
    var elemTop = $(this).offset().top;

    // Element distance from top, plus the height of the element
    var elemBottom = elemTop + $(this).height();

    return ((elemBottom <= windowBottomView) && (elemTop >= windowScrollTopView));
};

// declare global
var slider_array = new Array();

jQuery(document).ready(function($){

    // launch bxslider
    $('.loc-slider').each(function(i){
        slider_array[i] = $(this).bxSlider({controls:false,  auto: false, pagerCustom: '.bx-pager', mode: 'fade', touchEnabled: false,
            speed: 1000, pause: 10000});
    });


    // bind controls on custom controls, and run functions on every slider
    $('.loc-slider-controls a').bind('click', function(e) {
        e.preventDefault();

        if($(this).hasClass('pull-left')) {
            e.preventDefault();
            $.each(slider_array, function(i,elem){
                elem.goToPrevSlide();
            });

        } else if($(this).hasClass('pull-right')) {
            console.log("right");
            e.preventDefault();
            $.each(slider_array, function(i,elem){
                elem.goToNextSlide();
            });
        }

    });

});

// helper for detecting if visualiser should show, or a link to appstores.
function isMobile() {
    return ((/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)));
}

function isIE(){
    if(navigator.userAgent.indexOf('MSIE')!==-1 || navigator.appVersion.indexOf('Trident/') > 0){
    /* Microsoft Internet Explorer detected in. */
    return true;
    }
    return false;
}

function isIOS() {
    return navigator.userAgent.match(/ipad|iphone/i);
}

function isVisualiserSupported(){
    // if its not mobile, and its not IE
    return !isMobile() && !isIE()
}

// basic fullscreen API wrapper
document.fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.documentElement.webkitRequestFullScreen;
function requestFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    }
}
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}

(function() {
     
    $(document).on('fullscreenchange', handleFullscreenChange);
    $(document).on('webkitfullscreenchange', handleFullscreenChange);
    $(document).on('mozfullscreenchange', handleFullscreenChange);
    $(document).on('MSFullscreenChange', handleFullscreenChange);

    function handleFullscreenChange() {
        var fullscreenElem = document.webkitFullscreenElement || document.msFullscreenElement || document.mozFullScreenElement || document.fullscreenElement;
        if(fullscreenElem) $(fullscreenElem).addClass('fullscreen');
        var $gallery = $('.gallery-container.fullscreen');
        if(!fullscreenElem) $('.fullscreen').removeClass('fullscreen');
        
        // are we dealing with a fullscreen gallery element?
        if(!$gallery.length) return;
    
        if(fullscreenElem) {
            // gallery going fullscreen - force element to honour image aspect ratio
            var aspect = 16 / 9;
            var sw = window.screen.width;
            var sh = window.screen.height;
            $gallery.css('width', Math.min(sw, sh * aspect) + 'px');
            $gallery.css('height', Math.min(sh, sw / aspect) + 'px');
        }
        else {
            // restore original gallery width / height
            $gallery.css("width", "");
            $gallery.css("height", "");
        }
        // redraw sliders
        $('.image-slider').each(function() {
            $(this).data("bxSlider").redrawSlider();
            if($.contains($gallery[0], this)) {
                $(this).data("bxSlider").stopAuto();
            }
        });
    }
})();

function getURLParameter(param) {
    if (!window.location.search) {
        return;
    }
    var m = new RegExp(param + '=([^&]*)').exec(window.location.search.substring(1));
    if (!m) {
        return;
    }
    return decodeURIComponent(m[1]);
}

function scrollToTarget($target) {
    $('html, body').animate({
        scrollTop: $target.offset().top - 100
    }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $($target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
            return false;
        } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
        };
    });
}