function solve(input) {
    let games = input[0].split(" ");
    let command = "";
    let commandArray = [];
    let action = "";
    let currentGame = "";
    let currentGameIndex = 0;
    for (let i = 1; i < input.length; i++) {
        command = input[i];
        if (command == "Play!") {
            break;
        }
        commandArray = command.split(" ");
        action = commandArray[0];
        currentGame = commandArray[1];
        if (action == "Install") {
            if (games.includes(currentGame)) {
                continue;
            } else {
                games.push(currentGame);
            }
        }
        if (action == "Uninstall") {
            if (games.includes(currentGame)) {
                currentGameIndex = games.indexOf(currentGame);
                games.splice(currentGameIndex, 1);
            }
        }
        if (action == "Update") {
            if (games.includes(currentGame)) {
                currentGameIndex = games.indexOf(currentGame);
                games.splice(currentGameIndex, 1);
                games.push(currentGame);
            }
        }
        if (action == "Expansion") {
            let expansionGame = currentGame.split("-");
            if (games.includes(expansionGame[0])) {
                currentGameIndex = games.indexOf(expansionGame[0]);
                games[currentGameIndex] = `${games[currentGameIndex]} ${expansionGame[0]}:${expansionGame[1]}`;
            }
        }
    }
    console.log(games.join(" "));
}
solve(['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']
);