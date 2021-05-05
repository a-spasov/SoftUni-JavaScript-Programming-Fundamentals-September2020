function fuelMoney(distance, passengers, dieselPrice) {
    let neededFuel = (distance/100)*7 + passengers*0.1;
    let neededMoney = neededFuel*dieselPrice;
    console.log(`Needed money for that trip is ${neededMoney}lv.`);
}
fuelMoney();