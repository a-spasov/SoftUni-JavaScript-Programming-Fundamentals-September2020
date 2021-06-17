function smallestTwoNumbers(numbers) {
    let sorted = numbers.sort((a,b) => a - b);
    let firstTwoNumbers = sorted.slice(0,2);
    console.log(firstTwoNumbers.join(" "));
}
smallestTwoNumbers([2,5,1,8,3]);