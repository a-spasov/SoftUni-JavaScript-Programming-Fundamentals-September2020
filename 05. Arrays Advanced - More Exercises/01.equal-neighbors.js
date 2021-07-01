function solve(input) {
    let currentSequence = [];
    let nextSequence = [];
    let equalPairs = 0;
    for (let i = 0; i < input.length; i++) {
        currentSequence = input[i];
        if ( i == input.length - 1) {
            nextSequence = [];
        } else {
            nextSequence = input[i + 1];
        }
        for (let index in currentSequence) {
            index = Number(index);
            if (currentSequence[index] == nextSequence[index]) {
                equalPairs++;
            }
            if (currentSequence[index] == currentSequence[index + 1]) {
                equalPairs++;
            }
        }     
    }
    console.log(equalPairs);
}
/*function equalNeighbours(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            let current = arr[i][j]
            if (j + 1 < arr[i].length && current === arr[i][j + 1]) {
                count++
            } else if (i + 1 < arr.length && current === arr[i + 1][j]) {
                count++
            }
        }
    }
    console.log(count);
}*/
solve([["2","2","2"],["2","2","2"]]
);