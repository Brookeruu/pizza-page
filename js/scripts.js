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

function Pizza (toppings,size) {
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

  var toppingsInput = names topping selected/checked

  // make an [array] to hold the values of each checked topping;
  // create a variable that gets the value of the check;
  // push each check into the array;
  //
  // create a variable equal to zero;
  // create for loop index equals zero, condition is less than length of array of toppings, ++ each loop;
  // total will += toppings array []



  var toppingsInputCostArray = [];
  $(function to parseInt checked values).each(function(){
    var toppingsInputCost = parseInt value checked;
    toppingsInputCostArray.push(toppingsInputCost);
  });

  var size = parseInt checked box value size

  var pizza = new Pizza(toppingsInput,sizeInput);

  var perPizzaPrice = newPizza.totalPizzaCost();
  var totalCost =  //Add up the price per pizza, maybe using pizza id?

  var
  orderTotal.addPizzaToOrder(pizza);


});

});
