function matrix(numberN) {
    printRows(numberN);

    function createRow(inputNumber) {
        let result = [];
        for (let i = 1; i <= inputNumber; i++) {
            result.push(inputNumber);
        }
        return result.join(" ");
    }
    function printRows(rowsNumber) {
        for (let j = 1; j <= rowsNumber; j++) {
            console.log(createRow(numberN));
        }
    }
}
matrix(3);