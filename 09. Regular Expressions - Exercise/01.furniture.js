function solve(input) {
    let result = "Bought furniture:\n";
    let totalPrice = 0;
    for (let line of input) {
        let pattern = />>(?<furniture>[A-Za-z]+)<<(?<price>\d+(\.[\d]+)?)!(?<quantity>\d+)/g;
        let match = pattern.exec(line);
        if (match) {
            result += match.groups.furniture + '\n';
            totalPrice += Number(match.groups.price)*Number(match.groups.quantity);
        }
    } 
    result += `Total money spend: ${totalPrice.toFixed(2)}`;
    console.log(result);
}
solve([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ]);