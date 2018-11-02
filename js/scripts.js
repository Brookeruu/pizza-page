function PizzaOrder() {
  this.pizzas = [];
  pizza.pizzacost = [];
}

pizzaOrder.prototype.addPizzaToOrder = function(pizza) {
  pizza.pizzaCost = pizza.totalPizzaCost();
  this.pizzas.push(pizza);
}

function Pizza (toppings,size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.pizzaToppingCost = function(toppingsCostArray) {
  this.toppingCost = toppingTotal;
  var toppingTotal = 0;
  for (var i = 0; i < toppingsCostArray.length; i++) {
    toppingTotal += toppingsCostArray[i];
  }
  return toppingTotal;
  }

Pizza.prototype.pizzaSizeCost = function(size) {
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

  // make an [array] to hold the values of each checked topping;
  // create a variable that gets the value of the check;
  // push each check into the array;
  //
  // create a variable equal to zero;
  // create for loop index equals zero, condition is less than length of array of toppings, ++ each loop;
  // total will += toppings array []

  var toppingsInputCostArray = [];
  $("input:checkbox[name=topping]:checked").each(funtion(){
    var toppingInputCost = parseInt($(this).val());
    toppingsInputCostArray.push(toppingInputCost);
  });

  var toppingsInputNameArray = [];
  $("input:checkbox[name=topping]:checked").each(function(){
    var toppingInputName = $(this).val());
    toppingInputNameArray.push(toppingInputName);
  });

  var pizzaSize = parseInt($(".size").val());

  var pizza = new Pizza(toppingsInputNameArray,pizzaSize);

  var pizzaTotalCost = newPizza.totalPizzaCost();



});

});
