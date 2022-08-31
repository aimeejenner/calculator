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
   let equalsPressed = false;

    
   // EVENT LISTENERS

    numbers.forEach((number) => {
      number.addEventListener("click", (event) => {
          if (equalsPressed == true) {
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
         } else if (chosenOperator == "") {
            chosenOperator = event.target.value;
            display.innerHTML += " " + chosenOperator;
         }
      })
  })

    equals.addEventListener("click", (event) => {
      event.preventDefault();
      handleCalculate();
  })

    clear.addEventListener("click", (event) => {
        clearScreen();
  })

    decimal.addEventListener("click", (event) => {
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
    })


    // FUNCTIONS

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

            display.innerHTML = Number(result.toFixed(10));
            equalsPressed = true;
        }
    }

    const clearScreen = () => {
        firstNumber = "";
        secondNumber = "";
        chosenOperator = "";
        decimalExistsFirstNo = false;
        decimalExistsSecondNo = false;
        equalsPressed = false;
        display.innerHTML = "0";
  }