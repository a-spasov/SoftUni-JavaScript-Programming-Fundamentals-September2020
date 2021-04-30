function rounding(numberA, precision) {
    let result;
    if (precision > 15) {
        precision = 15;
    }
    result = numberA.toFixed(precision);
    result = parseFloat(result);
    console.log(result);
}
rounding(3.1234, 18);