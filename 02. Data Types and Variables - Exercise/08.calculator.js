function calculator(numA, operator, numB) {
    let result = 0;
    switch (operator) {
        case "+":
            result = numA + numB;
            break;
        case "-":
            result = numA - numB;
            break;
        case "*":
            result = numA*numB;
            break;
        case "/":
            result = numA/numB;
            break;
    }
    console.log(result.toFixed(2));
}
calculator();