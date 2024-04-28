let total = 0;
let discount;
document.getElementById("first_card").addEventListener("click", function () {
    addCardElement("first_item_name", "first_item_price");
})
document.getElementById("second_card").addEventListener('click', function () {
    addCardElement("second_item_name", "second_item_price");
})
document.getElementById("third_card").addEventListener('click', function () {
    addCardElement("third_item_name", "third_item_price");
})
document.getElementById("fourth_card").addEventListener('click', function () {
    addCardElement("fourth_item_name", "fourth_item_price");
})
document.getElementById("fifth_card").addEventListener('click', function () {
    addCardElement("fifth_item_name", "fifth_item_price");
})
document.getElementById("sixth_card").addEventListener('click', function () {
    addCardElement("sixth_item_name", "sixth_item_price");
})
function addCardElement(inputId, inputPrice) {
    // add card item
    const itemCard = document.getElementById(inputId);
    const itemText = itemCard.innerText;

    const CardItemList = document.getElementById("card_item_list");
    const count = CardItemList.childElementCount;
    let h4 = document.createElement("h4");
    h4.innerText = `${count + 1}. ${itemText}`;
    CardItemList.appendChild(h4);

    // card item total 
    const itemPrice = document.getElementById(inputPrice);
    const itemPriceInput = itemPrice.innerText;
    let itemPriceConvert = parseFloat(itemPriceInput);
    total = total + itemPriceConvert;
    const MakePurchase = document.getElementById("make_purchase")
    const ApplyCoupon = document.getElementById("Apply_Coupon");
    if (total > 0) {
        MakePurchase.removeAttribute('disabled');
    }
    if (total >= 200) {
        ApplyCoupon.removeAttribute('disabled');
    }

    // DISCOUNT COUNT
    document.getElementById("Apply_Coupon").addEventListener('click', function () {
        const CouponCode = document.getElementById("coupon_code");
        const CouponCodeValue = CouponCode.value;
        const discountPrice = document.getElementById("discount_price")
        const discount_priceText = discountPrice.innerText;
        const ApplyTotal = document.getElementById("total");
        let discountPriceValue = parseFloat(discount_priceText);
        if (CouponCodeValue == 'SELL200') {
          discountPriceValue= (total*20)/100;
            discountPrice.innerText = discountPriceValue;
            discount = total-discountPriceValue;
            ApplyTotal.innerText = discount;
        }
    })
    const TotalPrice = document.querySelector("#total_price");
    TotalPrice.innerText = total;
    const Total = document.querySelector("#total");
    Total.innerText = total;
}
document.getElementById("make_purchase").addEventListener('click',function(){
    const popup = document.getElementById("popup");
    popup.classList.remove("openpop_up");
})
document.getElementById("go-home").addEventListener('click',function(){
    const popup = document.getElementById("popup");
    popup.classList.add("openpop_up")
})