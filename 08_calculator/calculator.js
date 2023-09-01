const add = function (firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

const subtract = function (firstNumber, secondNumber) {
  return firstNumber - secondNumber
};

const sum = function (sumArray) {
  let total = 0;

  for (let i = 0; i < sumArray.length; i++) {
    total += sumArray[i];
  }

  return total;
};

const multiply = function (multArray) {
  let total = 0;

  for (let i = 0; i < multArray.length; i++) {
    if(total === 0){
      total = multArray[i];
    }else{
      total *= multArray[i];
    }
  }

  return total;

};

const power = function (firstNumber,secondNumber) {
  return firstNumber**secondNumber;
};

const factorial = function (factorNumber) {
  let resultFactorial = 1;
  if(factorNumber === 0 || factorNumber === 1){
    return 1;
  }
  else{
    for(let i=1;i<=factorNumber;i++){
      resultFactorial *= i; 
    }
  }
  return resultFactorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
