function fillOrderItems(){
    try{
    if(localStorage.getItem(orderInProgress))
    {
        let cartItems_des = JSON.parse(localStorage.getItem("orderInProgress")) ;
        for (let i = 0; cartItems_des.drinksArr.length; i++) {
           

    }
}
}
catch(error)
{
    console.log(error);
}
}




