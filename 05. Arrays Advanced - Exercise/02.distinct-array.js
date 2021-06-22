function distinctArray(numbers) {
    let currentNumber = 0;
    let nextNumber = 0;
    let indexOfSameNumber = 0;
    for (let i = 0; i < numbers.length; i++) {
        currentNumber = numbers[i];
        for (let j = i + 1; j < numbers.length; j++) {
            nextNumber = numbers[j];
            indexOfSameNumber = j;
            if (currentNumber == nextNumber) {
                numbers.splice(indexOfSameNumber, 1); 
                if (currentNumber == numbers[j]) {
                    numbers.splice(j, 1);
                }             
            }
        }
    }
    console.log(numbers.join(" "));
}
distinctArray([1, 1, 1, 1, 1]);