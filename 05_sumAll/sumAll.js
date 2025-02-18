const sumAll = function (firstNumber, secondNumber) {
    let sum = 0;
    if (isNaN(firstNumber) || isNaN(secondNumber) || firstNumber < 0 || secondNumber < 0 ||
        typeof (firstNumber) === 'string' || typeof (secondNumber) === 'string') {
        return 'ERROR';
    }

    /*adding by using Gauss formula for adding sucessive integers from 0 to N 
     (N)(N+1)/2 */
    if (secondNumber > firstNumber && (firstNumber == 1 || firstNumber == 0)) {
        sum = ((secondNumber * (secondNumber + 1)) / 2);
    } else if (firstNumber > secondNumber && (secondNumber == 1 || secondNumber == 0)) {
        sum = ((firstNumber * (firstNumber + 1)) / 2);
    } else if (secondNumber > firstNumber) {
        sum = ((secondNumber * (secondNumber + 1)) / 2) - ((firstNumber * (firstNumber - 1)) / 2);
    } else if (firstNumber > secondNumber) {
        sum = ((firstNumber * (firstNumber + 1)) / 2) - ((secondNumber * (secondNumber - 1)) / 2);
    }
    return sum;
}


// Do not edit below this line
module.exports = sumAll;
