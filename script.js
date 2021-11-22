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

    
   // EVENT LISTENERS

    numbers.forEach((number) => {
      number.addEventListener("click", (event) => {
          if (calculated == true) {
              clearScreen();
          } if (firstNumber == "") {
              firstNumber = event.target.value;
              display.innerHTML = firstNumber;
          } else if (chosenOperator == "") {
              firstNumber = firstNumber + event.target.value;
              display.innerHTML = firstNumber;
          } else if (secondNumber =="") {
              secondNumber = event.target.value;
              display.innerHTML = `${firstNumber} ${chosenOperator} ${secondNumber}`;
          } else {
              secondNumber = secondNumber + event.target.value;
              display.innerHTML = `${firstNumber} ${chosenOperator} ${secondNumber}`;
          }
      })
  })

   operators.forEach((operator) => {
      operator.addEventListener("click", (event) => {
         if (firstNumber && secondNumber && chosenOperator) {
            handleCalculate();
            clearScreen();
            firstNumber = result;
            chosenOperator = event.target.value;
            display.innerHTML = firstNumber + " " + chosenOperator;
         } else {
            chosenOperator = event.target.value;
            display.innerHTML += " " + chosenOperator;
         }
      })
   })