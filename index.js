// var objDrink1 = new Drink();
async function displayAllDrinks(){
    var data1={};
    var cocktailImg1= document.getElementById("cocktailImg1");
   try {
    const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail');
    data1 = response.data;
    // objDrink1.questions = data1.results;
    // document.getElementById("drinkId").innerHTML = data1.drinks[0].idDrink;
    // document.getElementById("drinkName").innerHTML = data1.drinks[0].strDrink;
    // document.getElementById("drinkPicture").src = data1.drinks[0].strDrinkThumb;
    for(var i=0;i<=6;i++)
    {
        $("#cocktailImg"+i).attr("src", data1.drinks[i].strDrinkThumb);
    }
    
    // span1.style.src = data1.drinks[0].strDrinkThumb;

//     <span class="cocktailTile" id="cocktailTile1">
//     <img
//       src="cup-lemon-juice-wooden-board.jpg"
//       alt="cocktail photo"
//       width="250px"
//       height="250px"
//     />
//   </span>

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