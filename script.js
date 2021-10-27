// AOS //
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
});

// Expandable/Collapsable Card //
$(document).ready(function() {
    $('.interest-card').click(function() {
        clickToExpandCards($(this));
    });
    function clickToExpandCards($obj){
        var clickedElement = $obj;
        if (clickedElement.hasClass('collapsed')) {
            clickedElement.find('.card-text').show();
            clickedElement.removeClass('collapsed');
            clickedElement.addClass('expanded');
        }
        else {
            clickedElement.find('.card-text').hide();
            clickedElement.removeClass('expanded');
            clickedElement.addClass('collapsed');
        };
    };
});

// Hamburger Menu //
$(".hamburger").on("click", function(e) {
    $(".hamburger").toggleClass("is-active");
    $(".right-nav").toggleClass("hide");
  });

// When the user scrolls down, hide the top navbar. When the user scrolls up, show the top navbar //
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (document.documentElement.scrollTop > 60) { // hide only when user scrolls certain distance)
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0px";
    } else {
        document.getElementById("navbar").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
    }   
}

// Side Navbar //
var topofDiv = $(".activate-side-nav").offset().top; //gets offset from "Overview"
var height = $(".activate-side-nav").outerHeight(); //gets height of "Overview"

$(window).scroll(function(){
    var windscroll = $(window).scrollTop();

    if (windscroll > (topofDiv+height)) {   // show when user reaches Overview, close when user reaches Other Projects
       $(".sidenav").fadeIn();                      

       $('.case-study-page').each(function(i) {      // highlight active portion
            if ($(this).position().top <= windscroll + 100) {
                $('.sidenav a.active').removeClass('active');
                $('.sidenav a').eq(i).addClass('active');
            }
        });
    }

    else{                                  // hide otherwise
        $(".sidenav").fadeOut();
        $(".sidenav a.active").removeClass('active');
    }
});
