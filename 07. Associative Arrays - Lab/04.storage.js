function solve(input) {
    let mapArr = new Map();
    for (let line of input) {
        let [key, value] = line.split(" ");
        value = Number(value);
        if (mapArr.has(key)) {
            let currentQuantity = mapArr.get(key);
            currentQuantity += value;
            mapArr.set(key, currentQuantity);
        } else {
            mapArr.set(key, value);
        }
    }
    let entries = Array.from(mapArr.entries());
    for (let [product, quantity] of entries) {
        console.log(`${product} -> ${quantity}`);
    }
}
solve(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
);