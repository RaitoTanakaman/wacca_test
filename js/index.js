
    var windowWidth = $(window).width();
    var windowTab = 768;
    var windowSp = 480;
    console.log(windowWidth)
    if ((windowWidth <= windowTab) && (windowSp < windowWidth)) {
    //横幅768px以下（スマホ）に適用させるJavaScriptを記述
    } else if(windowWidth <= windowSp) {
    //横幅768px以上（PC、タブレット）に適用させるJavaScriptを記述
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