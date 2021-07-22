function solve(input) {
    let neighborhoods = new Map();
    let neighborhoodList = input.shift();
    let names = [];
    neighborhoodList = neighborhoodList.split(", ");
    for (let neighborhood of neighborhoodList) {
        neighborhoods.set(neighborhood, []);
    }
    for (let line of input) {
        line = line.split(" - ");
        let neighborhood = line[0];
        let name = line[1];
        if (neighborhoods.has(neighborhood)) {
            names = neighborhoods.get(neighborhood);
            names.push(name);
            neighborhoods.set(neighborhood, names);
        }
    }
    let sorted = Array.from(neighborhoods);
    sorted.sort((a, b) => b[1].length - a[1].length);
    for (let [neighborhood, names] of sorted) {
        console.log(`${neighborhood}: ${names.length}`);
        for (let name of names) {
            console.log(`--${name}`);
        }
    }
}
solve(['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']
);