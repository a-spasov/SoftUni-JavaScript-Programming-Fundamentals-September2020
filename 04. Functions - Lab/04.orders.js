function orders(product, quantity) {
    let totalCost = 0;
    switch (product) {
        case "coffee":
            totalCost = quantity*1.5;
            break;
        case "water":
            totalCost = quantity*1;
            break;
        case "coke":
            totalCost = quantity*1.4;
            break;
        case "snacks":
            totalCost = quantity*2;
            break;
    }
    console.log(totalCost.toFixed(2));
}
orders("coke", 3);