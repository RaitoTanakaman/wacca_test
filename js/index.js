
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
    $(`.flow__circle, .flow__arrow`).css('transform', 'translateY(-1rem)');
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
    $.each($('.category__nav ul li a'), function(i, v) {
        setTimeout(() => {
            $(v).addClass('fadein__high');
        }, 200*i);
    })
    
});
// end 




// sidemenu script start 
$('.side__menu').on('click', function() {
    $('.nav__menu--modal').addClass('fadein__normal');
    $('body').css('overflow', 'hidden');

    $.each($('.modal__menu li a'), function(i, v) {
        setTimeout(() => {
            setTimeout(() => {
                $(v).addClass('fadein__high');
            }, 200*i);
        }, 1000);
    });
});


$('.fa-solid').on('click', function() {
    $('body').css('overflow', '');

    $('.nav__menu--modal').removeClass('fadein__normal');
    $('.modal__menu li a').removeClass('fadein__high');



})
// end 


// hamburger script start 
$('.hamburger__icon').on('click', function() {
    $('.nav__menu--modal').addClass('fadein__normal');
    $('body').css('overflow', 'hidden');
    $.each($('.modal__menu li a'), function(i, v) {
        setTimeout(() => {
            setTimeout(() => {
                $(v).addClass('fadein__high');
            }, 200*i);
            setTimeout(() =>{
                $('.close__sp').addClass('fadein__normal');
            }, 1400)
        }, 1000);
    });
});
// end 

// sidemenu animation 




//hover action disable
var touch = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

if(touch) {
  try {
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
      if (!styleSheet.rules) continue;

      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;

        if (styleSheet.rules[ri].selectorText.match(':hover')) {
          styleSheet.deleteRule(ri);
        }
      }
    }
  } catch (ex) {}
}
//end





// fade in animation script 
$(function() {
    setTimeout(() => {
        $('.header__title h1').addClass('fadein__high');
        $(`.u-information__section .section__title,
        .u-aboutus__section .section__title,
        .u-service__section .section__title,
        .u-contact__section .section__title,
        .u-works__section .section__title,
        .contact__tips,
        .form__box`).addClass('fadein__high');

        setTimeout(() => {
            $('.logo__box').addClass('fadein__normal');
            $('.header__container img').addClass('fadein__normal');
            $('.nav__menu a').each(function(k,v) {
                setTimeout(() => {
                    $(this).addClass('fadein__high');
        
                }, 200*k);
        
            });
        },1000);

        setTimeout(() => {
            
            $('.header__title .title__english').addClass('fadein__normal');
        }, 200);

        
        
    }, 800);

    setTimeout(() => {
        $('#circular__box').css('opacity', '1');
    }, 2800);
});


$(function() {
    var scroll;
    var winH = $(window).height() - 100;
    let array = [
    '.information__section .section__title',
    '.article__box article',
    '.information__section .more__btn a',
    '.aboutus__bg',
    '.aboutus__bg--title .section__title',
    '.aboutus__bg--desc p',
    '.aboutus__bg--desc .more__btn a',
    '.service__section .section__title',
    '.service__card',
    '.service__section .more__btn a',
    '.works__section .section__title',
    '.works__box',
    '.works__section .more__btn a',
    '.contact__section',
    '.category__nav p',
    '.aboutus__top img',
    '.aboutus__content',
    '.member__section .under__title--second',
    '.member__card img',
    '.member__card--content',
    '.company__section .under__title--second',
    '.company__section table',
    '#service__first',
    '#service__second',
    '#service__third',
    '.flow__section .under__title--second',
    '.flow__circle',
    '.flow__arrow',
    '.flow__section .flow__tips',
    '.u-works__box article',

    ]
    
    $.each(array, function(index, value) {
    
        if($(value).length > 1) {
            var objTop = $(value).offset().top;
            $(window).on('scroll', function(){
                scroll = $(window).scrollTop();
                if(scroll >= objTop - winH){
                //ここに処理
                $(value).each(function(k,v) {
                    if($(v).attr('class') == 'flow__arrow') {
                        setTimeout(() => {
                            setTimeout(() => {
                                $(this).addClass('fadein__high');
                            }, 800*k);
                        }, 400)
                    } else if($(v).attr('class') == 'flow__circle') {
                        setTimeout(() => {
                            $(this).addClass('fadein__high');
                        }, 800*k);
                    } else {
                        setTimeout(() => {
                            $(this).addClass('fadein__high');
                        }, 400*k);
                    }

                });
                
            }
            });
    
        } else {    
            console.log($(value).length, ':', value)
            if ($(value).length) {
                var objTop = $(value).offset().top;
                $(window).on('scroll', function(){
                    scroll = $(window).scrollTop();
                    if(scroll >= objTop - winH){
        
                        $(value).addClass('fadein__normal');
                    }
                });
            }
            
        }
    });

    $(function() {
        var objTop = $('.service__box').offset().top;
        $(window).on('scroll', function(){
            scroll = $(window).scrollTop();
            if(scroll >= objTop - winH){
            //ここに処理
            $('.border__slide--top').html(`.service__box:before {animation: borderSlideX 1s linear forwards;}}`);
            $('.border__slide--under').html(`.service__box:after {animation: borderSlideX 1s linear forwards;}}`);
            $('.side__line--left').addClass('add__animation');
            $('.side__line--right').addClass('add__animation');
        }
        });
    });
});




    









// end 