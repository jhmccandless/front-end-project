"use stict";

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
