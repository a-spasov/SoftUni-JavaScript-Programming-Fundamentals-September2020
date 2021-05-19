function solve(numbers) {
    let modifiedNumbers = [];
    let sumOfNumbers = 0;
    let sumOfModifiedNumbers = 0;
    let currentNumber = 0;
    for (let i = 0; i < numbers.length; i++) {
        currentNumber = numbers[i];
        sumOfNumbers += currentNumber;
        if (currentNumber % 2 == 0) {
            modifiedNumbers.push(currentNumber + i);
            sumOfModifiedNumbers += modifiedNumbers[i];
        } else {
            modifiedNumbers.push(currentNumber - i);
            sumOfModifiedNumbers += modifiedNumbers[i];
        }
    }
    console.log(modifiedNumbers);
    console.log(sumOfNumbers);
    console.log(sumOfModifiedNumbers);
}
solve([1, 2, 3]);