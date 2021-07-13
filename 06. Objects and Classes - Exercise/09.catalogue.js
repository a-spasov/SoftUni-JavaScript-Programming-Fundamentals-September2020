function solve(input) {
    let catalogue = {};
    let index = input[0][0];
    console.log(index);
    let currentIndex = "";
    input.sort();
    for (let line of input) {
        currentIndex = line[0];
        line = line.split(" : ");
        catalogue[line[0]] = Number(line[1]);
        if (currentIndex == index) {
            console.log(`  ${line[0]}: ${catalogue[line[0]]}`);
        } else {
            index = currentIndex;
            console.log(index);
            console.log(`  ${line[0]}: ${catalogue[line[0]]}`);
        }
    }
}
solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
  ]);