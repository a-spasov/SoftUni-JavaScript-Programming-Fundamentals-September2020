function commonElements(array1, array2) {
    if ( array1.length > array2.length) {
        for (let element of array1) {
            if (array2.includes(element)) {
                console.log(element);
            }
        }
    } else {
        for (let element of array2) {
            if (array1.includes(element)) {
                console.log(element);
            }
        }
    }
}
commonElements();