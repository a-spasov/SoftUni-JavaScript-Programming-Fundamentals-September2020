function division(numbA) {
    if (numbA % 10 == 0) {
        console.log(`The number is divisible by 10`);
    } else if (numbA % 7 == 0) {
        console.log(`The number is divisible by 7`);
    } else if (numbA % 6 == 0) {
        console.log(`The number is divisible by 6`);
    } else if (numbA % 3 == 0) {
        console.log(`The number is divisible by 3`);
    } else if (numbA % 2 == 0) {
        console.log(`The number is divisible by 2`);
    } else {
        console.log("Not divisible");
    }
}
division(56);