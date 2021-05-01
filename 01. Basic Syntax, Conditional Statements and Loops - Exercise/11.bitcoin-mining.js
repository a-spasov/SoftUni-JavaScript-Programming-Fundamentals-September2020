function bitcoinMining(input) {
    let gold = 0;
    let money = 0;
    let days = 0;
    let bitcoins = 0;
    let dayOfPurchasedBitcoin = 0;
    for (let i = 0; i < input.length; i++) {
        days++;
        gold = Number(input[i]);
        if (days % 3 == 0) {
            gold = 0.7*gold;
        }
        money += gold*67.51;  
        while (money >= 11949.16) {
            if (bitcoins == 0) {
                dayOfPurchasedBitcoin = days;
            }
            money -= 11949.16;
            bitcoins++;
        }
    }
    console.log(`Bought bitcoins: ${bitcoins}`);
    if (bitcoins != 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfPurchasedBitcoin}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
bitcoinMining([100, 200, 300]);