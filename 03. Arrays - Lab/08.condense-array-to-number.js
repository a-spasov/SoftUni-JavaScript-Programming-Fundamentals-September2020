function solve(inputArr) {
    let currentArr = [];
    let condensedArr = [];
    if (inputArr.length == 1) {
        console.log(inputArr.toString());
    } else {
        for (let i = 0; i < inputArr.length - 1; i++) {
            currentArr.push(inputArr[i] + inputArr[i + 1]);
        }
        condensedArr = currentArr;
        while (condensedArr.length > 1) {
            condensedArr = [];
            for (let j = 0; j < currentArr.length - 1; j++) {
                condensedArr.push(currentArr[j] + currentArr[j + 1]);
            }
            currentArr = condensedArr;
        }
        console.log(condensedArr.toString());
    }
}
solve([5,0,4,1,2]);