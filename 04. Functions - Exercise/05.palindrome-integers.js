function solve(numbers) {
    let currentNumber = 0;
    let currentReversedNumber = 0;
    for (let i = 0; i < numbers.length; i++) {
        currentNumber = numbers[i];
        reverseNumber(currentNumber);
        console.log(compare(currentNumber, currentReversedNumber));
    }

    function reverseNumber(numA) {
        currentReversedNumber = numA;
        currentReversedNumber = currentReversedNumber.toString();
        currentReversedNumber = currentReversedNumber.split("");
        currentReversedNumber = currentReversedNumber.reverse();
        currentReversedNumber = currentReversedNumber.join("");
        currentReversedNumber = Number(currentReversedNumber);
    }

    function compare(numB, numC) {
        if (numB == numC) {
            return true;
        } else {
            return false;
        }
    }
}
solve([323]);