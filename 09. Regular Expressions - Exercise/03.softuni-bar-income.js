function solve(input) {
    let totalCost = 0;
    for (let line of input) {
        let namePattern = /\%[A-Z][a-z]+\%/;
        let productPattern = /\<\w+\>/;
        let quantityPattern = /\|\d+\|/;
        let pricePattern = /(\d+(\.[\d]+)?\$)/;
        let controlSymbol1 = line.match(/\%/g);
        let controlSymbol2 = line.match(/\|/g);
        let controlSymbol3 = line.match(/\./g);
        if (controlSymbol3 == null) {
            controlSymbol3 = [];
        }
        let controlSymbol4 = line.match(/\$/g);
        if (namePattern.test(line) && productPattern.test(line) && quantityPattern.test(line) && pricePattern.test(line)) {
            if (controlSymbol1.length == 2 && controlSymbol2.length == 2 && controlSymbol3.length <= 1 && controlSymbol4.length == 1) {
                let name = (namePattern.exec(line))[0];
                while (name.includes("%")) {
                    name = name.replace("%", "");
                }
                let product = (productPattern.exec(line))[0];
                product = product.replace("<", "");
                product = product.replace(">", "");
                let quantity = (quantityPattern.exec(line))[0];
                while (quantity.includes("|")) {
                    quantity = quantity.replace("|", "");
                }
                quantity = Number(quantity);
                let price = (pricePattern.exec(line))[0];
                price = price.replace("$", "");
                price = Number(price);
                let cost = (quantity*price).toFixed(2);
                cost = Number(cost);
                totalCost += cost;
                console.log(`${name}: ${product} - ${cost.toFixed(2)}`);
            }
        }
    }
    console.log(`Total income: ${totalCost.toFixed(2)}`);
}
solve([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
  ]);