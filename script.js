"use strict";

let id = 11007;

fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
  .then((results) => results.json())
  .then((data) => data.drinks[0])
  .then((next) => {
    for (let i = 1; i < 10; i++) {
      let currentIng = `strIngredient${i}`;
      if (next[currentIng]) {
        console.log(next[currentIng]);
        document
          .querySelector(".ing-list")
          .append($(`<li>${next[currentIng]}<li>`));
      }
    }
  });



  
