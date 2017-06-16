//BACK END

// //parent object
// function Food(type,size,toppings,quantity){
//   this.type = type;
//   this.size = size;
//   this.quantity = quantity;
//   this.toppings = toppings;
//   this.price = 0;
// }
// //parent object method to calculate the price of items
// Food.prototype.calculatePrice = function(type,size,quantity){
//   this.price = (this.type + this.size + this.toppings) * this.quantity;
//   console.log(this.price);
// }
//pizza consturctor that inherits from Food
function Pizza(size,toppings,quantity){
  this.size = size;
  this.toppings = toppings;
  this.quantity = quantity;
  this.price = 0;
}
//Beverage constructor
function Bevy(type,size,quantity){
  this.type = type;
  this.size = size;
  this.quantity = quantity;
}
//Potato constructor
function Potato(type,size,quantity){
  Food.call(this, type,size,quantity);
}
Potato.prototype = Object.create(Food.prototype);
Potato.prototype.constructor = Potato;
//Shopping cart that will hold and calculate the final total
function shoppingCart(){
  this.items = [];
}

shoppingCart.prototype.finalPrice  = function(){
  let total = 0;
  for (let x = 0; x < this.items.length; x++){ total = this.items[x.price]; }
}






//FRONT END
$(document).ready(function() {
  //pizza add to cart
  $('#pizza-form').submit(function(){
    event.preventDefault();

    let pizzaSize = $('#pizza-form .form-size').val();
    console.log(pizzaSize);
    let pizzaToppings = $('#pizza-form .form-toppings').val();
    console.log(pizzaToppings);
    let pizzaQuantity = $('#pizza-form .form-quantity').val();
    console.log(pizzaQuantity);
    let newPizza = new Pizza(0,pizzaSize,pizzaToppings,pizzaQuantity);
    console.log(newPizza);

  });
  //potato add to cart
  $('#potato-form').submit(function(){
    event.preventDefault();

        let potatoSize = $('#potato-form .form-size').val();
        console.log(potatoSize);
        let potatoToppings = $('#potato-form .form-toppings').val();
        console.log(potatoToppings);
        let potatoQuantity = $('#potato-form .form-quantity').val();
        console.log(potatoQuantity);
        let newPotato = new Potato(0,potatoSize,potatoToppings,potatoQuantity);
        console.log(newPotato);

  });
  //bevy add to cart
  $('#bevy-form').submit(function(){
    event.preventDefault();

        let bevyType = $('#bevy-form .form-type').val();
        console.log(bevyType);
        let bevySize = $('#bevy-form .form-size').val();
        console.log(bevySize);
        let bevyQuantity = $('#bevy-form .form-quantity').val();
        console.log(bevyQuantity);
        let newBevy = new Bevy(bevyType,bevySize,bevyQuantity);
        console.log(newBevy);

  });
});
