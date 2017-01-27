//business logic

function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.price = function() {

}






//front-end logic

$(document).ready(function(){
  $("form#createPizza").submit(function(event){
    event.preventDefault();
  var pizzaOne = new Pizza();
  var pizzaTwo = new Pizza();

var inputtedPizzaSize = $ ("input#")
var inputtedPizzaToppings = $

})
});
