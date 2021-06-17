function oddNumbers(numbers) {
    let oddPositionNumbers = numbers.filter(getOddIndex);
    let processedNumbers = oddPositionNumbers.map(element => element*2);
    processedNumbers.reverse();
    console.log(processedNumbers.join(" "));

    function getOddIndex(value, index) {
        return (index % 2) != 0;
    }
}
oddNumbers([1,2,3,4,5,6]);