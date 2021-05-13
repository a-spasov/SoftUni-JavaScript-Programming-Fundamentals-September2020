function reverseArray(arrayElements, inputArr) {
    let newArr = [];
    for (let i = 0; i < arrayElements; i++) {
        newArr.push(inputArr[i]);
    }
    newArr = newArr.reverse();
    console.log(newArr.join(" "));
}
reverseArray(3, [1, 2, 3, 4, 5, 6]);