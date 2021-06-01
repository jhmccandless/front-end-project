// var objDrink1 = new Drink();

var data1 = {};
var data2 = {};
var desiredDrinks = [];


async function displayAllDrinks() {
    try {
        const response = await axios.get(
            "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
        );
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
            $("#cocktailTile" + [i + 1] + "Label").html(
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

function addToOrder() {
    var orderNumber = 0;
    try {
        if (localStorage.getItem("drinkAdded") && localStorage.getItem("orderInProgress") === null) {
            let startOrder = new Order();
            startOrder.idOrder = 1;
            let drinkToBeAdded = JSON.parse(localStorage.getItem("drinkAdded"));
            startOrder.drinksArr.push(drinkToBeAdded);
            let OrderToBeAdded_Serialized = JSON.stringify(startOrder);
            localStorage.setItem('orderInProgress', OrderToBeAdded_Serialized);
            console.log("starting a new order");
            removeDrink();
        } else if (localStorage.getItem("drinkAdded") && localStorage.getItem("orderInProgress")) {
            let continueOrder = JSON.parse(localStorage.getItem("orderInProgress"));
            let drinkToBeAdded = JSON.parse(localStorage.getItem("drinkAdded"));
            continueOrder.drinksArr.push(drinkToBeAdded);
            let OrderToBeAdded_Serialized = JSON.stringify(continueOrder);
            localStorage.setItem('orderInProgress', OrderToBeAdded_Serialized);
            console.log("added a new drink");
            removeDrink();
        } else {
            console.log("No drinks added");
        }

    } catch (error) {
        console.log(error);
    }
}
function removeDrink()
{
    localStorage.removeItem("drinkAdded");
}

addToOrder();
displayAllDrinks();
