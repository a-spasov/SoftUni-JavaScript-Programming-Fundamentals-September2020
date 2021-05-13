function reverseArray(input) {
    let storedLeftElement;
    let storedRightElement;
    for (let i = 0; i < input.length/2; i++) {
        storedLeftElement = input[i];
        storedRightElement = input[input.length - 1 - i];
        input[i] = storedRightElement;
        input[input.length - 1 - i] = storedLeftElement;
    }
    console.log(input.join(" "));
}
reverseArray([1, 2, 3, 4, 5]);