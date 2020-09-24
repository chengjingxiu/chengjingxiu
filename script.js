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

// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar //
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { // hide only when user scrolls certain distance)
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0px";
    } else {
        document.getElementById("navbar").style.top = "-200px";
    }
    prevScrollpos = currentScrollPos;
    }   
}

// Hamburger Menu //
$(".hamburger").on("click", function(e) {
    $(".hamburger").toggleClass("is-active");
    $(".right-nav").toggleClass("hide");
  });