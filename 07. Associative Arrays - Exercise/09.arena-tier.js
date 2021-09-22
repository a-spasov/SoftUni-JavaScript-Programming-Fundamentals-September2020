function solve(input) {
    let pool = {}; 
    for (let line of input) {
        if (line.includes("Ave Cesar")) {
            let ranking = {};
            let gladiators = Object.keys(pool);
            for (let gladiator of gladiators) {
                let totalScore = getTotalPoints(pool[gladiator]);
                ranking[gladiator] = totalScore;
            }
            let sortedRanking = Object.entries(ranking);
            sortedRanking.sort((a, b) => b[1] - a[1]);
            for (let [gladiator, points] of sortedRanking) {
                console.log(`${gladiator}: ${points} skill`);
                let sortedSkills = Object.entries(pool[gladiator]);
                sortedSkills.sort((a, b) => b[1] - a[1]);
                for (let [skill, points] of sortedSkills) {
                    console.log(`- ${skill} <!> ${points}`);
                }
            }
        }
        if (line.includes(" vs ")) {
            line = line.split(" vs ");
            let gladiator1 = line[0];
            let gladiator2 = line[1];
            if (pool.hasOwnProperty(gladiator1) && pool.hasOwnProperty(gladiator2)) {
                let gladiator1Skills = Object.keys(pool[gladiator1]);
                let gladiator2Skills = Object.keys(pool[gladiator2]);
                for (let skill of gladiator1Skills) {
                    if (gladiator2Skills.includes(skill)) {
                        let gladiator1Points = getTotalPoints(pool[gladiator1]);
                        let gladiator2Points = getTotalPoints(pool[gladiator2]);
                        if (gladiator1Points > gladiator2Points) {
                            delete pool[gladiator2];
                        } else {
                            delete pool[gladiator1];
                        }
                        break;
                    }
                }
                continue;
            } else {
                continue;
            }
        }
        if (line.includes(" -> ")) {
            line = line.split(" -> ");
            let gladiator = line[0];
            let skill = line[1];
            let points = Number(line[2]);
            if (pool.hasOwnProperty(gladiator)) {
                if (pool[gladiator].hasOwnProperty(skill)) {
                    if (pool[gladiator][skill] < points) {
                        pool[gladiator][skill] = points;
                    }
                } else {
                    pool[gladiator][skill] = points;
                } 
            } else {
                pool[gladiator] = {};
                pool[gladiator][skill] = points;
            }
        }
    }

    function getTotalPoints(gladiator) {
        let totalPoints = 0;
        for (let points of Object.values(gladiator)) {
            totalPoints += points;
        }
        return totalPoints;
    }
}
solve([
    'Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',  
    'Ave Cesar'
    ]);