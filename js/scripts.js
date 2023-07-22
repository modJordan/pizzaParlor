// Business Logic

function Order(size, toppings) {
  this.size = size;
  this.toppings = toppings;
};

Order.prototype.addToppings = function (topping) {
  this.toppings = topping.value;
  if (!Array.isArray(this.toppings)) {
    this.toppings = [];
  }
  this.toppings.push(topping);
};

Order.prototype.calculatePrice = function (size, toppings) {
  let basePrice;
  if (size === "small") {
    basePrice = 10;
  } else if (size === "medium") {
    basePrice = 12;
  } else if (size === "large") {
    basePrice = 14;
  } else {
    return 0;
  }

  const toppingPrice = 1.5;
  const toppingsCount = toppings.length;
  const totalPrice = basePrice + (toppingPrice * toppingsCount);
  return totalPrice.toFixed(2);
};



//UI Logic

function handleFormSubmission(e) {
  e.preventDefault();
  const sizeSelector = document.querySelector("input[name=size]:checked").value;
  const toppingsSelected = Array.from(document.querySelectorAll("form#checkbox-form input[name=toppings]:checked")).map(input => input.value);


  const order = new Order(sizeSelector, toppingsSelected);
  order.size;

  const sizeOutput = document.getElementById("sizeInfo");
  const toppingOutput = document.getElementById("toppingInfo");

  sizeOutput.textContent = `${order.size} pizza `;
  toppingOutput.textContent = order.toppings.join(", ")

  let outputBox = document.getElementById("pizzaPrice");
  outputBox.classList.remove("hidden");
  let totalPrice = order.calculatePrice(order.size, order.toppings);
  let totalSpan = document.querySelector(".total");
  totalSpan.textContent = totalPrice;
};



window.addEventListener("load", function () {
  const button = document.getElementById("addPizza");
  button.addEventListener("click", handleFormSubmission);
  const form = document.getElementById("radio-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  });
});

