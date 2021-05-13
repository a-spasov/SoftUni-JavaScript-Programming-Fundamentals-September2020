function sumEvens(numbers) {
    let currentNumber = 0;
    let totalSum = 0;
    for (let i = 0; i < numbers.length; i++) {
        currentNumber = parseInt(numbers[i]);
        if (currentNumber % 2 == 0) {
            totalSum += currentNumber;
        }
    }
    console.log(totalSum);
}
sumEvens();