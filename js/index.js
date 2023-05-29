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