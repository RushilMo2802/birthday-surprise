$(window).on("load", function () {
    $(".loading").fadeOut("fast");
    $(".container").fadeIn("fast");
});

$(document).ready(function () {
    var vw;

    $(window).resize(function () {
        vw = $(window).width() / 2;
        positionBalloons(vw);
    });

    function positionBalloons(vw) {
        $('#b11').animate({ top: 240, left: vw - 350 }, 500);
        $('#b22').animate({ top: 240, left: vw - 250 }, 500);
        $('#b33').animate({ top: 240, left: vw - 150 }, 500);
        $('#b44').animate({ top: 240, left: vw - 50 }, 500);
        $('#b55').animate({ top: 240, left: vw + 50 }, 500);
        $('#b66').animate({ top: 240, left: vw + 150 }, 500);
        $('#b77').animate({ top: 240, left: vw + 250 }, 500);
    }

    $('#turn_on').click(function () {
        $('.bulb').addClass('bulb-glow');
        $('body').addClass('peach');
        $(this).fadeOut('slow').delay(5000).promise().done(function () {
            $('#play').fadeIn('slow');
        });
    });

    $('#play').click(function () {
        $('.song')[0].play();
        $('.bulb').addClass('bulb-glow-after');
        $('body').addClass('peach-after');
        $(this).fadeOut('slow').delay(6000).promise().done(function () {
            $('#bannar_coming').fadeIn('slow');
        });
    });

    $('#bannar_coming').click(function () {
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut('slow').delay(6000).promise().done(function () {
            $('#balloons_flying').fadeIn('slow');
        });
    });

    function animateBalloons(selector) {
        var randLeft = 1000 * Math.random();
        var randTop = 500 * Math.random();
        $(selector).animate({ left: randLeft, bottom: randTop }, 10000, function () {
            animateBalloons(selector);
        });
    }

    $('#balloons_flying').click(function () {
        $('.balloon-border').animate({ top: -500 }, 8000);
        $('.balloons').addClass('balloons-rotate');
        ['#b1', '#b2', '#b3', '#b4', '#b5', '#b6', '#b7'].forEach(animateBalloons);

        $(this).fadeOut('slow').delay(5000).promise().done(function () {
            $('#cake_fadein').fadeIn('slow');
        });
    });

    $('#cake_fadein').click(function () {
        $('.cake').fadeIn('slow');
        $(this).fadeOut('slow').delay(3000).promise().done(function () {
            $('#light_candle').fadeIn('slow');
        });
    });

    $('#light_candle').click(function () {
        $('.fuego').fadeIn('slow');
        $(this).fadeOut('slow').promise().done(function () {
            $('#wish_message').fadeIn('slow');
        });
    });

    $('#wish_message').click(function () {
        vw = $(window).width() / 2;
        $('.balloons').css('opacity', '0.9');
        positionBalloons(vw);
        $('.balloons h2').fadeIn(3000);

        $(this).fadeOut('slow').delay(3000).promise().done(function () {
            $('#story').fadeIn('slow');
        });
    });

    $('#story').click(function () {
        $(this).fadeOut('slow');
        $('.cake').fadeOut('fast').promise().done(function () {
            $('.message').fadeIn('slow');
        });

        function msgLoop(i) {
            $("p:nth-child(" + i + ")").fadeOut('slow').delay(800).promise().done(function () {
                i++;
                $("p:nth-child(" + i + ")").fadeIn('slow').delay(1000);
                if (i < 50) {
                    msgLoop(i);
                } else {
                    $("p:nth-child(49)").fadeOut('slow').promise().done(function () {
                        $('.cake').fadeIn('fast');
                    });
                }
            });
        }

        msgLoop(0);
    });
});
