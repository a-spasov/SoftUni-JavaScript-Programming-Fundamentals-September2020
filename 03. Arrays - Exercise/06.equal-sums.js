function equalSum(numbers) {
    let sumLeftNumbers = 0;
    let sumRightNumbers = 0;
    let isEqual = false;
    for (let index in numbers) {
        for (let j = 0; j < numbers.length; j++) {
            if (j < index) {
                sumLeftNumbers += numbers[j];
            }
            if (j == index) {
                continue;
            }
            if (j > index) {
                sumRightNumbers += numbers[j];
            }
        }
        if (sumLeftNumbers == sumRightNumbers) {
            console.log(index);
            isEqual = true;
        } 
        sumLeftNumbers = 0;
        sumRightNumbers = 0;
    }
    if (!isEqual) {
        console.log("no");
    }
}
equalSum([1,0,3]);