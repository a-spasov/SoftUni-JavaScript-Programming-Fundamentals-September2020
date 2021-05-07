function sumOfDigits(numberA) {
    let sum = 0;
    let currentDigit = 0;
    let currentNumber = numberA;
    while (currentNumber >= 1) {
        currentDigit = currentNumber % 10;
        sum += currentDigit;
        currentNumber = Math.floor(currentNumber/10);
    }
    console.log(sum);
}
sumOfDigits();