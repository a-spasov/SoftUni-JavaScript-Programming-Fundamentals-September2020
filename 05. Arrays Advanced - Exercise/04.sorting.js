function sorting(numbers) {
    let length = numbers.length;
    let filteredByValue = numbers.sort((a,b) => b - a);
    let sorted = [];
    let currentNumber = 0;
    for (let i = 0; i < length; i++) {
        currentNumber = filteredByValue[i];
        if (i % 2 == 0) {
            currentNumber = filteredByValue.shift();
            sorted.push(currentNumber);
        } else {
            currentNumber = filteredByValue.pop();
            sorted.push(currentNumber);
        }
    }
    console.log(sorted.join(" "));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);