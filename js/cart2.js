let selectItem = document.getElementById('select-items');
let couponField = document.getElementById('coupon-input-field');
let totalPrice = document.getElementById('select-price');
let handleCoupon = document.getElementById('handle-coupon');
let buyNowButton = document.getElementById('buy-now');
let discountField = document.getElementById('discount-field');
let finalTotalPrice = document.getElementById('final-result');
let sum = 0;

function addToCart(target){
    const getItemName = target.childNodes[3].childNodes[11].innerText;
    const getNumber = target.childNodes[3].childNodes[13].innerText;
    let getPriceNumber = parseFloat(getNumber);
    let li = document.createElement('li');
    li.innerText = getItemName;
    selectItem.appendChild(li);
    sum = sum + getPriceNumber;
    totalPrice.innerText = sum.toFixed(2);

    if(sum>=200){
        couponField.removeAttribute('disabled');
        handleCoupon.removeAttribute('disabled');
    }
    if(sum>=0){
        buyNowButton.removeAttribute('disabled')
   
    }
 
}
function applyCoupon(){

    const provwsString = totalPrice.innerText;
    const provwsNumber = parseFloat(provwsString);
   
    if(couponField.value.toUpperCase()==="SELL200"){
        function discountPrice(totalPrice){
            return(provwsNumber*20)/100;
        }
    }
     else{
        alert('Don`t Mach Copun Code')
     }

     const totalDiscountPrice = discountPrice(provwsNumber);
     discountField.innerText = totalDiscountPrice.toFixed(2);
     const finalTotal = provwsNumber - totalDiscountPrice;
     finalTotalPrice.innerText = finalTotal;
}
