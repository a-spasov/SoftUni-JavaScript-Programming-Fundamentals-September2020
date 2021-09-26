function solve(input) {
    for (let char of input) {
        if (input.includes(`${char}${char}`)) {
            input = input.replace(`${char}${char}`, `${char}`);
        }
    }
    console.log(input);
}
solve('aaaaabbbbbcdddeeeedssaa');