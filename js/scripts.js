// Business Logic

function Order(size, toppings) {
  this.size = size;
  this.toppings = toppings || [];
}

Order.prototype.selectSize = function (size) {
  this.size = size
}


Order.prototype.addToppings = function (topping) {
  return this.toppings.push(topping);
}

//UI Logic

function handleFormSubmission(e) {
  e.preventDefault();
  const sizeSelector = document.querySelector("input[name=size]:checked").value;
  const toppingsSelected = document.querySelector("form#checkbox-form input[name=toppings]:checked");

  const order = new Order(sizeSelector, []);
  order.selectSize(sizeSelector);
  toppingsSelected.forEach(function (topping) {
    order.addToppings(topping.value);
  });

  const sizeOutput = document.getElementById("sizeInfo");
  const toppingOutput = docuemnt.getElementById("toppingInfo");

  sizeOutput.textContent = order.size;
  toppingOutput.textContent = order.toppings.join(", ");
}

window.addEventListener("load", function () {
  const form = document.querySelector("form#radio-form");
  form.addEventListener("submit", handleFormSubmission);
});

window.addEventListener("submit", function (e) {
  e.preventDefault();

  const sizeSelector = document.querySelector("form#radio-form input[name=size]:checked").value;
  const toppingsSelected = document.querySelectorAll("form#checkbox-form input[name=toppings]:checked");

  const order = new Order(sizeSelector, []);
  order.selectSize(sizeSelector);
  toppingsSelected.forEach(function (topping) {
    order.addToppings(topping.value);
  })

  let sizeOutput = document.getElementById("sizeInfo");
  let toppingOutput = document.getElementById("toppingInfo");

  sizeOutput.innerHTML = order.size;
  toppingOutput.innerHTML = order.toppings.join(", ");
});

