function solve(input) {
    let dictionary = {};
    let sortedDictionary = [];
    let key = "";
    let value = "";
    for (let line of input) {
        line = line.split('":"');
        key = line[0].slice(2);
        value = line[1].slice(0,line[1].length - 2);
        dictionary[key] = value;
    }
    sortedDictionary = Object.entries(dictionary);
    sortedDictionary.sort();
    for (let [key, value] of sortedDictionary) {
        console.log(`Term: ${key} => Definition: ${value}`);
    }
}
solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )