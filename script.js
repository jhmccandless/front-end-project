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

class Order {
  // purpose: build the values of the order
  //   constatns: idOrder, drinksArr, subtotal, tax, total
  // methods: balance after order is completed

  constructor(idOrder, drinksArr, subtotal, tax, total) {
    //   assingment of this variables
  }

  getDrink() {
    //   use a new Drink to push to the object
    // add new drink to order;
    //;
  }

  //   getScore() {
  //     return this.score;
  //   }

  //   getWins() {
  //     return this.wins;
  //   }

  //   getLosses() {
  //     return this.losses;
  //   }

  //   getQuestions() {
  //     return this.questions;
  //   }
}

class Drinks {
  // when we click on a drink, this will fill the drinksArr in the Order
  // All of the
  // first api gives the drink name, and ID
  // second gives everything
}

