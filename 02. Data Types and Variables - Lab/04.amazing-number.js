function amazingNumber(numA) {
    let result = 0;
    let currentNuber = numA;
    while (currentNuber >= 1) {
        result += currentNuber % 10;
        currentNuber = Math.floor(currentNuber/10);
    }
    result = result.toString();
    if(result.includes(9)) {
        console.log(`${numA} Amazing? True`);
    } else {
        console.log(`${numA} Amazing? False`);
    }
}
amazingNumber(1233);