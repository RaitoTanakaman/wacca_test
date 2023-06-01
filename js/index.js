
    var windowWidth = $(window).width();
    var windowTab = 768;
    var windowSp = 480;
    console.log(windowWidth)
    if ((windowWidth <= windowTab) && (windowSp < windowWidth)) {
    //横幅768px以下 481px以上に適用させるJavaScriptを記述
    } else if(windowWidth <= windowSp) {
    //横幅480px 以下に適用させるJavaScriptを記述
    // home works slider script start
    $(document).ready(function(){
        $('.works__slider--top').slick({
            autoplay: true,
            autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
            speed: 7000,
            cssEase: "linear",
            slidesToShow: 1, // 表示するスライドの数
            swipe: false, // 操作による切り替えはさせない
            arrows: false, // 矢印非表示
            pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
            pauseOnHover: false,
        });
        $('.works__slider--under').slick({
            autoplay: true,
            autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
            speed: 7000,
            cssEase: "linear",
            slidesToShow: 1, // 表示するスライドの数
            swipe: false, // 操作による切り替えはさせない
            arrows: false, // 矢印非表示
            pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
            pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
            rtl: true, // スライダーを左から右に流す（逆向き）
        });
    });
    //end
    $('.header__title h1').html('<h1>まるでSNSのような、<br><span>"Wacca"</span> をつくる。</h1>');
    $('.aboutus__content').html('<h3>まるでSNSのような、<br><span>"Wacca"</span> をつくる。</h3><p>私たちWacca(輪っか)は、2023年に設立しました。昨今では、SNSでたくさんの出会いや繋がりができますその出会いはとても素晴らしく、ビジネスの幅を広げるだけでなく、自身や企業が新たな世界を作るツールとなっています。私たちは、出会いや繋がりを"Wacca"(輪っか)と呼んでいます。WebサイトをSNSのようにもっと多くの人や世界を繋ぐツールにしたいと考えています。SNSのように手軽に扱えることができ、新たな出会いを作るWebサイトを私たちが作ります。</p>');
    } else {
        // home works slider script start
    $(document).ready(function(){
        $('.works__slider--top').slick({
            autoplay: true,
            autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
            speed: 7000,
            cssEase: "linear",
            slidesToShow: 2.5, // 表示するスライドの数
            swipe: false, // 操作による切り替えはさせない
            arrows: false, // 矢印非表示
            pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
            pauseOnHover: false,
        });
        $('.works__slider--under').slick({
            autoplay: true,
            autoplaySpeed: 0, // 自動再生のスライド切り替えまでの時間を設定
            speed: 7000,
            cssEase: "linear",
            slidesToShow: 2.5, // 表示するスライドの数
            swipe: false, // 操作による切り替えはさせない
            arrows: false, // 矢印非表示
            pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
            pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
            rtl: true, // スライダーを左から右に流す（逆向き）
        });
    });
    //end
    }




// under information category menu script start 
$('.category__list').on('click', function() {
    $('.category__nav ul').css('display', 'flex');
});
// end 




// sidemenu script start 
$('.side__menu').on('click', function() {
    $('.nav__menu--modal').css('display', 'flex');
    $('body').css('overflow', 'hidden');
});

$('.fa-solid').on('click', function() {
    $('.nav__menu--modal').css('display', 'none');
    $('body').css('overflow', '');
})
// end 


// hamburger script start 
$('.hamburger__icon').on('click', function() {
    $('.nav__menu--modal').css('display', 'flex');
});
// end 
