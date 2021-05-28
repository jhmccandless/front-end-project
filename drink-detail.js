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
      if (data1.drinks[0][currentIng]) {
        document
          .querySelector(".ing-list")
          .insertAdjacentHTML(
            "beforeend",
            `<li>${data1.drinks[0][currentIng]}</li>`
          );
      }
    }
  } catch (error) {
    {
      console.log(error);
    }
  }
}

displayDrinkDetail();
