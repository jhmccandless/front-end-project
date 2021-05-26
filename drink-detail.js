var data1={};
async function displayDrinkDetail() {
    try {
        var drinkSelected = localStorage.getItem("drinkName");
        console.log(drinkSelected);
        const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+drinkSelected);
        data1 = response.data;
        console.log(data1);}
        catch(error)
        {
            console.log(error);
        }
    }

    displayDrinkDetail();