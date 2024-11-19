$(function () {


    const tl = gsap.timeline();

    tl
        .from('.intro .tit .top', {
            x: -200,
            opacity: 0,
            duration: 1.2,
        })
        .from('.intro .tit .middle', {
            x: -200,
            opacity: 0,
            duration: 1.2,
        })
        .from('.intro .a ', {
            width: 0,
            opacity: 0,
        })
        .from('.intro .b ', {
            width: 0,
            opacity: 0,
        })
        .from('.intro .tit .bottom', {
            x: -200,
            opacity: 0,
            duration: 1,
        })
        .from('.intro .stars', {
            opacity: 0,
            duration: 1.2,
        })


    $('#content').fullpage({
        anchors: ['intro', 'pf01', 'pf02', 'pf03', 'pf04', 'pf05', 'training', 'profile'],
        responsiveWidth: 768,
        onLeave: function (idx, nidx, dir) {
            console.log(idx, nidx, dir);
            $('#header .gnb li').eq(nidx - 1).addClass('on').siblings().removeClass('on');
            $('.section').eq(nidx - 1).addClass('on').siblings().removeClass('on');

            if (nidx == 1) {
                tl.restart();
            }

            if (nidx == 1) {
                $('#header .gnb').removeClass('on')
            } else {
                $('#header .gnb').addClass('on')
            }
        }
    });


    $('#header .menu').on('click', function () {
        $(this).toggleClass('on');
        $('#header .cover').toggleClass('on');
    });


    $('#header .cover a').on('click', function () {
        $('#header .cover').removeClass('on');
        $('#header .menu').removeClass('on');
    });


    $('#header .cover').on('wheel', function (e) {
        e.stopPropagation();
    });

    const desc = new Swiper(".profile .desc", {
        direction: "vertical",
        loop: true,
        autoplay: {
            delay: 1700,
            disableOnInteraction: false
        },
    });

});

