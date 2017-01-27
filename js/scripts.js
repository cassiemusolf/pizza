//business logic

function Pizza(toppings, crustSize) {
  this.toppings = toppings;
  this.crustSize = crustSize;
}

Pizza.prototype.getPrice = function() {
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
  console.log(defaultPrice);
}






//front-end logic

$(document).ready(function(){
  $("form#createPizza").submit(function(event){
    event.preventDefault();
  var pizzaOne = new Pizza();
  var pizzaTwo = new Pizza();

// var inputtedPizzaSize = $ ("input#")
// var inputtedPizzaToppings = $

})
});
