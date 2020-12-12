const prompt = require('prompt-sync')({sigint: true});

var operators = {
  '+': function(a, b) { return a + b},
  '-': function(a, b) { return a - b},
  '*': function(a, b) { return a * b},
  '/': function(a, b) { return a / b},
}

function pickOperationNumber(operation, firstNumber, secondNumber) {
  let notOper = false;
  while (!notOper) {
    operation = prompt('What operation would you like to perform? ');
    if (operation === '/' || operation === '*' || operation === '-' || operation === '+') {
      notOper = true;
    } else {
      console.log(`That is not a valid operation.`);
    }
  }  
  
  let num = /\d/g;
  let notNum1 = false;
  while (!notNum1) {
    firstNumber = prompt('Please enter the first number. ');
    if (firstNumber.match(num) != null) {
      // console.log(`${firstNumber} is your first number.`);
      notNum1 = true;
    } else {
      console.log(`This is not a number.`);
    }
  }
  
  let notNum2 = false;
  while (!notNum2) {
    secondNumber = prompt('\bPlease enter the second number. ');
    if (secondNumber.match(num) != null) {
      // console.log(`${secondNumber} is your second number.`);
      console.log(`Your numbers are ${firstNumber} and ${secondNumber}!`)
      console.log(`Your math problem is ${firstNumber} ${operation} ${secondNumber}.`)
      console.log(`The answer is ${(operators[operation](parseFloat(firstNumber), parseFloat(secondNumber))).toFixed(2)}.`);
      notNum2 = true;
    } else {
      console.log(`This is not a number.`);
    }
  }
}

pickOperationNumber();