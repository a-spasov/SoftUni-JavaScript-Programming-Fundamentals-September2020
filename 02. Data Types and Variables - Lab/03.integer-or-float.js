function solve(numberA, numberB, numberC) {
    let sum = numberA + numberB + numberC;
    if (sum % 1 == 0) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}
solve();