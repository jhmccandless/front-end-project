class Order {
    // purpose: build the values of the order
    //   constatns: idOrder, drinksArr, subtotal, tax, total
    // methods: balance after order is completed

    constructor(_idOrder = 0, _drinksArr = [], _subTotal = 0.00, _tax = 0.00, _total = 0.00) {
        this.idOrder = _idOrder;
        this.drinksArr = _drinksArr;
        this.subTotal = _subTotal;
        this.tax = _tax;
        this.total = _total;
        
    }
    getIdOrder() {
        return this.idOrder;
    }

    getDrinksArr() {
        return drinksArr;
    }

    getSubTotal() {
        return subTotal;
    }

    getTax() {
        return price;
    }

    getTotal() {
        return total;
    }
    
}