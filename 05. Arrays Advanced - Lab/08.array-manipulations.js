function solve(input) {
    let numbers = input.shift();
    let commandLine = "";
    let commandArray = [];
    let command = "";
    let currentNumber = 0;
    let indexOfNumber = 0;
    numbers = numbers.split(" ");
    numbers =  numbers.map(Number);
    for (let i = 0; i < input.length; i++) {
        commandLine = input[i];
        commandArray = commandLine.split(" ");
        command = commandArray[0];
        currentNumber = Number(commandArray[1]);
        switch (command) {
            case "Add":
                add(numbers, currentNumber);
                break;
            case "Remove":
                remove(numbers, currentNumber);
                break;
            case "RemoveAt":
                removeAt(numbers, currentNumber);
                break;
            case "Insert":
                indexOfNumber = Number(commandArray[2]);
                insertAt(numbers, currentNumber, indexOfNumber);
                break;
        }
    }
    console.log(numbers.join(" "));

    function add(inputArray, number) {
        let newArray = inputArray.push(number);
        return newArray;
    }
    function remove(inputArray, number) {
        let index = inputArray.indexOf(number);
        if (inputArray.includes(number)) {
            inputArray.splice(index, 1);
        }
        return inputArray;
    }
    function removeAt(inputArray, index) {
        inputArray.splice(index, 1);
        return inputArray;
    }
    function insertAt(inputArray, number, index) {
        inputArray.splice(index, 0, number);
        return inputArray;
    }
}
solve(['4 6',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']);
