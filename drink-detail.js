var data1 = {};
async function displayDrinkDetail() {
  try {
    var drinkSelected = localStorage.getItem("drinkName");
    console.log(drinkSelected);
    const response = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
        drinkSelected
    );
    data1 = response.data;
    console.log(data1);

    $(".sel-drink-title").html(data1.drinks[0].strDrink);
    $(".ins-text").html(data1.drinks[0].strInstructions);
    $("#drink-image").attr("src", data1.drinks[0].strDrinkThumb);

    for (let i = 1; i < 15; i++) {
      let currentIng = `strIngredient${i}`;
      let currentMeasure = `strMeasure${i}`;
      if (data1.drinks[0][currentIng]) {
        document
          .querySelector(".ing-list")
          .insertAdjacentHTML(
            "beforeend",
            `<li>${data1.drinks[0][currentMeasure]} ${data1.drinks[0][currentIng]}</li>`
          );
      }
    }

        var drinkPrice = 0;
        if(drinkSelected === "Cosmopolitan"){
        drinkPrice = 6.00;
        }
        if(drinkSelected === "Death in the Afternoon"){
        drinkPrice = 4.00;
        }
        if(drinkSelected === "Gin and Soda"){
        drinkPrice = 4.00;
        }
        if(drinkSelected === "Michelada"){
        drinkPrice = 5.00;
        }
        if(drinkSelected === "Mojito"){
        drinkPrice = 5.00;
        }
        if(drinkSelected === "Munich Mule"){
        drinkPrice = 5.00;
        }
        $('#drinkPrice').html('$'+drinkPrice+".00");
    
    } catch (error) {
        {
            console.log(error);
        }
    }
  }

function addToCart() {
  try {
    let drinkAdded = new Drink();
    // let selectedIngridients = [];
    drinkAdded.idDrink = data1.drinks[0].idDrink;
    drinkAdded.strDrink = data1.drinks[0].strDrink;
    drinkAdded.strInstructions = data1.drinks[0].strInstructions;
    var priceWithDollarSign = document.getElementById("drinkPrice").innerHTML;
    drinkAdded.price = priceWithDollarSign.substring(1);


    for (let i = 1; i < 15; i++) {
      let currentIng = `strIngredient${i}`;
      let currentMeasure = `strMeasure${i}`;
      if (data1.drinks[0][currentIng]) {
        drinkAdded.strIngredients[i - 1] =
          data1.drinks[0][currentMeasure] + data1.drinks[0][currentIng];
      }
    }
    drinkAdded.strDrinkThumb = data1.drinks[0].strDrinkThumb;
    let drinkAdded_serialized = JSON.stringify(drinkAdded);
    localStorage.setItem("drinkAdded", drinkAdded_serialized);
    localStorage.removeItem("drinkName");

  } catch (error) {
    console.log(error);
  }
}

displayDrinkDetail();
