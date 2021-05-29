function calculate(numOne, numTwo, operator) {
    let add = (numOne, numTwo) => numOne + numTwo;
    let subtract = (numOne, numTwo) => numOne - numTwo;
    let divide = (numOne, numTwo) => numOne/numTwo;
    let multiply = (numOne, numTwo) => numOne*numTwo;
    operation(operator);
    function operation(operator) {
        switch (operator) {
            case "add":
                console.log(add(numOne, numTwo));
                break;
            case "subtract":
                console.log(subtract(numOne, numTwo));
                break;
            case "divide":
                console.log(divide(numOne, numTwo));
                break;
            case "multiply":
                console.log(multiply(numOne, numTwo));
                break;
        }
    }
}
calculate(5,5, "divide");