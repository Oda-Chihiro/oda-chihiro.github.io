'use strict';

//ハンバーガーメニュー
const hamburger = document.querySelector('.hamburger');
const slideMenu = document.querySelector('.slide-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    slideMenu.classList.toggle('active');
});


//スクロールで背景白っぽく
//実行する動作
const info = (entries, obs) => {

  if( entries[0].isIntersecting ){
    console.log('message');

    entries[0].target.animate(
      {
          opacity: [0, 1],
      },
      {
          duration: 2000,
          easing: 'ease',
          fill: 'both',
      }
  );

    //監視を停止する
    obs.unobserve(entries[0].target);
};

};

//監視ロボットの作成
const infoObserver = new IntersectionObserver(info);

// #info-secondを監視するよう指示
infoObserver.observe(document.querySelector('#info'));