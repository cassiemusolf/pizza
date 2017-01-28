//business logic

function Pizza(toppings, crustSize) {
  this.toppings = toppings;
  this.crustSize = crustSize;
}

// var listToppings = [];

// function countCheckboxes(formname, groupname){
//    var totalChecked= 0;
//    var max = checks.ckbox.length;

//    for (var index = 0; index < max; index++) {
//       if (eval("document." + checks + "." + toppings + "[" + index + "].checked") == TRUE) {
//       totalChecked+= 1;
//    }
// }
//
//   return totalChecked;
//   console.log(totalChecked);
// }

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

Pizza.prototype.priceToppings = function() {
  var defaultToppings = 0;
  if (this.toppings === 1) {
    alert("add 1");
  }
}

//front-end logic

$(document).ready(function() {
  $("form#all").submit(function(event) {
    event.preventDefault();

    var toppings = $('input:checkbox[name="toppings"]:checked').length;
    var receivePizza = $(('input[name="getYourPizza"]:checked')).val();
    var nameInput = $("input#customerName").val();
    var addressInput = $("input#customerAddress").val();
    var crustSize = $(('input[name="size"]:checked')).val();
    var yourPizza = new Pizza(toppings, crustSize);

    if (nameInput === "") {
      alert("Please enter your information!");
    } if (addressInput === "") {
      alert("Please enter your information!");
    } else if (receivePizza === "delivery") {
      $("span#delivery").show();
      $("span#address").text(addressInput);
    }  else if (receivePizza === "pick-up") {
      $("span#pick-up").show();
    }

  //
  // $(":input").each(function() {
  //   if($(this).val() === "")
  //   alert("Empty Fields!!");
  // });


      $("span#name").text(nameInput + ", ");
      $("span#finalPrice").text("Your total is: $" + yourPizza.price() + ".00");
    });
});

    // function checkboxes () {
    //   count = 0;
    // for (var i=0; i<toppings.length; i++) {
    //    if (toppings[i].type == "checkbox" && toppings[i].checked == true)
    //       count++;
    //    }
    // }
    //  var count = checkboxes(toppings);
    //  alert(toppings);
