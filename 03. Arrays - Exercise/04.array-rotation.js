function rotate(numbers, rotations) {
    for (let i = 1; i <= rotations; i++) {
        numbers.push(numbers[0]);
        numbers.shift();
    }
    console.log(numbers.join(" "));
}
rotate([1,2,3], 4);