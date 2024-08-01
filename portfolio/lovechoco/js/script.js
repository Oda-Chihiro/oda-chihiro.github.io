'use strict';

// ハンバーガーメニュー
const hamburgerBtn = document.querySelector('.hamburger-btn')
const slideMenu = document.querySelector('.slide-menu')

hamburgerBtn.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('active');
    slideMenu.classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('dark');
})




// トップページスライド

const mainSlideImg_src = [
    "images/top-slide01.jpg",
    "images/top-slide02.jpg",
    "images/top-slide03.jpg",
    "images/top-slide04.jpg",
    "images/top-slide05.jpg",
];

const mainSlideItem = document.querySelector("#main-slide__item");

let i = 1;

function slide_time() {
    if (i === mainSlideImg_src.length - 1) {
        i = 0;
    } else {
        i++;
    }
    mainSlideItem.src = mainSlideImg_src[i];

    const keyframes = {
        opacity: [0, 1, 1, 0],
        offset: [0, 0.1, 0.9],
    };

    mainSlideItem.animate(keyframes, 6000)
}

setInterval(slide_time, 6000);


// const slideImg = [
//     {
//         image: '01.jpg',
//         alt: '3つずつ並んだ、3列の直方体のチョコレート'
//     },
//     {
//         image: '02.jpg',
//         alt: 'イチゴのようなかたちのチョコレートが白いカップに包まれ、赤い箱に入っている'
//     },
//     {
//         image: '03.jpg',
//         alt: '細長い紫の箱に5つの丸いチョコレートが入っている'
//     },
//     {
//         image: '04.jpg',
//         alt: '黒い背景の中、色とりどりのマカロンが並んでいる'
//     },
//     {
//         image: '05.jpg',
//         alt: 'クリスマスの雰囲気の中、いくつものチョコレートが並んでいる'
//     },
// ];

// const mainSlide = document.querySelector('.main-slide');

// mainSlide.addEventListener('load', () => {
//     setInterval( () => {
//         for (let i = 0; i < slideImg.length; i++) {

//             document.addEventListener('DOMContentLoaded', () => {
//                 mainSlide.insertAdjacentHTML('beforeend', `<li><img src="images/top-slide${slideImg[i].image}" alt="${slideImg[i].alt}"></li>`)

//             });
//         }
//     },500 );
// });



//スクロールしたら商品一覧の画像がふわっと出てくる

//監視対象が範囲内に現れたら、{}内を実行
const productLists = (e, obs) => {
    const productItem = document.querySelectorAll('.product__item');

    for (let i = 0; i < productItem.length; i++) {

        const keyframes = {
            opacity: [0, 1],
        };
        const options = {
            duration: 800,
            delay: i * 500,
            fill: 'forwards',
        };

        productItem[i].animate(keyframes, options);
    };
    obs.unobserve(e[0].target);
};

//監視ロボットの設定
const productListsObserver = new IntersectionObserver(productLists);

//#product__tab-listsを監視
productListsObserver.observe(document.querySelector('#product__tab-lists'));




// 商品一覧のタブ切り替え

const tabs = document.querySelectorAll('.product__tab-link');
const sections = document.querySelectorAll('.product__wrapper');

//タブの数だけイベントを準備
tabs.forEach( (data) => {
    //クリックイベント
    data.addEventListener('click', (e) => {
        //全部のタブからクラス名の.openを外す（もう一回繰り返しを使う）
        tabs.forEach((data2) => {
            data2.classList.remove('open');
        });
        //クリックしたタブにだけクラス名の.openをつける
        e.target.classList.add('open');

        //すべてのsectionから.openを外す
        sections.forEach((data) => {
            data.classList.remove('open');
        });

        //クリックしたタブの相方のセクションだけ.openをつける
        //data属性の取得
        const tabData = e.target.dataset.tab;
        
        //.openをつける
        document.querySelector(`#${tabData}`).classList.add('open');
    });
} );