function reverse(char1, char2, char3) {
    let input = "";
    let output = "";
    input += char1 + char2 + char3;
    for (let i = input.length - 1; i >= 0; i--) {
        output += input[i] + " ";
    }
    console.log(output);
}
reverse();