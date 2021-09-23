function solve(text, word) {
    let replacement = "*".repeat(word.length);
    while (text.includes(word)) {
        text = text.replace(word, replacement);
    }
    console.log(text);
}
solve("smallest sentence with small words smalle", "small");