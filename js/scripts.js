//business logic

function Pizza(toppings, crustSize) {
  this.toppings = toppings;
  this.crustSize = crustSize;
}

Pizza.prototype.price = function() {
  var defaultPrice = 10.00;
  if (this.crustSize === "personal") {
    return defaultPrice -1;
  } else if (this.crustSize === "small") {
    return defaultPrice +2;
  } else if (this.crustSize === "medium") {
    return defaultPrice +4;
  } else if (this.crustSize === "large") {
    return defaultPrice +6;
  } else if (this.crustSize === "extra-large"){
    return defaultPrice +8;
  }
  if (this.toppings === 1) {
    return defaultPrice +1;
  }
}






//front-end logic

$(document).ready(function(){
  $("form#createPizza").submit(function(event){
    event.preventDefault();
  // var pizzaTwo = new Pizza(toppings, crustSize);

// var inputtedPizzaSize = $ ("input#")
// var inputtedPizzaToppings = $
var crustSize = $(('input[name="size"]:checked')).val();
var toppings =$(('input:checkbox[name="toppings"]:checked')).val();
var pizzaOne = new Pizza(toppings, crustSize);
//
// var toppingList = [];
// $('input:checkbox[name="toppings"]:checked').each(function() {
//   0 + $(this).val();
//   console.log(('input:checkbox[name="toppings"]:checked'));
// });


$("span#finalPrice").text("Your total is: $" + pizzaOne.price() + ".00");
});
});
