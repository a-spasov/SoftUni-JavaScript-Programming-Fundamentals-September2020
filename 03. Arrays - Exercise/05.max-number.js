function maxNumber(numbers) {
    let currentNumber = 0;
    let nextNumber = 0;
    let isMaxNumber = false;
    let maxNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        currentNumber = numbers[i];
        for (let j = i + 1; j < numbers.length; j++) {
            nextNumber = numbers[j]
            if (currentNumber > nextNumber) {
                isMaxNumber = true;
            } else {
                isMaxNumber = false;
                break;
            }
        }
        if (isMaxNumber) {
            maxNumbers.push(currentNumber);
        }
        isMaxNumber = false;
        if (i == (numbers.length - 1)) {
            maxNumbers.push(currentNumber);
        }
    }
    console.log(maxNumbers.join(" "));
}
maxNumber([12,6,3,5])