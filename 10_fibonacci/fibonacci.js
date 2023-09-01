const fibonacci = function (numberCheck) {
    if (numberCheck < 1) {
        return 'OOPS'
    }

    let oldNumber = 1;
    let newNumber = 1;
    let fibonacciNumber = 1;

    for (let i = 2; i < numberCheck; ++i) {
        fibonacciNumber = oldNumber + newNumber;
        oldNumber = newNumber;
        newNumber = fibonacciNumber;
    }
    return fibonacciNumber;
};

console.log(fibonacci(10))
// Do not edit below this line
module.exports = fibonacci;
