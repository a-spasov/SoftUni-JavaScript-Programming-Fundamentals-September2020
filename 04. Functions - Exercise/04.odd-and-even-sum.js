function solve(number) {
    let currentDigit = 0;
    let currentNumber = number;
    let sumOdds = 0;
    let sumEvens = 0;
    while (currentNumber >= 1) {
        getCurrentDigit(currentNumber);
        getCurrentNumber(currentNumber);
        if (isOdd(currentDigit)) {
            sumOdds += currentDigit;
        } else {
            sumEvens += currentDigit;
        }       
    }
    console.log(`Odd sum = ${sumOdds}, Even sum = ${sumEvens}`);

    function getCurrentDigit(numA) {
        currentDigit = numA % 10;
        return currentDigit;
    }
    function getCurrentNumber(numB) {
        currentNumber = Math.floor(numB/10);
        return currentNumber;
    }
    function isOdd(numC) {
        if (numC % 2 == 0) {
            return false;
        } else {
            return true;
        }
    }
}
solve(3495892137259234);