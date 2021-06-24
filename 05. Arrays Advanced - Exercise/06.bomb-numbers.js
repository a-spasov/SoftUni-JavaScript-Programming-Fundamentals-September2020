function solve(numbers,bomb) {
    let bombNumber = bomb[0];
    let bombPower = bomb[1];
    let indexOfBomb = 0;
    let result = 0;
    while (numbers.includes(bombNumber)) {
        indexOfBomb = numbers.indexOf(bombNumber);
        if ((indexOfBomb - bombPower) < 0) {
            numbers.splice(0, indexOfBomb + bombPower + 1);
        } else {
            indexOfBomb -= bombPower;
            numbers.splice(indexOfBomb, 2*bombPower + 1);
        }  
    }
    for (let number of numbers) {
        result += number;
    }
    console.log(result);
}
solve([1, 2, 7, 2, 1, 2, 3,3,3],
    [2, 2]             
    )