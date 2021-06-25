function solve(numbers, commands) {
    let commandArray = [];
    for (let command of commands) {
        if (command == "print") {
            console.log(`[ ${numbers.join(", ")} ]`);
            break;
        }
        commandArray = command.split(" ");
        if (commandArray.includes("add")) {
            add(commandArray[1], commandArray[2], numbers);
        }
        if (commandArray.includes("addMany")) {
            commandArray.shift();
            numbers = addMany(commandArray, numbers);
        }
        if (commandArray.includes("contains")) {
            console.log(contains(commandArray[1], numbers));
        }
        if (commandArray.includes("remove")) {
            remove(commandArray[1], numbers);
        }
        if (commandArray.includes("shift")) {
            numbers = shift(commandArray[1], numbers);
        }
        if (commandArray.includes("sumPairs")) {
            numbers = sumPairs(numbers);
        }
    }

    function add(index, numberA, numbersArray) {
        index = Number(index);
        numberA = Number(numberA)
        numbersArray.splice(index, 0, numberA);
        return numbersArray;
    }
    function addMany(newNumbers, numbersArray) {
        newNumbers = newNumbers.map(Number);
        let index = newNumbers.shift();
        let firstNumbers = numbersArray.slice(0, index);
        let lastNumbers= numbersArray.slice(index, numbersArray.length);
        let result = firstNumbers.concat(newNumbers);
        result = result.concat(lastNumbers);
        return result;
    }
    function contains(numberA, numbersArray) {
        let result = -1;
        numberA = Number(numberA);
        if (numbersArray.includes(numberA)) {
            result = numbersArray.indexOf(numberA);
        }
        return result;
    }
    function remove(index, numbersArray) {
        index = Number(index);
        numbersArray.splice(index, 1);
        return numbersArray;
    }
    function shift(positions, numbersArray) {
        let firstElement = 0;
        positions = Number(positions);
        for (let i = 1; i <= positions; i++) {
            firstElement = numbersArray.shift();
            numbersArray.push(firstElement);
        }
        return numbersArray;
    }
    function sumPairs(numbersArray) {
        let newElement = 0;
        let result = [];
        for (let i = 0; i < numbersArray.length; i = i + 2) {
            if ((numbersArray.length % 2 != 0) && (i == numbersArray.length - 1)) {
                newElement = numbersArray[i];
            } else {
                newElement = numbersArray[i] + numbersArray[i + 1];
            }
            result.push(newElement);
        }
        return result;
    }
}
solve([1, 3, 6],
    ['add 1 2', 'addMany 3 4 5', 'contains 1', 'remove 0', 'shift 1', 'sumPairs', 'print']
    )