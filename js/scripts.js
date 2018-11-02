// ---------------------------------------------------------------------------
// //Business Logic for Pizza Order
// ---------------------------------------------------------------------------

function PizzaOrder() {
  this.pizzas = [];
  this.pizzaCost = [];
}

PizzaOrder.prototype.addPizzaToOrder = function(pizza) {
  this.pizzaCost = pizza.toppingCost(pizza);
  this.pizzas.push(pizza);
}

function Pizza (toppings,size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.totalPizzaCost = function(toppingsCostArray) {
  this.toppingCost = toppingTotal;
  var toppingTotal = 0;
  for (var i = 0; i < toppingsCostArray.length; i++) {
    toppingTotal += toppingsCostArray[i];
  }
  return toppingTotal + this.size;
  }

// Pizza.prototype.pizzaSizeCost = function(size) {
//   this.sizeCost = this.size;
// }
//
// Pizza.prototype.totalPizzaCost = function() {
//   this.pizzaCost = this.toppingCost + this.size;
//   return this.pizzaCost;
// }

// ---------------------------------------------------------------------------
// //Business Logic for Pizza Order
// ---------------------------------------------------------------------------


$(document).ready(function(){
  $("#orderForm").submit(function(event){
      event.preventDefault();

  var toppingsInputCostArray = [];
  $("input:checkbox[name=topping]:checked").each(function(){
    var toppingInputCost = parseInt($(this).val());
    toppingsInputCostArray.push(toppingInputCost);
  });

  var toppingsInputNameArray = [];
  $("input:checkbox[name=topping]:checked").each(function(){
    var toppingInputName = $(this).val();
    toppingsInputNameArray.push(toppingInputName);
  });
  // console.log(toppingsInputNameArray);

  var pizzaSize = parseInt($("#pizzaSize").val());

  var newPizza = new Pizza(toppingsInputCostArray,pizzaSize);

  var pizzaTotalCost = newPizza.totalPizzaCost(toppingsInputCostArray);
  console.log(pizzaTotalCost);

  // var pizzaOrder = newPizza.PizzaOrder(newPizza);
  // console.log(pizzaOrder);

  $("#insertCost").text(pizzaTotalCost);

});

});
