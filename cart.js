"use strict";

function fillOrderItems() {
  // try {
  if (localStorage.getItem("orderInProgress")) {
    let cartItems_des = JSON.parse(localStorage.getItem("orderInProgress"));
    let counts = {};
    cartItems_des.drinksArr.forEach(function (x) {
      counts[JSON.stringify(x)] = (counts[JSON.stringify(x)] || 0) + 1;
    });
    let condensedDrinksList = Object.keys(counts);
    for (let i = 0; i < condensedDrinksList.length; i++) {
      document.querySelector(".cart-table").insertAdjacentHTML(
        "beforeend",
        `<tr class="cart-items" id="cart-item-${i + 1}">
            <td>
              <div class="cart-info">
                <img
                  id="cart-page-img"
                  src="${JSON.parse(condensedDrinksList[i]).strDrinkThumb}"
                />
                <div id="item-info">
                  <a> ${JSON.parse(condensedDrinksList[i]).strDrink}</a><br />
                  <a> ${JSON.parse(condensedDrinksList[i]).price}</a>
                </div>
                <a href="">Remove</a>
              </div>
            </td>
            <td><input class="quant" type="number" value="${
              counts[condensedDrinksList[i]]
            }" min="1"/></td>
          </tr>`
      );
    }
  }

    var tax = 0.10;
    var subtotal = 0;
    for(i=0; i<cartItems_des.drinksArr.length; i++){
        a = parseInt(cartItems_des.drinksArr[i].price); 
        subtotal += a;
    }
    console.log(subtotal);
    var taxAmt = subtotal * tax;
    console.log(taxAmt);
    var total = taxAmt + subtotal;
    console.log(total);

    $('#subtotal').html(subtotal);
    $('#taxAmt').html(taxAmt);
    $('#totalAmt').html(total);

    cartItems_des.subTotal = subtotal;
    cartItems_des.tax = taxAmt;
    cartItems_des.total = total;

    cartItems_des = JSON.stringify(cartItems_des);
    localStorage.setItem("orderInProgress", cartItems_des);

  
  //   } catch (error) {
  //     console.log(error);
  //   }
}

function updateCartFunction() {
  let quant1 = $(".quant").text();
  console.log(quant1);
}

fillOrderItems();
$(".update-cart").click(updateCartFunction);

var removeItems = document.getElementsByClassName("cart-info");
for (var i = 0; i < removeItems.length; i++) {
  var button = removeItems[i];
  button.addEventListener("click", function (event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCart();
  });
}
