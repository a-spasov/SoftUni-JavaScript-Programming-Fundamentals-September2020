function lastKNumbers(n, k) {
    let result = [];
    let currentNumber = 1;
    let currentSequenceOfNumbers = [];
    for (let element = 1; element <= n; element++) {
        if (result.length < k) {
            if (result.length > 1) {
                currentNumber = 0;
                for (let j = 0; j < result.length; j++) {
                    currentNumber += result[j];
                }
                result.push(currentNumber);
            } else {
                currentNumber = 1;
                result.push(currentNumber);
            }           
        } else {
            currentSequenceOfNumbers = result.slice(-k);
            currentNumber = 0;
            for (let i = 0; i < currentSequenceOfNumbers.length; i++) {
                currentNumber += currentSequenceOfNumbers[i];
            }
        result.push(currentNumber);
        }
        
    }
    console.log(result.join(" "));
}
lastKNumbers(6, 3);