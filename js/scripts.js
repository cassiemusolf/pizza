//business logic
var toppings;
function Pizza(toppings, crustSize) {
  this.toppings = toppings;
  this.crustSize = crustSize;
}

Pizza.prototype.price = function() {
  var defaultPrice = 10.00;
  if (this.crustSize === "personal") {
    return defaultPrice;
  } else if (this.crustSize === "small") {
    return defaultPrice +2;
  } else if (this.crustSize === "medium") {
    return defaultPrice +4;
  } else if (this.crustSize === "large") {
    return defaultPrice +6;
  } else if (this.crustSize === "extra-large"){
    return defaultPrice +8;
  }
}

// Pizza.prototype.toppingsTotal = function() {
//   var defaultToppings = 0.00;
//   if (this.toppings === "Regular") {
//     return defaultToppings +1;
//   }  else if (this.toppings ===2) {
//       return defaultToppings +2;
//    }
// }



//front-end logic

$(document).ready(function(){
  $("form#createPizza").submit(function(event){
    event.preventDefault();

var nameInput = $("input#customerName").val();
$("span#name").text(nameInput + ", ");
var crustSize = $(('input[name="size"]:checked')).val();
// var toppings = $('input:checkbox[name="toppings"]:checked').len();
var pizzaOne = new Pizza(toppings, crustSize);
toppings = $('input[name=toppings]:checked').val();

  var totalToppings = [];
  $(':checkbox:checked.pizzaToppings').each(function() {
      total += +this.value;
  totalToppings.push(total);
  $(alert(totalToppings.length));
});

$("span#finalPrice").text("Your total is: $" + pizzaOne.price() + ".00");
});
});
