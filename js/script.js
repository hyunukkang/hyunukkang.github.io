

$(function(){
    // >>>>>>>>>>>>>>>>>>> tab
    var $subTitleTab = $('.sub-title__tab');
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
    var $skillsDesc = $('.skills__desc');
    var $skillsIcon = $('.skills_icon');
    
    $skillsDesc.hide();
    $skillsTitle.click(function(){
    $skillsDesc.stop().slideUp();
    $(this).siblings().stop().slideToggle();
    $(this).children().toggleClass('visible');
    // $skillsIcon.toggleClass('visible'); /* 사라졌다 / 보였다 */
    })
})
