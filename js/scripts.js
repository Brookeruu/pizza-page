function totalOrderCost() {
  this.orderCost = pizza.cost +=
}

function pizzaOrder() {
  this.pizzas = [];
}

pizzaOrder.prototype.addPizzaToOrder = function() {
  pizza.id = this.pizzaId();
  pizza.pizzaCost = pizza.pizzacost();
  this.pizzas.push(pizza);
}

pizzaOrder.prototype.pizzaId = function(){
  this.pizzaId += 1;
  return this.pizzaId;
}

function Pizza (cheese,toppings,size) {
  this.cheese = cheese;
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.pizzaToppingCost = function() {
  this.toppingCost += this.toppings
  return this.toppingCost;
  }

Pizza.prototype.pizzaSizeCost = function() {
  this.sizeCost += this.size;
  return this.sizeCost;
}

Pizza.prototype.totalPizzaCost = function() {
  this.pizzaCost = this.toppingCost + this.sizeCost;
  return this.pizzaCost;
}



$(document).ready(function(){
  $("EVENT LISTENER").submit(function(event){
      event.preventDefault();
  })
  var pizza = new Pizza();
  var perPizzaPrice = newPizza.pizzaCost();
  var totalCost =  //Add up the price per pizza, maybe using pizza id?

  var
  orderTotal.addPizzaToOrder(pizza);



});
