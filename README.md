# JS Calculator

### A calculator built using HTML, SCSS and Javascript.

#### Project Link [_here_](https://aimeejenner.github.io/calculator/).

<p align="center">
  <img src="./calculator.png" alt="Calculator">
</p>

## Description

This calculator app accepts inputs from a user, is able to perform a range of calculations and produces a visual output.


## User Story

-   **As a user I want to be able to perform calculations, so that I can solve mathematical problems accurately**
-   Given that I click a number button, this number should be stored to be used in calculations.
-   Given that I click an operand button, this should trigger the correct operator to be used in calculations.
-   Given that I click the decimal button, this should add a decimal point at the correct position.
-   Given that I click the equals button, this should evaluate the sum and return a total value.
-   Given that I click the clear button, the calculator values and display should reset, ready to be used again.

## Functionality

There is an event listener attached to each button, which triggers a different function depending on certain criteria.

When a number is clicked:
-   If there is no number already stored, input value is set as the first number.
-   If there is a first number but no chosen operator, input value is added to the end of the first number.
-   If there is a first number and a chosen operator but no second number, input value is set as the second number.
-   If there is a second number already stored, input value is added to the end of the second number.

When an operand button is clicked:
-   If there is a first number, second number and chosen operator already set, the sum of these is calculated and stored as the new first number. Operand button input is then set as the chosen operator.
-   If there is no chosen operator already stored, input is set as the chosen operator.

When the decimal button is clicked:
-   If there is no number already stored, the first number is set as "0.".
-   If there is a first number but no chosen operator, a decimal point is added to the end of the first number.
-   If there is a first number and a chosen operator but no second number, the second number is set as "0.".
-   If there is a second number already stored, a decimal point is added to the end of the second number.

When the equals button is clicked, this runs the handleCalculate function:

```js
/*
The handleCalculate function evaluates the sum and returns a total value
*/
   const handleCalculate = () => {
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
    }
```


When the clear button is clicked, this runs the clearScreen function:

```js
/*
The clearScreen function resets the calculator values and display
*/
    const clearScreen = () => {
        firstNumber = "";
        secondNumber = "";
        chosenOperator = "";
        decimalExistsFirstNo = false;
        decimalExistsSecondNo = false;
        equalsPressed = false;
        display.innerHTML = "0";
  }
```

## Technology

-   Javascript
-   Sass
-   HTML5
