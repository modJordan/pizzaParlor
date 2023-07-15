# _Pizza Parlor_

#### By _**Jordan Kennedy**_

#### _{The application builds a pizza with toppings and displays the price}_

## Technologies Used
* HTML
* JavaScript
* CSS
* Bootstrap

## Description

_{A pizza parlor adventure! What did you have in mind? Pepperoni? Olives? Extra cheese? ANCHOVIES? We have it all! Come join us for our lunch specials on Tuesdays from 11-3pm! }_

## Setup/Installation Requirements

* Clone or Fork project
* Make sure all images and files are in the proper folders
* deploy

## Known Bugs

* None

## License

_{If you run into any issues or have questions, ideas or concerns, please email me at mod.jordan@icloud.com.}_

**License:** Apache License 2.0; July 16th, 2023

# Tests

Describe: Order()

Test: "It should return a Order object with two properties for toppings and size"
Code: let myOrder = new Order(["anchovies", "pineapple"], "medium");
myOrder;
Expected Output: Order { toppings: ["anchovies", "pineapple"], size: "medium" }

Test: "The Order object should include a list of toppings"
Code: 
let orderToppings = new Order("small", ["Pepperoni", "Cheese", "Olives"]);
orderToppings;
Expect Output: Object { size: small, toppings: "Pepperoni", "Cheese", "Olives"}

Describe: selectSize()

Test: "It will create an object with a size"
Code:
let myOrderSize = new Order("small");
myOrderSize;
Expected output:
