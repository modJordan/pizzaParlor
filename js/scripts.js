// Business Logic

function Order(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Order.prototype.selectSize = function (size) {
  this.size = size;
  console.log(size);
}


Order.prototype.addToppings = function (topping) {
  topping = topping;
  return topping
}

//UI Logic

function handleFormSubmission(event) {
  event.preventDefault();
  const sizeSelector = document.querySelector("input[name=size]:checked").value;
  const toppingsSelected = document.querySelector("form#checkbox-form input[name=toppings]:checked")
  console.log(sizeSelector, toppingsSelected)
  order.selectSize();
  order.addToppings();
}

window.addEventListener("load", function () {
  const form = document.querySelector("form#radio-form");
  form.addEventListener("submit", handleFormSubmission);
});

window.addEventListener("submit", function (e) {
  e.preventDefault();
  let sizeOutput = document.getElementById("radio-form");
  let toppingOutput = document.getElementById("checkbox-form");
  const sizeSelector = document.querySelector("input[name=size]:checked").value;
  const toppingsSelected = document.querySelectorAll("form#checkbox-form input[name=toppings]:checked");

  const order = new Order(sizeSelector, toppingsSelected);
  order.selectSize();
  order.addToppings();

  sizeOutput.innerHTML = order.size;
  toppingOutput.innerHTML = order.toppings;
});