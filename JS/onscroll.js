$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".menu2scroll").addClass("scrolling");
    } else {
        $(".menu2scroll").removeClass("scrolling");
    }
});