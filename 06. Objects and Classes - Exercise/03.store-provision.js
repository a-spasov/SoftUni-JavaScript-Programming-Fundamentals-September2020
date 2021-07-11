function solve(stockProducts, orderedProducts) {
    let currentProduct = "";
    let productQuantity = 0;
    let indexOfProduct = 0;
    let indexOfQuantity = 0;
    let quantity = 0;
    let store = [];
    for (let i = 0; i < orderedProducts.length; i++) {
        if (i % 2 != 0) {
            continue;
        }
        currentProduct = orderedProducts[i]; 
        productQuantity = orderedProducts[i + 1];
        if (stockProducts.includes(currentProduct)) {
            indexOfProduct = stockProducts.indexOf(currentProduct);
            indexOfQuantity = indexOfProduct + 1;
            quantity = Number(stockProducts[indexOfQuantity]) + Number(productQuantity);
            stockProducts[indexOfQuantity] = quantity.toString();
        } else {
            stockProducts.push(currentProduct);
            stockProducts.push(productQuantity);
        }
    }
    for (let j = 0; j < stockProducts.length; j++) {
        if (j % 2 != 0) {
            continue;
        }
        currentProduct = stockProducts[j]; 
        productQuantity = stockProducts[j + 1];
        store[currentProduct] = productQuantity;
    }
    for (let [key, value] of Object.entries(store)) {
        console.log(`${key} -> ${value}`);
    }
}
solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )