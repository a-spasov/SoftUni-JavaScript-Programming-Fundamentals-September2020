function signCheck(numOne, numTwo, numThree) {
    let negativeNumbers = 0;
    determineNegatives(numOne, numTwo, numThree);
    console.log(determineSignOfMultiplication());

    function determineNegatives(numOne, numTwo, numThree) {
        if (numOne < 0) {
            negativeNumbers++;
        }
        if (numTwo < 0) {
            negativeNumbers++;
        }
        if (numThree < 0) {
            negativeNumbers ++;
        }
        if (numOne == 0 || numTwo == 0 || numThree == 0) {
            negativeNumbers = 0;
        }
    }

    function determineSignOfMultiplication() {
        if (negativeNumbers % 2 == 0) {
            return "Positive";
        } else {
            return "Negative";
        }
    }
}
signCheck(-3, 0, 1);