'use strict';

// -------------------------------------------
//ハンバーガー
// -------------------------------------------
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

// -------------------------------------------
//ローディング
// -------------------------------------------
var stroke;
stroke = new Vivus('mask', {//アニメーションをするIDの指定
    start: 'manual',//自動再生をせずスタートをマニュアルに
    type: 'scenario-sync',// アニメーションのタイプを設定
    duration: 12,//アニメーションの時間設定。数字が小さくなるほど速い
    forceRender: false,//パスが更新された場合に再レンダリングさせない
    animTimingFunction: Vivus.EASE,//動きの加速減速設定
},
    function () {
        $("#mask").attr("class", "done");//描画が終わったらdoneというクラスを追加
    }
);

$(window).on('load', function () {
    $("#splash").delay(3000).fadeOut('slow');//ローディング画面を3秒（3000ms）待機してからフェイドアウト
    $("#splash_logo").delay(3000).fadeOut('slow');//ロゴを3秒（3000ms）待機してからフェイドアウト
    stroke.play();//SVGアニメーションの実行
});

// -------------------------------------------
//to-top
// -------------------------------------------
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

// アコーディオンのクリック動作
$('.menu-title').on('click', function (e) {
    e.stopPropagation(); // 他のクリックイベントが発火しないように

    var $this = $(this); // クリックされたタイトル要素
    var findElm = $this.next(".sub-menu-title"); // クリックされたタイトル要素の直後のアコーディオンエリア

    // 他のアコーディオンを閉じて選択したブロックを開く
    $('.sub-menu-title').not(findElm).slideUp(); // 他の開いているブロックを閉じる
    findElm.slideToggle(); // 選択したブロックを開く

    // タイトル要素にクラス名 'close' の管理
    $('.menu-title').not($this).removeClass('close'); // 他のタイトル要素から 'close' クラスを削除
    $this.toggleClass('close'); // クリックされたタイトル要素に 'close' クラスを切り替え
});

// ページ内のどこか他の場所がクリックされたときに全てのアコーディオンを閉じる
$(document).on('click', function () {
    $('.sub-menu-title').slideUp(); // 全てのアコーディオンを閉じる
    $('.menu-title').removeClass('close'); // 全ての 'close' クラスを削除
});

// -------------------------------------------
//スライダー
// -------------------------------------------
$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        dots: true,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});

// -------------------------------------------
// ヘッダーON/OFF
// -------------------------------------------
let lastScrollPosition = 0; // 前回のスクロール位置を記録
const nav = document.querySelector('#nav');

window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition) {
        // 上にスクロールした場合
        nav.style.opacity = '0';
    } else {
        // 下にスクロールした場合
        nav.style.opacity = '1';
    }

    // 現在のスクロール位置を保存
    lastScrollPosition = currentScrollPosition;
});

document.addEventListener("DOMContentLoaded", function () {
    // 要素ごとの設定を定義
    const animations = [
        { selector: ".sec-title", animationClass: "fadeLeft" },
        { selector: ".category-secTitle-Bg", animationClass: "fadeRight" },
        { selector: ".concept-secTitle-bg", animationClass: "fadeLeft" },
        { selector: ".categoryMenu", animationClass: "visible" },
        { selector: ".octagon-btn", animationClass: "fadeTop" },
        { selector: ".site-title", animationClass: "fadeLeft" },
        { selector: ".container", animationClass: "fadeIn" },
        { selector: ".right-info", animationClass: "fadeRight" },
        { selector: ".concept-text", animationClass: "fadeRight" },
        { selector: ".left-top-info", animationClass: "fadeLeft" },
        { selector: ".left-bottom-info", animationClass: "fadeLeft" },
        { selector: ".footer-title", animationClass: "fadeIn" }
    ];

    // 共通のIntersectionObserverを定義
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animationClass = entry.target.getAttribute("data-animation-class");
                entry.target.classList.add("visible", animationClass);
                // observer.unobserve(entry.target);
                // 一度だけアニメーションさせる場合
            } else {
                const animationClass = entry.target.getAttribute("data-animation-class");
                entry.target.classList.remove("visible", animationClass);
            }
        });
    }, { threshold: 0.1 });

    // 各設定に基づいて監視を開始
    animations.forEach(({ selector, animationClass }) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            element.setAttribute("data-animation-class", animationClass);
            observer.observe(element);
        });
    });
});
