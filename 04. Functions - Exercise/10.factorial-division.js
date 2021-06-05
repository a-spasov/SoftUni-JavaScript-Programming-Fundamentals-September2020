function factorialDivision(numA, numB) {
    let result = 0;
    result = factorial(numA)/factorial(numB);
    console.log(result.toFixed(2));

    function factorial(inputNumber) {
        if (inputNumber == 0 || inputNumber == 1) {
            return 1;
        } else {
            return inputNumber*factorial(inputNumber - 1);
        }
    }
}
factorialDivision(6, 0);