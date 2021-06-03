function fillOrderItems(){
    try{
    if(localStorage.getItem(orderInProgress))
    {
        let cartItems_des = JSON.parse(localStorage.getItem("orderInProgress"));
        for (let i = 0; cartItems_des.drinksArr.lenght; i++) {
           

    }
}
}
catch(error)
{
    console.log(error);
}

var removeCartItems = document.getElementsByClassName('cart-items')
console.log(removeCartItems)
for (var i = 0; i < removeCartItems.length; i++) {
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}


