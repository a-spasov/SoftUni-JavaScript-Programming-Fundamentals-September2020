function solve(input) {
    let name = "";
    let latitude = 0;
    let longitude = 0;
    let town = {};
    for (let line of input) {
        line = line.split(" | ");
        name = line[0];
        latitude = Number(line[1]);
        latitude = latitude.toFixed(2);
        longitude = Number(line[2]);
        longitude = longitude.toFixed(2);
        town.town = name;
        town.latitude = latitude;
        town.longitude = longitude;
        console.log(town);
    }
}
solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);