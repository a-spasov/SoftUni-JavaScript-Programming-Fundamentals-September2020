function magicSum(numbers, sum) {
    let currentNumber = 0;
    let nextNumber = 0;
    for (let i = 0; i < numbers.length - 1; i++) {
        currentNumber = numbers[i];
        for (let j = i + 1; j < numbers.length; j++) {
            nextNumber = numbers[j];
            if ((currentNumber + nextNumber) == sum) {
                console.log(`${currentNumber} ${nextNumber}`);
            }
        }
    }
}
magicSum();