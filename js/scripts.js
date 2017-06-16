function Food(type,size,quantity){
  this.type = type;
  this.size = size;
  this.quantity = quantity;
  this.toppings = 0;
  this.price = 0;
}

Food.prototype.calculatePrice = function(type,size,quantity){
  this.price = (this.type + this.size + this.toppings) * this.quantity;
  console.log(this.price);
}

function Pizza(type,size,quantity){
  Food.call(this, type,size,quantity);
}
Pizza.prototype = Object.create(Food.prototype);
Pizza.prototype.constructor = Pizza;

function Bevy(type,size,quantity){
  Food.call(this, type,size,quantity);
}
Bevy.prototype = Object.create(Food.prototype);
Bevy.prototype.constructor = Bevy;

function Potato(type,size,quantity){
  Food.call(this, type,size,quantity);
}
Potato.prototype = Object.create(Food.prototype);
Potato.prototype.constructor = Potato;

function shoppingCart(items){
  this.items = items;
  this.total = 0;
}

gooeyZa = new Pizza(2,8,1);
console.log(gooeyZa.type);
console.log(gooeyZa.size);
console.log(gooeyZa.quantity);
gooeyZa.calculatePrice();

taterTots = new Potato(1,1,1);
taterTots.calculatePrice();











$(document).ready(function() {

});
