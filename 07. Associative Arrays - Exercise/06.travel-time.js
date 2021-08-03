function solve(input) {
    let countries = {};
    let result = [];
    for (let line of input) {
        line = line.split(" > ");
        let country = line[0];
        let town = line[1];
        let cost = Number(line[2]);
        if (countries.hasOwnProperty(country)) {
            if (Object.keys(countries[country]).includes(town)) {
                let currentCost = countries[country][town];
                if (currentCost > cost) {
                    countries[country][town] = cost;            
                }
            } else {
                countries[country][town] = cost;            
            }
        } else {
            countries[country] = {};
            countries[country][town] = cost;
        }
    }
    let sortedCountries = Object.entries(countries);
    sortedCountries.sort((a, b) => a[0].localeCompare(b[0]));
    for (let [country, towns] of sortedCountries) {
        result.push(country + " ->");
        let sortedTowns = Object.entries(towns);
        sortedTowns.sort((a, b) => a[1] - b[1]);
        for (let [town, cost] of sortedTowns) {
            result.push(town + " -> " + cost);
        }
        console.log(result.join(" "));
        result = [];
    }
}
solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    );