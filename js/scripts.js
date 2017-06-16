//BACK END

//parent object
function Food(type,size,quantity){
  this.type = type;
  this.size = size;
  this.quantity = quantity;
  this.toppings = 0;
  this.price = 0;
}
//parent object method to calculate the price of items
Food.prototype.calculatePrice = function(type,size,quantity){
  this.price = (this.type + this.size + this.toppings) * this.quantity;
  console.log(this.price);
}
//pizza consturctor that inherits from Food
function Pizza(type,size,quantity){
  Food.call(this, type,size,quantity);
}
Pizza.prototype = Object.create(Food.prototype);
Pizza.prototype.constructor = Pizza;
//Beverage constructor that inherits from food
function Bevy(type,size,quantity){
  Food.call(this, type,size,quantity);
}
Bevy.prototype = Object.create(Food.prototype);
Bevy.prototype.constructor = Bevy;
//Potato constructor that inherits from Food
function Potato(type,size,quantity){
  Food.call(this, type,size,quantity);
}
Potato.prototype = Object.create(Food.prototype);
Potato.prototype.constructor = Potato;
//Shopping cart that will hold and calculate the final total
function shoppingCart(pizza,bevy,potato){
  this.total = pizza.price + bevy.price + potato.price;
}






//FRONT END
$(document).ready(function() {

});
