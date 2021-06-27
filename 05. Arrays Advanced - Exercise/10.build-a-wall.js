function solve(walls) {
    let cubicYardPerDay = 0;
    let cubicYardsDaily = [];
    let totalCubicYards = 0;
    let wallIndex = 0;
    let isDone = false;
    while(!isDone) {
        if (walls.includes(30)) {
            wallIndex = walls.indexOf(30);
            walls.splice(wallIndex, 1);
            continue;
        }
        if (walls.length == 0) {
            isDone = true;
            continue;
        }
        walls = walls.map(x => x + 1);
        cubicYardPerDay = walls.length*195;
        totalCubicYards += cubicYardPerDay;
        cubicYardsDaily.push(cubicYardPerDay);
    }
    console.log(cubicYardsDaily.join(", "));
    console.log(`${totalCubicYards*1900} pesos`);
}
solve([27,
    22,
    27,
    19,
    27]);