function solve(input) {
    let players = {};
    let score = 0;
    for (let line of input) {
        line = line.split(": ");
        let name = line[0];
        let cards = new Set(line[1].split(", "));
        if (Object.keys(players).includes(name)) {
            cards.forEach(x => players[name].add(x));
        } else {
            players[name] = cards;
        } 
    }
    for (let [name, cards] of Array.from(Object.entries(players))) {
        for (let currentCard of cards) {
            let power = currentCard[0];
            let type = currentCard[1];
            if (currentCard.length > 2) {
                power = 10;
                type = currentCard[2];
            }
            switch (power) {
                case "J":
                    power = 11;
                    break;
                case "Q":
                    power = 12;
                    break;
                case "K":
                    power = 13;
                    break;
                case "A":
                    power = 14;
                    break;
                default:
                    power = Number(power);
            }
            switch (type) {
                case "S":
                    type = 4;
                    break;
                case "H":
                    type = 3;
                    break;
                case "D":
                    type = 2;
                    break;
                case "C":
                    type = 1;
                    break;
            }
            score += power*type;
        }
        console.log(`${name}: ${score}`);
        score = 0;
    }
}
solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    );