   // VARIABLES

   const numbers = document.querySelectorAll(".number");
   const operators = document.querySelectorAll(".operator");
   const display = document.querySelector("#display");
   const clear = document.querySelector("#clear");
   const decimal = document.querySelector("#decimal");
   const equals = document.querySelector("#equals");
   let firstNumber = "";
   let secondNumber = "";
   let chosenOperator = "";
   let result = "";
   let decimalExistsFirstNo = false;
   let decimalExistsSecondNo = false;
   let calculated = false;