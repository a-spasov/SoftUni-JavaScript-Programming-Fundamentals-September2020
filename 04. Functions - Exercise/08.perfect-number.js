function perfectNumber(numA) {
    if (validation(getDivisors(numA))) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }

    function getDivisors(inputNumber) {
        let devisors = [];
        for (let i = 1; i < inputNumber; i++) {
            if (inputNumber % i == 0) {
                devisors.push(i);
            }
        }
        return devisors;
    }
    function validation(inputDevisors) {
        let sumOfDevisors = 0;
        let currentDevisor = 0;
        for (let j = 0; j < inputDevisors.length; j++) {
            currentDevisor = inputDevisors[j];
            sumOfDevisors += currentDevisor;
        }
        if (sumOfDevisors == numA) {
            return true;
        } else {
            return false;
        }
    }
}
perfectNumber(18);