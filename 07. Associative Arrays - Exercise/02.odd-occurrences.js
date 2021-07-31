function solve(input) {
    let words = new Map();
    let count = 0;
    let result = [];
    input = input.split(" ");
    for (let currentWord of input) {
        currentWord = currentWord.toLowerCase();
        if (words.has(currentWord)) {
            count = words.get(currentWord);
            count++;
            words.set(currentWord, count);
        } else {
            words.set(currentWord, 1);
        }
    }
    for (let [word, count] of words) {
        if (count % 2 != 0) {
            result.push(word);
        }
    }
    console.log(result.join(" "));
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');