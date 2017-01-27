//business logic

function Pizza(toppings, crustSize) {
  this.toppings = toppings;
  this.crustSize = crustSize;
}

Pizza.prototype.price = function() {
  var defaultPrice = 10.00;
  if (this.crustSize === "personal" ) {
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
}

  // Pizza.prototype.calculateToppings = function () {
  //   if (this.toppings === "pineapple") {
  //     alert("finally");
  //   } else if (this.toppings === 2) {
  //     return defaultToppings +2;
  //   }
  // };


//front-end logic

$(document).ready(function() {
  $("form#all").submit(function(event) {
    event.preventDefault();

    var toppings = $('input:checkbox[name="toppings"]:checked').val();
    var receivePizza = $(('input[name="getYourPizza"]:checked')).val();
    var nameInput = $("input#customerName").val();
    var addressInput = $("input#customerAddress").val();
    var crustSize = $(('input[name="size"]:checked')).val();
    var yourPizza = new Pizza(toppings, crustSize);

    if (receivePizza === "delivery") {
      $("span#delivery").show();
      $("span#address").text(addressInput);
    } else if (receivePizza === "pick-up") {
      $("span#pick-up").show();
    }

    $("span#name").text(nameInput + ", ");
    $("span#finalPrice").text("Your total is: $" + yourPizza.price() + ".00");
  });
});
