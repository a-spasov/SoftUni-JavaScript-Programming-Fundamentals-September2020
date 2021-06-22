function solve(input) {
    let train = input.shift();
    let maxCapacity = input.shift();
    maxCapacity = Number(maxCapacity);
    let commandLine = "";
    let additionalWagon = 0;
    let passengers = 0;
    train = train.split(" ");
    train = train.map(Number);
    for (let i = 0; i < input.length; i++) {
        commandLine = input[i];
        if (commandLine.includes("Add")) {
            commandLine = commandLine.split(" ");
            passengers = Number(commandLine[1]);
            addWagon(train, passengers);
        } else {
            passengers = Number(commandLine);
            fillWagon(train, passengers);
        }
    }
    console.log(train.join(" ")); 

    function addWagon(inputTrain, inputWagon) {
        inputTrain.push(inputWagon);
        return inputTrain;
    }
    function fillWagon(inputTrain, inputPassengers) {
        for (let i = 0; i < inputTrain.length; i++) {
            let currentWagon = 0;
            let currentWagonCapacity =inputTrain[i];
            if (inputPassengers + currentWagonCapacity <= maxCapacity) {
                currentWagon = inputTrain.indexOf(currentWagonCapacity);
                inputTrain.splice(currentWagon, 1, inputPassengers + currentWagonCapacity);
                return inputTrain;
            }
        }
    }
}
solve(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
)