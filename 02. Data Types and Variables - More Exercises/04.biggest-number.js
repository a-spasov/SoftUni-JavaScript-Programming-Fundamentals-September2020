function biggest(numA, numB, numC) {
    let max = numA;
    if (numB > max) {
        max = numB;
    }
    if (numC > max) {
        max = numC;
    }
    console.log(max);
}
biggest();