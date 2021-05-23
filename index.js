// var objDrink1 = new Drink();
async function displayAllDrinks() {
  var data1 = {};
  var cocktailImg1 = document.getElementById("cocktailImg1");
  try {
    const response = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
    );
    data1 = response.data;
    // console.log(data1);

    let desiredDrinks = [];

    for (let i = 0; i < data1.drinks.length; i++) {
      if (data1.drinks[i].strDrink == "Mojito") {
        desiredDrinks.push(i);
      }

      if (data1.drinks[i].strDrink == "Munich Mule") {
        desiredDrinks.push(i);
      }
      if (data1.drinks[i].strDrink == "Michelada") {
        desiredDrinks.push(i);
      }
      if (data1.drinks[i].strDrink == "Gin and Soda") {
        desiredDrinks.push(i);
      }
      if (data1.drinks[i].strDrink == "Death in the Afternoon") {
        desiredDrinks.push(i);
      }
      if (data1.drinks[i].strDrink == "Cosmopolitan") {
        desiredDrinks.push(i);
      }
    }

    for (var i = 0; i < desiredDrinks.length; i++) {
      $("#cocktailImg" + [i + 1]).attr(
        "src",
        data1.drinks[desiredDrinks[i]].strDrinkThumb
      );
      $("#cocktailImg" + [i + 1]).click();
    }
  } catch (error) {
    console.log(error);
  }
}

async function displayDrinksByID() {
  var data2 = {};
  try {
    const response = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
    );
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
