//BACK END


//pizza consturctor
function Pizza(size,toppings,quantity){
  this.size = size;
  this.toppings = toppings;
  this.quantity = quantity;
  this.price = 0;
}
Pizza.prototype.pizzaPrice = function(){
  this.price = (this.size + this.toppings) * this.quantity;
  console.log(this.price);
}
//Beverage constructor
function Bevy(type,size,quantity){
  this.type = type;
  this.size = size;
  this.quantity = quantity;
  this.price = 0;
}
Bevy.prototype.bevyPrice = function (){
  this.price = (this.type + this.size) * this.quantity;
  console.log(this.price);
}
//Potato constructor
function Potato(type,size,toppings,quantity){
  this.type = type;
  this.size = size;
  this.toppings = toppings;
  this.quantity = quantity;
  this.price = 0;
}
Potato.prototype.potatoPrice = function (){
  this.price = (this.type + this.size + this.toppings) * this.quantity;
  console.log(this.price);
}
//Shopping cart that will hold and calculate the final total
function shoppingCart(){
  this.finalPrice = 0;
}






//FRONT END
$(document).ready(function() {
  //initialize shopping cart
  newShoppingCart = new shoppingCart();

  //pizza add to cart
  $('#pizza-form').submit(function(){
    event.preventDefault();

    const pizzaSize = parseInt($('#pizza-form .form-size').val());
    const pizzaToppings = parseInt($('#pizza-form .form-toppings').val());
    const pizzaQuantity = parseInt($('#pizza-form .form-quantity').val());
    const newPizza = new Pizza(pizzaSize,pizzaToppings,pizzaQuantity);
    newPizza.pizzaPrice();
    newShoppingCart.finalPrice += newPizza.price;
    $('#pizza-form button').text("Added to cart!");
  });
  //potato add to cart
  $('#potato-form').submit(function(){
    event.preventDefault();

        const potatoType = parseInt($('#potato-form .form-type').val());
        const potatoSize = parseInt($('#potato-form .form-size').val());
        const potatoToppings = parseInt($('#potato-form .form-toppings').val());
        const potatoQuantity = parseInt($('#potato-form .form-quantity').val());
        const newPotato = new Potato(potatoType,potatoSize,potatoToppings,potatoQuantity);
        newPotato.potatoPrice();
        newShoppingCart.finalPrice += newPotato.price;
        $('#potato-form button').text("Added to cart!");
  });
  //bevy add to cart
  $('#bevy-form').submit(function(){
    event.preventDefault();

        const bevyType = parseInt($('#bevy-form .form-type').val());
        const bevySize = parseInt($('#bevy-form .form-size').val());
        const bevyQuantity = parseInt($('#bevy-form .form-quantity').val());
        const newBevy = new Bevy(bevyType,bevySize,bevyQuantity);
        newBevy.bevyPrice();
        newShoppingCart.finalPrice += newBevy.price;
        $('#bevy-form button').text("Added to cart!");
  });
  //Display final price
  $('#order-button').click(function(){
    event.preventDefault();
    $('.row').empty().append(
      "<div id='jumbotron'><h1>Your order is on the way!</h1>"+
      "<hr>"+
      "<h3>Your total is " + newShoppingCart.finalPrice + " dollars :]</h3>"
    )
  });

});
