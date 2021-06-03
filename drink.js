class Drink {
  constructor(
    _strDrink = "",
    _strDrinkThumb = "",
    _idDrink = "",
    _strInstructions = "",
    _strIngredients = [],
    _price = 0,
    _quantity = 1
  ) {
    this.strDrink = _strDrink;
    this.strDrinkThumb = _strDrinkThumb;
    this.idDrink = _idDrink;
    this.strInstructions = _strInstructions;
    this.strIngredients = _strIngredients;
    this.price = _price;
    this.quantity = _quantity;
  }
  getStrDrink() {
    return strDrink;
  }

  getStrDrinkThumb() {
    return strDrinkThumb;
  }

  getIdDrink() {
    return idDrink;
  }

  getPrice() {
    return price;
  }

  getStrInstructions() {
    return idDrink;
  }
  getStrIngredients() {
    return strIngredients;
  }

  addingQuantity() {
    this.quantity++;
    console.log(this.quantity);
    return this.quantity;
  }
}
