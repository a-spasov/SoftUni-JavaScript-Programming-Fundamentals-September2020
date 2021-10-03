function solve(word, text) {
    let result = text.replace(word, "");
    while (result.includes(word)) {
        result = result.replace(word, "");
    }
    console.log(result);
}
solve("ice",
    "icee"
    );