'use strict';

/* =====header===== */
const headerCounseling = document.querySelector('#header__counseling');

//300pxスクロールしたらheaderが出てくる
window.addEventListener('scroll', () => {
    if (window.scrollY >= 300) {
        headerCounseling.classList.add('active');
    } else {
        headerCounseling.classList.remove('active');
    };

});


/* =====トップの文字 左から右に===== */
// 動きのきっかけの起点となるアニメーションの名前を定義
function BgFadeAnime() {

    // 背景色が伸びて出現（左から右）
    $('.bgLRextendTrigger').each(function () { //bgLRextendTriggerというクラス名が
        var elemPos = $(this).offset().top - 50;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
        } else {
            $(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
        }
    });

    // 文字列を囲う子要素
    $('.bgappearTrigger').each(function () { //bgappearTriggerというクラス名が
        var elemPos = $(this).offset().top - 50;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('bgappear');// 画面内に入ったらbgappearというクラス名を追記
        } else {
            $(this).removeClass('bgappear');// 画面外に出たらbgappearというクラス名を外す
        }
    });
}

// 画面をスクロールしたら動かしたい場合の記述
$(window).scroll(function () {
    BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
});

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    BgFadeAnime();/* アニメーション用の関数を呼ぶ*/
});




/* =====fadeUp ふわっと出てくる===== */
//監視対象.fadeUpContentsが画面内に現れたら実行
const showFadeUp = ( e,obs ) => {
    if( e[0].isIntersecting ){
        e[0].target.classList.add( 'fadeUp' );

        obs.unobserve( e[0].target );
    };
};

//監視ロボットの設定
const fadeUpObserver = new IntersectionObserver( showFadeUp );

//.fadeUpContentsを監視するよう指示
const fadeUpContents = document.querySelectorAll( '.fadeUpContents' );

for( let i = 0; i < fadeUpContents.length; i++ ){
    fadeUpObserver.observe( fadeUpContents[i] );
};






/* =====trainerのタブ切り替え===== */
const switchingTabs = document.querySelectorAll('.trainer__select__btn');

const switchingContents = document.querySelectorAll('.trainer-staff__div');

// タブボタンにクリックイベントを追加
//タブの数だけイベントを準備
switchingTabs.forEach((data) => {
    //クリックイベント
    data.addEventListener('click', (e) => {
        //if文だと条件付けが大変なので↓
        //全部のタブからクラス名の.selectを外す（もう一回繰り返しを使う）
        switchingTabs.forEach((data2) => { //dataのままでもいける わかりづらいので2つけただけ
            data2.classList.remove('select');
        });
        //クリックしたタブにだけクラス名の.selectをつける
        data.classList.add('select');

        //すべてのswitchingContentsから.openを外す
        switchingContents.forEach((data) => {
            data.classList.remove('open');
        });

        //クリックしたタブの相方のセクションだけ.openをつける
        //data属性の取得
        const tabData = e.target.dataset.tab;
        console.log(`#${tabData}`);
        //.openをつける
        document.querySelector(`#${tabData}`).classList.add('open');

    });
});



/* =====swiper スタジオ===== */
const swiper = new Swiper(".swiper", {
    // ページネーション
    pagination: {
        el: ".swiper-pagination"
    },
    // ナビボタン
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});



/* =====priceの右矢印をスクロールで消す=====*/
$('.price__wrapper').scroll(function() {
    if($(this).scrollLeft() > 20){
        $('.price__slide').fadeOut();
    }
  });


/* ===== よくある質問 アコーディオンパネル ===== */
$(function(){
    $( '.faq__dt' ).click( function(){
        $(this).next().slideToggle();
        $(this).toggleClass("open");
    } )
});



/* =====   ===== */