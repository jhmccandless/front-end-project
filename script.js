"use strict";

// filter by cockails first, then narrow down.

// const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`;

// let cocktails;

// let firstFetch = fetch(url)
//   .then((response) => response.json())
//   .then((data) => (cocktails = data.drinks))
//   .then(() => console.log(cocktails))
//   .catch((err) => console.error("👻Error:", err));

// let secondFetch = fetch(
//   `www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data));

let id = 11007;

fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
  .then((results) => results.json())
  .then((data) => data.drinks[0])
  .then((next) => {
    for (let i = 1; i < 10; i++) {
      let currentIng = `strIngredient${i}`;
      if (next[currentIng]) {
        console.log(next[currentIng]);
      }
    }
  });

// const getIngredients = function (next) {
//   let contents = [];
//   for (let i = 1; i > 10; i++) {
//     if (next.strIngredient[i]) {
//       console.log(next.strIngredient[i]);
//       contents.push(strIngredient[i]);
//     }
//   }
//   return contents;
// };
