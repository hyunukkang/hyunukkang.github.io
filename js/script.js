

$(function(){
    // header
    // header scroll event
    var $header = $('#header');
    var $toggleSpan = $(".toggle span")
    var $gnb = $('.gnb')
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        var headerHeight = $('#header').outerHeight();
        var homeHeight = $('#home').outerHeight();
        if( scrollTop > headerHeight ){
            $header.addClass('fixed')
            $toggleSpan.addClass('fixed')
        }else{
            $header.removeClass('fixed');
            $toggleSpan.removeClass('fixed');
        }
        if(scrollTop > homeHeight ){
            $header.addClass('color')
            $toggleSpan.addClass('color')
            $gnb.addClass('color')
        }else{
            $header.removeClass('color')
            $toggleSpan.removeClass('color')
            $gnb.removeClass('color')
        }
    })
    // gnb ele
    var $toggle = $('.toggle'),
    $gnb = $('.gnb');
    $($toggle).click(function(){
        $(this).toggleClass('active');
        $($gnb).toggleClass('visible');
    })
    // gnb__item window scroll
    var $gnbMenu = $('.gnb__menu');
    $gnbMenu.click(function(){
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
    var $skillsIcon = $('.skills_icon');
    
    $skillsProgressWrap.hide();
    $skillsTitle.click(function(){
    $skillsProgressWrap.stop().slideUp();
    $(this).siblings().stop().slideToggle();
    $(this).children().toggleClass('visible');
    })
    // skills progress
    $('.pie_progress').asPieProgress({
        namespace: 'pie_progress'
    });
    $('.pie_progress').asPieProgress('start');
    


    // portfolio slider
    $('.custom__slider').slick({
        dots:true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
})
