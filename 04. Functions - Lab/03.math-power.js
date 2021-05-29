function solve(number, power) {
    console.log(calculatePower(number, power));

    function calculatePower(number, power) {
        let result = number ** power;
        return result;
    }
}
solve(2, 3);