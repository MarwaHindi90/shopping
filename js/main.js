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

    });

    $('.option-carousel').owlCarousel({
        rtl: true,
        loop: true,
        nav: false,
        dots: true,
        autoplay: true,
        items: 1,
        margin: 0,
        singleItem: true,

    });



    // $(".box-link").click(function() {
    //     //  e.preventDefault();
    //     // open loading pic
    //     $('.loader').addClass('apper');

    // });

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
// =================================================================================// 

// Increment And Decrement Counter on Button Click 
document.querySelector('.minus').setAttribute('disabled', 'disabled');

// plus button
var valueCount;
// talking price value in variable
var price = document.getElementById('price').innerText;

// price calculation function
function priceTotal() {
    var total = valueCount * price;
    document.getElementById('price').innerText = total;
}

document.querySelector('.plus').addEventListener('click', () => {
    // geting value of input 
    valueCount = document.getElementById('quantity-value').value;

    // input value increment by 1
    valueCount++;

    // setting increment input value
    document.getElementById('quantity-value').value = valueCount;

    if (valueCount > 1) {
        document.querySelector('.minus').removeAttribute('disabled');
        document.querySelector('.minus').classList.remove('disabled');
    }

    // calling price function 
    priceTotal();
})

// minus button

var valueCount;

document.querySelector('.minus').addEventListener('click', () => {
    // geting value of input 
    valueCount = document.getElementById('quantity-value').value;

    // input value decrement by 1
    valueCount--;

    // setting decrement input value
    document.getElementById('quantity-value').value = valueCount;

    if (valueCount == 1) {
        document.querySelector('.minus').setAttribute('disabled', 'disabled');
    }
    // calling price function 
    priceTotal()
})



// Add loader when click on box-link 
// var link = document.querySelectorAll('.box-link img');
// var loader = document.querySelectorAll('.loader');

// link.forEach((el) => {
//     el.addEventListener('click', (e) => {
//         // loader.className += ' apper';
//         e.target.classList.add('apper')

//     })
// });





// function load() {
//     loader.className += ' apper';
// }