var ldCountdown = $('.finalDayCountdown');
var lwCountdown = $('.lastWeekCountdown');
var dCountdown = $('.dailyCountdown');
var LasVegas = moment.tz("2018-01-07 15:00", "America/Los_Angeles").utc();
// conversion
var localTimezone = moment.tz.guess();
var localTime = moment.tz(localTimezone);
var localTimeOffset = localTime.utcOffset();

// the converted time from Las Vegas venue
var convertedTime = LasVegas.utcOffset(localTimeOffset).format('YYYY-MM-DD HH:mm');
var eventDate = moment(convertedTime, 'YYYY-MM_DD HH:mm');
var subEvent = moment(convertedTime, 'YYYY-MM_DD HH:mm');
var subEvent1 = moment(convertedTime, 'YYYY-MM_DD HH:mm');
var oneWeekDate = subEvent.subtract(7, 'days').format('YYYY-MM-DD HH:mm');
var oneDayDate = subEvent1.subtract(1, 'days').format('YYYY-MM-DD HH:mm');
var todayDate = moment().format('YYYY-MM-DD HH:mm');

var result1 = eventDate.diff(oneWeekDate, 'hours');
var result2 = eventDate.diff(oneDayDate, 'hours');
var result3 = eventDate.diff(todayDate, 'hours');
var result4 = eventDate.diff(todayDate, 'minutes');

var dateAttribute = $('.countdown');
dateAttribute.data('date', convertedTime);
function circularCountdown() {
    if (result4 <= 0){
        $('.during-countdown').addClass('hidden');
        $('.endof-countdown').removeClass('hidden');
    } else if(result3 <= result2){
        // Last day Countdown
        $('.countdown').addClass('hidden');
        ldCountdown.removeClass('hidden');
        ldCountdown.TimeCircles({
            "bg_width": 1,
            "fg_width": 0.013333333333333334,
            "text_size": 0.06,
            "count_past_zero": false,
            "circle_bg_color": "rgba(255,255,255, 0.5)",
            "time":
                {
                    "Days": {
                        "show": false,
                        "color": "#fff",
                        "text": "天"
                    },
                    "Hours": {
                        "show": true,
                        "color": "#fff",
                        "text": "时"
                    },
                    "Minutes": {
                        "show": true,
                        "color": "#fff",
                        "text": "分"
                    },
                    "Seconds": {
                        "show": true,
                        "color": "#fff",
                        "text": "秒"
                    }
                }
        }).addListener(function(unit,value,total) {
            if (total == 0) {
                ldCountdown.TimeCircles().end().fadeOut();
                $('.during-countdown').fadeOut();
                $('.endof-countdown').removeClass('hidden');
            } else {
            }
        }, 'all');
    } else if(result3 < result1) {
        // Last Week Countdown
        $('.countdown').addClass('hidden');
        lwCountdown.removeClass('hidden');
        lwCountdown.TimeCircles({
            "bg_width": 1,
            "fg_width": 0.013333333333333334,
            "text_size": 0.06,
            "count_past_zero": false,
            "total_duration": 604800,
            "circle_bg_color": "rgba(255,255,255, 0.5)",
            "time":
                {
                    "Days": {
                        "show": true,
                        "color": "#fff",
                        "text": "天"
                    },
                    "Hours": {
                        "show": true,
                        "color": "#fff",
                        "text": "时"
                    },
                    "Minutes": {
                        "show": false,
                        "color": "#fff",
                        "text": "分"
                    },
                    "Seconds": {
                        "show": false,
                        "color": "#fff",
                        "text": "秒"
                    }
                }
        });
    } else if(result3 == 0){

    }  else {
        // Days left Countdown
        $('.countdown').addClass('hidden');
        dCountdown.removeClass('hidden');
        dCountdown.TimeCircles({
            "bg_width": 1,
            "fg_width": 0.013333333333333334,
            "text_size": 0.06,
            "count_past_zero": false,
            "total_duration": 3283200,
            "circle_bg_color": "rgba(255,255,255, 0.5)",
            "time":
                {
                    "Days": {
                        "show": true,
                        "color": "#fff",
                        "text": "天"
                    },
                    "Hours": {
                        "show": false,
                        "color": "#fff",
                        "text": "时"
                    },
                    "Minutes": {
                        "show": false,
                        "color": "#fff",
                        "text": "分"
                    },
                    "Seconds": {
                        "show": false,
                        "color": "#fff",
                        "text": "秒"
                    }
                }
        });
    }
}
circularCountdown();
setInterval(circularCountdown, 15000);