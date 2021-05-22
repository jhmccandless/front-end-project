var objDrink1 = new Drink();

async function displayAllDrinks(){
    var data1={};
   try {
    const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
    data1 = response.data;
    // objDrink1.questions = data1.results;
    document.getElementById("drinkId").innerHTML = data1.drinks[0].idDrink;
    document.getElementById("drinkName").innerHTML = data1.drinks[0].strDrink;
    document.getElementById("drinkPicture").src = data1.drinks[0].strDrinkThumb;

   } catch (error) {
       console.log(error);
   }
}

async function displayDrinksByID (){
    var data2={};
    try {
     const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
     data1 = response.data;
     // objDrink1.questions = data1.results;
     document.getElementById("drinkId").innerHTML = data1.drinks[0].idDrink;
     document.getElementById("drinkName").innerHTML = data1.drinks[0].strDrink;
     document.getElementById("drinkPicture").src = data1.drinks[0].strDrinkThumb;
 
    } catch (error) {
        console.log(error);
    }
 }

displayAllDrinks();

/* <label id="">Drink ID</label>
<label id="drinkName">Drink Name</label>
<img id="drinkPicture"> */