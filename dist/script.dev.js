"use strict";

// VARIABLES
var numbers = document.querySelectorAll(".number");
var operators = document.querySelectorAll(".operator");
var display = document.querySelector("#display");
var clear = document.querySelector("#clear");
var decimal = document.querySelector("#decimal");
var equals = document.querySelector("#equals");
var firstNumber = "";
var secondNumber = "";
var chosenOperator = "";
var result = "";
var decimalExistsFirstNo = false;
var decimalExistsSecondNo = false;
var equalsPressed = false; // EVENT LISTENERS

numbers.forEach(function (number) {
  number.addEventListener("click", function (event) {
    if (equalsPressed == true) {
      clearScreen();
    }

    if (firstNumber == "") {
      firstNumber = event.target.value;
      display.innerHTML = firstNumber;
    } else if (chosenOperator == "") {
      firstNumber = firstNumber + event.target.value;
      display.innerHTML = firstNumber;
    } else if (secondNumber == "") {
      secondNumber = event.target.value;
      display.innerHTML = "".concat(firstNumber, " ").concat(chosenOperator, " ").concat(secondNumber);
    } else {
      secondNumber = secondNumber + event.target.value;
      display.innerHTML = "".concat(firstNumber, " ").concat(chosenOperator, " ").concat(secondNumber);
    }
  });
});
operators.forEach(function (operator) {
  operator.addEventListener("click", function (event) {
    if (firstNumber && secondNumber && chosenOperator) {
      handleCalculate();
      clearScreen();
      firstNumber = result;
      chosenOperator = event.target.value;
      display.innerHTML = firstNumber + " " + chosenOperator;
    } else if (chosenOperator == "") {
      chosenOperator = event.target.value;
      display.innerHTML += " " + chosenOperator;
    }
  });
});
equals.addEventListener("click", function (event) {
  event.preventDefault();
  handleCalculate();
});
clear.addEventListener("click", function (event) {
  clearScreen();
});
decimal.addEventListener("click", function (event) {
  if (decimalExistsFirstNo == false && firstNumber == "") {
    firstNumber = "0.";
    decimalExistsFirstNo = true;
    display.innerHTML = firstNumber;
  } else if (decimalExistsFirstNo == false && chosenOperator == "") {
    firstNumber = firstNumber + ".";
    decimalExistsFirstNo = true;
    display.innerHTML = firstNumber;
  } else if (chosenOperator != "" && decimalExistsSecondNo == false && secondNumber == "") {
    secondNumber = "0.";
    decimalExistsSecondNo = true;
    display.innerHTML = secondNumber;
  } else if (chosenOperator != "" && decimalExistsSecondNo == false) {
    secondNumber = secondNumber + ".";
    decimalExistsSecondNo = true;
    display.innerHTML = secondNumber;
  }
}); // FUNCTIONS

var handleCalculate = function handleCalculate() {
  if (firstNumber && secondNumber && chosenOperator) {
    switch (chosenOperator) {
      case "+":
        result = Number(firstNumber) + Number(secondNumber);
        break;

      case "-":
        result = Number(firstNumber) - Number(secondNumber);
        break;

      case "*":
        result = Number(firstNumber) * Number(secondNumber);
        break;

      case "/":
        result = Number(firstNumber) / Number(secondNumber);
    }

    display.innerHTML = result;
    equalsPressed = true;
  }
};

var clearScreen = function clearScreen() {
  firstNumber = "";
  secondNumber = "";
  chosenOperator = "";
  decimalExistsFirstNo = false;
  decimalExistsSecondNo = false;
  equalsPressed = false;
  display.innerHTML = "0";
};