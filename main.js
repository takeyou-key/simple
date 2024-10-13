'use strict';

$(function () {
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

//アコーディオンをクリックした時の動作
$('.menu-title').on('click', function() {//タイトル要素をクリックしたら
	var findElm = $(this).next(".sub-menu-title");//直後のアコーディオンを行うエリアを取得し
	$(findElm).slideToggle();//アコーディオンの上下動作
    
	if($(this).hasClass('close')){//タイトル要素にクラス名closeがあれば
		$(this).removeClass('close');//クラス名を除去し
	}else{//それ以外は
		$(this).addClass('close');//クラス名closeを付与
	}
});
