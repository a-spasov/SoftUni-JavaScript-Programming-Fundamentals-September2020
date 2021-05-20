function mergedArrays(array1, array2) {
    let mergedArray = [];
    for (let index in array1) {
        if (index % 2 == 0) {
            mergedArray.push(Number(array1[index]) + Number(array2[index]));
        } else {
            mergedArray.push(array1[index] + array2[index]);
        }
    }
    console.log(mergedArray.join(" - "));
}
mergedArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)