function OrderTotal() {
  this.pizzas = [];
}

OrderTotal.prototype.addPizzaToOrder = function() {
  pizza.id = this.pizzaId();
  pizza.cost = pizza.pizzacost();
  this.pizzas.push(pizza);
}

OrderTotal.prototype.pizzaId = function(){
  this.pizzaId += 1;
  return this.pizzaId;
}

function Pizza (cheese,toppings,size) {
  this.cheese = cheese;
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.pizzaCost = function() {
  this.cost = this.cheese + this.toppings + this.size;
  return this.cost;
  }


$(document).ready(function(){
  $("EVENT LISTENER").submit(function(event){
      event.preventDefault();
  })
  var pizza = new Pizza();
  var perPizzaPrice = newPizza.pizzaCost();
  var pizzaOrderTotal =

  orderTotal.addPizzaToOrder(pizza);



});
