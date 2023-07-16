// Business Logic

function Order(size, toppings) {
  this.size = size;
  this.toppings = toppings || [];
}

Order.prototype.selectSize = function (size) {
  this.size = size
}

Order.prototype.toppingArray = function () {
  for (let i = 0; i < arguments.length; i++) {
    this.toppings.push(arguments[i]);
  }
}

Order.prototype.addToppings = function (topping) {
  if (!Array.isArray(this.toppings)) {
    this.toppings = [];
  }
  this.toppings = this.toppings.concat(topping);
  return this.toppings;
}


//UI Logic

function handleFormSubmission(e) {
  e.preventDefault();
  const sizeSelector = document.querySelector("input[name=size]:checked").value;
  const toppingsSelected = Array.from(document.querySelector("form#checkbox-form input[name=toppings]:checked"));
  console.log(toppingsSelected);

  const order = new Order(sizeSelector, toppingsSelected);
  order.selectSize(sizeSelector);
  toppingArray = []
  toppingsSelected.toString.forEach(function (topping) {
    order.addToppings(topping);
    push.toppingArray(topping)
  });

  const sizeOutput = document.getElementById("sizeInfo");
  const toppingOutput = document.getElementById("toppingInfo");

  sizeOutput.innerHTML = order.size;
  toppingOutput.innerHTML = order.toppings.join(", ");
}

window.addEventListener("load", function () {
  const form = document.querySelector("form#radio-form");
  form.addEventListener("submit", handleFormSubmission);
});

window.addEventListener("submit", function (e) {
  e.preventDefault();

  const sizeSelector = document.querySelector("form#radio-form input[name=size]:checked").value;
  const toppingsSelected = document.querySelectorAll("form#checkbox-form input[name=toppings]:checked");

  const order = new Order(sizeSelector, toppingsSelected);
  order.selectSize(sizeSelector);
  toppingsSelected.forEach(function (topping) {
    order.addToppings(topping);
  })

  let sizeOutput = document.getElementById("sizeInfo");
  let toppingOutput = document.getElementById("toppingInfo");

  sizeOutput.innerHTML = order.size;
  toppingOutput.innerHTML = order.toppings.join(", ");
  let outputBox = document.getElementById("pizzaPrice");

  outputBox.removeAttribute("hidden");
});

