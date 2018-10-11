$(document).ready(function () {
    var bannerPlayer = videojs('vision-banner', {
        controlBar: {
        children: [
            'playToggle',
            'progressControl',
            'currentTimeDisplay',
            'volumeMenuButton',
            'FullscreenToggle'
        ]
    },
    nativeControlsForTouch: true
});
$('#banner .video-js').prepend("<button class=\"close video-close show\"></button>");
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
    // nothing here for the time being
} else {
        bannerPlayer.on('play', function () {
            $('header').css({'pointer-events':'none','opacity':0});
        });
    }
    $('#banner.video-section .mask-wrapper').on('click', function (e) {
        e.preventDefault();
        $(this).fadeOut(500);
        bannerPlayer.play();
        $('.scroll-to').fadeOut(500);
    });

    $('#banner button.video-close').on('click', function () {
        $('header').css({'pointer-events':'','opacity':1});
        $(this).hide();
        $('#banner.video-section .mask-wrapper').show();
        bannerPlayer.load();
        $('.scroll-to').fadeIn(500);
        //            debugger;
        bannerPlayer.exitFullscreen();
    });

    var interval = 1;

    function delayCheck() {
        if (interval == 5) {
            $('#banner .video-close').removeClass('show');
            interval = 1;
        }
        interval = interval + 1;
    }

    $('#banner div.video-js').bind('mousemove keypress', function () {
        $('#banner .video-close').addClass('show');
        interval = 1;

        // reset the delay timer
        clearInterval(_delay);
        _delay = setInterval(delayCheck, 500);
    });
    // starts delay timer when page loads
    _delay = setInterval(delayCheck, 500);
});