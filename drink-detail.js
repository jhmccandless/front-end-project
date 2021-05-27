var data1={};
async function displayDrinkDetail() {
    try {
        var drinkSelected = localStorage.getItem("drinkName");
        console.log(drinkSelected);
        const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+drinkSelected);
        data1 = response.data;
        console.log(data1);

        $(".ins-text").html(data1.drinks[0].strInstructions);
        $("#drink-image").attr("src", data1.drinks[0].strDrinkThumb);
        
    }
    catch(error){
        {
            console.log(error);
        }
    }
}

displayDrinkDetail();