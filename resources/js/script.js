$(document).ready(function() {
    
//CAROUSEL SLIDER
$('.carousel').carousel({
    interval: 2000
});

//COUNTER UP
$('.counter').counterUp({
    delay: 100,
    time: 5000
});

//ACTIVE MENU
$('.nav-item').click(function() {
    $(this).addClass('active-menu').siblings().removeClass('active-menu');
});

//MIX IT UP
    var mixer = mixitup('.portfolio');
    
});