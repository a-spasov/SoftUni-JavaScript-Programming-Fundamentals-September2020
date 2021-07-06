function solve(jsonString) {
    let currentObject = JSON.parse(jsonString);
    for (let [key, value] of Object.entries(currentObject)) {
        console.log(`${key}: ${value}`);
    }
}
solve();