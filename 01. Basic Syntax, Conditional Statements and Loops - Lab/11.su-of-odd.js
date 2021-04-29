function oddNumbers(numberN) {
    let currentOddNumber = 0;
    let sumOddNumbers = 0;
    for (let i = 0; i < numberN; i++) {
        currentOddNumber = i*2 + 1;
        console.log(currentOddNumber);
        sumOddNumbers += currentOddNumber;
    }
    console.log(`Sum: ${sumOddNumbers}`);
}
oddNumbers(3);