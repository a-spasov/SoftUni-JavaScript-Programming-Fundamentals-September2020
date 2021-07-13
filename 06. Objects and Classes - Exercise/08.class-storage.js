function solve() {
    class Storage {
        constructor(capacity, storage, totalCost) {
            this.capacity = capacity;
            this.storage = [];
            this.totalCost = 0;
        }
        addProduct(product) {
            this.storage.push(product);
            this.capacity -= product.quantity;
            this.totalCost += product.quantity*product.price;
        }
        getProducts() {
            let productList = this.storage;
            let result = [];
            for (let product of productList) {
                product = JSON.stringify(product);
                result.push(product);
                console.log(product);
            }
            return result.join("\n");
        }
    }
    let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
    let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
    let storage = new Storage(50);
    storage.addProduct(productOne);
    storage.addProduct(productTwo);
    let output = storage.getProducts();
    console.log(output);
    console.log(storage.capacity);
    console.log(storage.totalCost);
}
solve();
