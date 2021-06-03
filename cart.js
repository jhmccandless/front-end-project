function fillOrderItems() {
  //   try {
  if (localStorage.getItem("orderInProgress")) {
    let cartItems_des = JSON.parse(localStorage.getItem("orderInProgress"));
    for (let i = 0; i < cartItems_des.drinksArr.length; i++) {
      document.querySelector(".cart-table").insertAdjacentHTML(
        "beforeend",
        `<tr class="cart-items" id="cart-item-${i + 1}">
            <td>
              <div class="cart-info">
                <img
                  id="cart-page-img"
                  src="${cartItems_des.drinksArr[i].strDrinkThumb}"
                />
                <div id="item-info">
                  <a> ${cartItems_des.drinksArr[i].strDrink}</a><br />
                  <a> ${cartItems_des.drinksArr[i].price}</a>
                </div>
                <a href="">Remove</a>
              </div>
            </td>
            <td><input type="number" value="1" /></td>
          </tr>`
      );
    }
  }
  //   } catch (error) {
  //     console.log(error);
  //   }
}

fillOrderItems();
