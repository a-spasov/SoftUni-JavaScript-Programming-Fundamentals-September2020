function solve(input) {
    let words = new Map();
    let count = 0;
    for (let currentWord of input) {
        if (words.has(currentWord)) {
            count = words.get(currentWord);
            count++;
            words.set(currentWord, count);
        } else {
            words.set(currentWord, 1);
        }
    }
    let sorted = Array.from(words);
    sorted.sort((a,b) => b[1] - a[1]);
    for (let [word, times] of sorted) {
        console.log(`${word} -> ${times} times`)
    }
}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);