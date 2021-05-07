function expenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalExpenses = 0;
    let brokenShields = 0;
    let shieldIsBroken = false;
    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 == 0) {
            totalExpenses += helmetPrice;
        }
        if (i % 3 == 0) {
            totalExpenses += swordPrice;
        }
        if (i % 2 == 0 && i % 3 == 0) {
            totalExpenses += shieldPrice;
            brokenShields++;
            if (brokenShields % 2 == 0) {
                shieldIsBroken = true;
            }
        }
        if (brokenShields % 2 == 0 && brokenShields != 0 && shieldIsBroken) {
            totalExpenses += armorPrice;
            shieldIsBroken = false;
        }
    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}
expenses(23,
    12.50,
    21.50,
    40,
    200
    );