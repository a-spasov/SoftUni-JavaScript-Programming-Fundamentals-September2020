function calculate(numbers) {
    let sumEvens = 0;
    let sumOdds = 0;
    for (let number of numbers) {
        if (number % 2 == 0) {
            sumEvens += number;
        } else {
            sumOdds += number;
        }
    }
    console.log(sumEvens - sumOdds);
}
calculate();