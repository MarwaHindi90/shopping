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