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
  this.toppings = 0;
  this.price = 0;
}
//Potato constructor
function Potato(type,size,toppings,quantity){
  this.type = type;
  this.size = size;
  this.toppings = toppings;
  this.quantity = quantity;
  this.price = 0;
}
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

    let pizzaSize = parseInt($('#pizza-form .form-size').val());
    console.log(pizzaSize);
    let pizzaToppings = parseInt($('#pizza-form .form-toppings').val());
    console.log(pizzaToppings);
    let pizzaQuantity = parseInt($('#pizza-form .form-quantity').val());
    console.log(pizzaQuantity);
    let newPizza = new Pizza(pizzaSize,pizzaToppings,pizzaQuantity);
    newPizza.pizzaPrice();

  });
  //potato add to cart
  $('#potato-form').submit(function(){
    event.preventDefault();

        let potatoType = $('#potato-form .form-type').val();
        let potatoSize = $('#potato-form .form-size').val();
        console.log(potatoSize);
        let potatoToppings = $('#potato-form .form-toppings').val();
        console.log(potatoToppings);
        let potatoQuantity = $('#potato-form .form-quantity').val();
        console.log(potatoQuantity);
        let newPotato = new Potato(potatoType,potatoSize,potatoToppings,potatoQuantity);
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
