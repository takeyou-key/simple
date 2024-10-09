'use strict';

$(document).ready(function () {
    $('.toggle-btn').click(function () {
        $('#header').toggleClass('open')
    });
    $('#nav').click(function () {
        $('#header').removeClass('open')
    });
    $('#nav a').click(function () {
        $('#header').removeClass('open')
    });
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 1000) { // 100pxスクロールしていたら上に戻るボタンを表示
        $(".to-top").fadeIn();
    } else {
        $(".to-top").fadeOut();
    }
});
$(".to-top").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 800); // 800msかけて上に戻る
});
