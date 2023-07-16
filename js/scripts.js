// Business Logic

function Order(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Order.prototype.selectSize = function (size) {
  this.size = size
}

Order.prototype.toppingArray = function (topping) {
  this.toppings = topping;
}

Order.prototype.addToppings = function (topping) {
  if (!Array.isArray(this.toppings)) {
    this.toppings = [];
  }
  this.toppings.push(topping);
}


//UI Logic

function handleFormSubmission(e) {
  e.preventDefault();
  const sizeSelector = document.querySelector("input[name=size]:checked").value;
  const toppingsSelected = Array.from(document.querySelectorAll("form#checkbox-form input[name=toppings]:checked")).map(input => input.value);

  const order = new Order(sizeSelector, toppingsSelected);
  order.selectSize(sizeSelector);


  const sizeOutput = document.getElementById("sizeInfo");
  const toppingOutput = document.getElementById("toppingInfo");

  sizeOutput.textContent = order.size;
  toppingOutput.textContent = order.toppings.join(", ")

  let outputBox = document.getElementById("pizzaPrice");
  outputBox.removeAttribute("hidden");

  function calculatePrice(size, toppings) {
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
  }

  let totalPrice = calculatePrice(order.size, order.toppings);
  let totalSpan = document.querySelector(".total");
  totalSpan.textContent = totalPrice;
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
  order.toppingArray(toppingsSelected);

  let sizeOutput = document.getElementById("sizeInfo");
  let toppingOutput = document.getElementById("toppingInfo");

  let output = document.getElementById("pizzaPrice");
  output.removeAttribute("hidden");

  sizeOutput.textContent = order.size;
  toppingOutput.textContent = order.toppings;

});

