function solve(input) {
    let temporaryRanking = {};
    let racers = input.shift();
    let result = "";
    racers = racers.split(", ");
    for (let line of input) {
        let namePattern = /[A-Za-z]/g;
        let numbersPattern = /\d/g;
        let name = line.match(namePattern);
        let currentRacer = name.join("");
        let distance = line.match(numbersPattern);
        let currentDistance = 0;
        if (racers.includes(currentRacer)) {
            for (let km of distance) {
                currentDistance += Number(km);
            }
            if (temporaryRanking.hasOwnProperty(currentRacer)) {
                temporaryRanking[currentRacer] += currentDistance;
            } else {
                temporaryRanking[currentRacer] = currentDistance;
            }
        }
    }
    let finalResult = Object.entries(temporaryRanking);
    finalResult.sort((a,b) => b[1] - a[1]);
    let ranking = finalResult.slice(0,3);
    for (let i = 0; i < ranking.length; i++) {
        switch (i) {
            case 0:
                result += `1st place: ${ranking[i][0]}\n`;
                break;
            case 1:
                result += `2nd place: ${ranking[i][0]}\n`;
                break;
            case 2:
                result += `3rd place: ${ranking[i][0]}`
        }
    }
    console.log(result);
}
solve([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
  ]);