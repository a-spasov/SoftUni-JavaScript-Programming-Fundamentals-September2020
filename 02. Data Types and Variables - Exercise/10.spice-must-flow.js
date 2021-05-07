function spiceFlow(startingYield) {
    let totalYield = 0;
    let days = 0;
    for (let i = startingYield; i >= 100; i = i - 10) {
        days++;
        totalYield += i - 26;
    }
    if (totalYield >=26) {
        totalYield -= 26;
    } else {
        totalYield = 0;
    }
    console.log(days);
    console.log(totalYield);
}
spiceFlow(0);