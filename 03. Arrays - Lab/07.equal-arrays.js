function equalArrays(array1, array2) {
    let sumOfElements = 0;
    let isIdentical = false;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] == array2[i]) {
            array1[i] = Number(array1[i]);
            sumOfElements += array1[i];
            isIdentical = true;
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isIdentical = false;
            break;
        }
    }
    if (isIdentical) {
        console.log(`Arrays are identical. Sum: ${sumOfElements}`);
    }
}
equalArrays();