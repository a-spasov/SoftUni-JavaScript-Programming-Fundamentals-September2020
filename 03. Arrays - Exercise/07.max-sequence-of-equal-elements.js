function solve(numbers) {
    let maxSequenceCounter = 0;
    let currentSequenceCounter = 1;
    let currentNumber = 0;
    let nextNumber = 0;
    let numberOfSequence = 0;
    let sequence = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        currentNumber = numbers[i];
        nextNumber = numbers[i + 1];
        if (currentNumber == nextNumber) {
            currentSequenceCounter++;
            if (currentSequenceCounter > maxSequenceCounter) {
                maxSequenceCounter = currentSequenceCounter;
                numberOfSequence = currentNumber;
            }
        } else {
            currentSequenceCounter = 1;
        }   
    }
    for (let j = 1; j <= maxSequenceCounter; j++) {
        sequence.push(numberOfSequence);
    }
    console.log(sequence.join(" "));
}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);
solve([4, 4, 4, 4]);
solve([1,1,1]);