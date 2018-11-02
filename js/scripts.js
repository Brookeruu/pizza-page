// ---------------------------------------------------------------------------
// //Business Logic for Pizza Order
// ---------------------------------------------------------------------------

function PizzaOrder() {
  this.pizzas = [];
  pizza.pizzaCost = [];
}

PizzaOrder.prototype.addPizzaToOrder = function(pizza) {
  pizza.pizzaCost = pizza.totalPizzaCost();
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
  console.log(toppingsInputCostArray);

  var toppingsInputNameArray = [];
  $("input:checkbox[name=topping]:checked").each(function(){
    var toppingInputName = $(this).val();
    toppingsInputNameArray.push(toppingInputName);
  });
  // console.log(toppingsInputNameArray);


  var pizzaSize = parseInt($("#pizzaSize").val());
  console.log(pizzaSize);

  var newPizza = new Pizza(toppingsInputCostArray,pizzaSize);
  console.log(newPizza);

  var pizzaTotalCost = newPizza.totalPizzaCost(toppingsInputCostArray);
  console.log(pizzaTotalCost);



});

});
