// Business Logic

function Order(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Order.prototype.selectSize = function (size) {
  size = document.querySelector("input[name=size]:checked").ariaValueMax;
  return size
}


Order.prototype.addToppings = function (topping) {
  topping = [document.querySelectorAll("input[name=toppings]:checked")]
  return topping
}