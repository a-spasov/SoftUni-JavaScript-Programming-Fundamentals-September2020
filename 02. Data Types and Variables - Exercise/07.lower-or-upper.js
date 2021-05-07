function solve(inputChar) {
    let result = inputChar.charCodeAt();
    if (result >= 65 && result <= 90) {
        console.log("upper-case");
    } else {
        console.log("lower-case");
    }
}
solve("Z");