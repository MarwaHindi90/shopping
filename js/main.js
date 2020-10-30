$(document).ready(function() {
    // sidebar menu 
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        // open sidebar
        $('#wrapper').addClass('toggled');
        // fade in the overlay
        $('.overlay-page').addClass('toggled');
    });

    $('#dismiss, .overlay-page').click(function() {
        // hide sidebar
        $('#wrapper').removeClass('toggled');
        // hide overlay
        $('.overlay-page').removeClass('toggled');
    });

    // ================================================================================ //
    // Slider
    $('.slider-carousel').owlCarousel({
        rtl: true,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        items: 1,
        margin: 0,
        singleItem: true,

    })


});
// =================================================================================// 
// Add to cart 
var btn = document.getElementById('btn-add');
var spn = document.getElementById('cart-number');

let count = 0;

function cot() {
    count += 1;
    document.getElementById('cart-number').innerHTML = count;
}