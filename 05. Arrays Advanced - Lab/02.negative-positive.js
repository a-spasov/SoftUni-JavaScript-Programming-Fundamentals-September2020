function reorderNumbers(inputNumbers) {
    let reorderedNumbers = [];
    for (let number of inputNumbers) {
        if (number < 0) {
            reorderedNumbers.unshift(number);
        } else {
            reorderedNumbers.push(number);
        }
    }
    for (let number of reorderedNumbers) {
        console.log(number);
    }
}
reorderNumbers([3, -2, 0, -1]);