function ladybugsFlight(input) {
    let fieldSize = input[0];
    let initialPozitions = (input[1]).split(' ');
    let command = "";
    let commandArray = [];
    let currentLadybug = 0;
    let stepOfFlight = 0;
    let ladybugs = [];
    for (let i = 0; i < initialPozitions.length; i++) {
        ladybugs[initialPozitions[i]] = 1;
    }
    for (let j = 0; j < fieldSize; j++) {
        if (ladybugs[j] != 1) {
            ladybugs[j] = 0;
        }
    }
    for (let k = 2; k < input.length; k++) {
        command = input[k];
        commandArray = command.split(" ");
        if (command.includes("right")) {
            currentLadybug = Number(commandArray[0]);
            stepOfFlight = Number(commandArray[2]);
            if (ladybugs[currentLadybug] == 1) {
                ladybugs[currentLadybug] = 0;
                currentLadybug += stepOfFlight;
                while (ladybugs[currentLadybug] == 1) {
                    currentLadybug += stepOfFlight;
                }
                if (ladybugs[currentLadybug] == 0) {
                    ladybugs[currentLadybug] = 1;
                }
            }
        }
        if (command.includes("left")) {
            currentLadybug = Number(commandArray[0]);
            stepOfFlight = Number(commandArray[2]);
            if (ladybugs[currentLadybug] == 1) {
                ladybugs[currentLadybug] = 0;
                currentLadybug -= stepOfFlight;
                while (ladybugs[currentLadybug] == 1) {
                    currentLadybug -= stepOfFlight;
                }
                if (ladybugs[currentLadybug] == 0) {
                    ladybugs[currentLadybug] = 1;
                }
            }
        }
    }
    console.log(ladybugs.join(" "));
}
ladybugsFlight([ 4, '0', '0 right 1', '3 left 1' ]);