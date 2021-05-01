function printSum(firstNumber, lastNumber) {
    let sum = 0;
    let output = "";
    for (let i = firstNumber; i <= lastNumber; i++) {
        if (i == lastNumber) {
            output += i;
        } else {
            output += i + " ";
        }
        sum += i;
    }
    console.log(output);
    console.log(`Sum: ${sum}`);
}
printSum();