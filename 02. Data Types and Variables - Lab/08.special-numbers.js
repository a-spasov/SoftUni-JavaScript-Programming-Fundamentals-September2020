function specialNumbers(numberN) {
    let currentNumber = 0;
    let sumOfDigits = 0;
    for (let i = 1; i <= numberN; i++) {
        currentNumber = i;
        while (currentNumber >= 1) {
            sumOfDigits += currentNumber % 10;
            currentNumber = Math.floor(currentNumber / 10);
        }
        if (sumOfDigits == 5 || sumOfDigits == 7 || sumOfDigits == 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
        sumOfDigits = 0;
    }
}
specialNumbers(5);