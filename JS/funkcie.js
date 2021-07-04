// pozadie ringy
VANTA.RINGS({
    el: "#animacia",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 0.60,
    scaleMobile: 0.40,
    backgroundColor: 0x0
  })

// transparent navigacia
$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if($(this).scrollTop() > 250) { 
        $('.navbar').addClass('solid');
    } else {
        $('.navbar').removeClass('solid');
    }
    });
});