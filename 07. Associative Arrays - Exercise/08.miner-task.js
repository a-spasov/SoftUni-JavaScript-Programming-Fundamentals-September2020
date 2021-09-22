function solve(input) {
    let mine = {};
    for (let i = 0; i < input.length; i = i + 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);
        if (mine.hasOwnProperty(resource)) {
            mine[resource] += quantity;
        } else {
            mine[resource] = quantity;
        }
    }
    for (let [resource, quantity] of Object.entries(mine)) {
        console.log(`${resource} -> ${quantity}`);
    }
}
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]);