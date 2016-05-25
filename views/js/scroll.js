$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 55) {
        $("#header").addClass("scrolling");
        $("#nav a").addClass("scrolling");
    } else {
        $("#header").removeClass("scrolling");
        $("#nav a").removeClass("scrolling");
    }
});