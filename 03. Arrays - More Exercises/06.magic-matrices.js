function magicMatrices(numbers) {
    let isMagic = false;
    let currentRow = [];
    let currentColomn = [];
    let sumOfRow = 0;
    let sumOfCurrentRow = 0;
    let cumOfColomn = 0;
    let sumOfCurrentColomn = 0;
    for (let i = 0; i < numbers.length; i++) {
        currentRow = numbers[i];
        for (let j = 0; j < currentRow.length; j++) {
            sumOfCurrentRow += currentRow[j];
        }
        if (i == 0) {
            sumOfRow = sumOfCurrentRow;
        } else {
            if (sumOfRow == sumOfCurrentRow) {
                isMagic = true;
            } else {
                isMagic = false;
                break;
            }
        }
        sumOfCurrentRow = 0;
    }
    if (isMagic) {
        for (let k = 0; k < numbers.length; k++) {
            for (let l = 0; l < numbers.length; l++) {
                currentRow = numbers[l];
                currentColomn += currentRow[l];
            }
            if (k == 0) {
            sumOfColomn = sumOfCurrentColomn;
            } else {
                if (sumOfColomn == sumOfCurrentColomn) {
                    isMagic = true;
                } else {
                    isMagic = false;
                    break;
                }
            }
            sumOfCurrentColomn = 0;
        }
        if (isMagic) {
            console.log("true");
        } else {
            console.log("false");
        }
    } else {
        console.log("false");
    }
}
magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   );
