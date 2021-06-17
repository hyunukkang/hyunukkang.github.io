

$(function(){
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
