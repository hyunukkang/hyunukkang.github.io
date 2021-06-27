

$(function(){
    // header
    // header scroll event
    var $header = $('#header');
    var $toggleSpan = $(".toggle span");
    var $gnb = $('.gnb');
    var $gnbItem = $('.gnb__item')
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        var headerHeight = $('#header').outerHeight();
        var homeHeight = $('#home').outerHeight();
        console.log(homeHeight)
        if( scrollTop > headerHeight ){
            $header.addClass('fixed');
            $toggleSpan.addClass('fixed');
        }else{
            $header.removeClass('fixed');
            $toggleSpan.removeClass('fixed');
        }


        console.log(scrollTop);
        console.log(homeHeight);

        if(scrollTop >= homeHeight ){
            $header.addClass('color');
            $toggleSpan.addClass('color');
            $gnb.addClass('color');
        }else{
            $header.removeClass('color');
            $toggleSpan.removeClass('color');
            $gnb.removeClass('color');
        }
    })
    // gnb ele
    var $toggle = $('.toggle');
    var $gnbItem = $('.gnb__item');
    $($toggle).click(function(){
        $(this).toggleClass('active');
        $($gnbItem).toggleClass('visible')
    })
    // gnb__item window scroll
    var $gnbMenu = $('.gnb__menu');
    $gnbMenu.click(function(){
        var target = $(this).attr('data-target');
        var $target = $(target);
        var distance = $target.offset().top;
        $('html, body').animate({scrollTop: distance})
    })
    var $homeScrollImg = $('.home__scroll__img');
    $homeScrollImg.click(function(){
        var target = $(this).attr('data-target');
        var $target = $(target);
        var distance = $target.offset().top;
        $('html, body').animate({scrollTop: distance})
    })
    // >>>>>>>>>>>>>>>>>>> tab
    var $subTitleTab = $('.sub__title__tab');
    var $aboutKeyword = $('.about__keyword');
    $aboutKeyword.eq(1).hide();
    $subTitleTab.click(function(e){
        e.preventDefault();
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        var idx = $(this).index();
        $aboutKeyword.hide();
        $aboutKeyword.eq(idx).show();
    })
    // >>>>>>>>>>>>>>>>>>>>count
    $('.stoudyCount, .publCount, .designCount, .blogCount').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    // skills accordion
    var $skillsTitle = $('.skills__title')
    var $skillsProgressWrap = $('.skills__progress__wrap');
    // var $skillsIcon = $('.skills_icon');
    
    $skillsProgressWrap.hide();
    $skillsTitle.click(function(){
        $skillsProgressWrap.stop().slideUp();
        $(this).siblings().stop().slideToggle();
        $(this).children().toggleClass('visible');
    })
    
    $skillsTitle.click(function(){
        
    })
    // skills progress
    $('.pie_progress').asPieProgress({
        namespace: 'pie_progress'
    });
    $('.pie_progress').asPieProgress('start');
    
    // // portfolio slider
    // $('.custom__slider').slick({
        //     dots:true,
        //     // autoplay: true,
        //     // autoplaySpeed: 2000,
        // });
        
        // >>>>>>>> publishing slider
        $('.publishing__slider').slick({
            dots: true,
            // infinite: true,
            // speed: 300,
            // autoplay: true,
            // autoplaySpeed: 3000,
            centerMode: true,
            // centerPadding: '20px',
            slidesToShow: 3,
            variableWidth: true,
            responsive: [
                {
                    breakpoint: 769,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });
        
        // portfolio design modal
        $('.design__btn').click(function(e){
            e.preventDefault();
            $(this).siblings('.design__modal').fadeIn().show();
            $('body').css("overflow", "hidden");
        })
        $('.design__modal').click(function(e){
            if(e.target === e.currentTarget){
                $(this).fadeOut().hide();
                $('body').css("overflow", "scroll");
            }
        })
        $('.modal__close__btn').click(function(){
            $('.design__modal').fadeOut().hide();
            $('body').css("overflow", "scroll");
        })
        
        // mobile responsive
        if (matchMedia("screen and (max-width: 480px)").matches) {
            $gnbMenu.click(function(){
                $($gnbItem).toggleClass('visible')
            })
            $(window).scroll(function(){
                var scrollTop = $(window).scrollTop();
                var homeHeight = $('#home').outerHeight();

                if(scrollTop >= homeHeight ){
                    $gnbItem.addClass('color')
                }else{
                    $gnbItem.removeClass('color')
                }
            })
        }
    })
    