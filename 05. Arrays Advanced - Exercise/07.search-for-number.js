function solve(numbers, instructions) {
    let result = numbers.slice(0, instructions[0]);
    result.splice(0, instructions[1]);
    let count = result.filter( x => x == instructions[2]);
    console.log(`Number ${instructions[2]} occurs ${count.length} times.`);
}
solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]
    )