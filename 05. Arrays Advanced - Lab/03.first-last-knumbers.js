function solve(input) {
    let k = input.shift();
    let firstNumbers = [];
    let lastNumbers = [];
    firstNumbers = input.slice(0,k);
    console.log(firstNumbers.join(" "));
    lastNumbers = input.slice(-k);
    console.log(lastNumbers.join(" "));   
}
solve([3, 4, 5, 6, 7, 8]);