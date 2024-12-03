
    $(window).on("load", function() {
        // Preloadert/
$(".preloader").fadeOut("slow");
});


$(document).ready (function() {
    // navbar shrink
    $(window).on("scroll", function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass("navbar-shrink")
        }
        else{
            $(".navbar").removeClass("navbar-shrink")
        }
    })
    
    //video Popup
const videoSrc = $("#player-01").attr("Src");

$(".video-play-btn, .video-popup").on("click", function(){
    if($(".video-popup").hasClass("open")){
        $(".video-popup").removeClass("open");
        $("#player-01").attr("Src","");
    }
     else{
        $(".video-popup").addClass("open");
        if( $("#player-01").attr("Src")==''){
        $("#player-01").attr("Src",videoSrc);
        } 
    }



});
//scroll
$.scrollIt({
    topOffset: -50
});
function toggleTheme(){
    if(localStorage.getItem("shala-theme") !== null){
        if(localStorage.getItem("shala-theme") === "dark" ){
            $("body").addClass("dark");
        }
        else{
            $("body").removeClass("dark");
        }
    }
    updateIcon();
}
toggleTheme();
$(".toggle-theme").on("click",function(){
    $("body").toggleClass("dark")
    if($("body").hasClass("dark")){
        localStorage.setItem("shala-theme","dark");
    }
    else{
        localStorage.setItem("shala-theme","light");
    }
    updateIcon();
});

function updateIcon(){
    if($("body").hasClass("dark")){
         $(".toggle-theme i").removeClass("fa-moon");
         $(".toggle-theme i").addClass("fa-sun");
    }
    else{
        $(".toggle-theme i").removeClass("fa-sun");
        $(".toggle-theme i").addClass("fa-moon");
    }
}

});


// owl carasol

$('.features-carousel').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:2,
            
        },
        1000:{
            items:3,
            
        }
    }

    
});
//app screenshorts carousel
$('.sreenshorts-carousel').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
            
        },
        600:{
            items:2
            
        },
        1000:{
            items:4
            
        }
    }

    
});

// Tesmonial  carousel
$('.testimonials-carousel').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
            
        },
        600:{
            items:2
            
        },
        1000:{
            items:3
            
        }
    }

    
});

// Team Carousel
$('.team-carousel').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
            
        },
        600:{
            items:2
            
        },
        1000:{
            items:3
            
        }
    }

    
});