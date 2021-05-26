// var objDrink1 = new Drink();

var data1 = {};
var data2 = {};
var desiredDrinks = [];

async function displayAllDrinks() {
    try {
        const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail");
        data1 = response.data;
        // console.log(data1);

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
            $("#cocktailImg" + [i + 1]).attr(
                "alt",
                data1.drinks[desiredDrinks[i]].strDrink
            );

        }

    } catch (error) {
        console.log(error);
    }
}

function displayDrinkDetails(num) {
    try {
        var currNum = num;
        localStorage.setItem("drinkName", currNum.alt);
    } catch (error) {
        console.log(error);
    }
}



window.onload = displayAllDrinks();