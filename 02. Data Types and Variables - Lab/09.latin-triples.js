function solve(lettersNumber) {
    let output = "";
    let currentLetter = "";
    for (let i = 0; i < lettersNumber; i++) {
        currentLetter = String.fromCharCode(97 + i);
        output += currentLetter;
        for (let j = 0; j < lettersNumber; j++) {
            currentLetter = String.fromCharCode(97 + j);
            output += currentLetter;
            for (let k = 0; k < lettersNumber; k++) {
                currentLetter = String.fromCharCode(97 + k);
                output += currentLetter;
                console.log(output);
                output = output.slice(0, 2);
            }
            output = output.slice(0, 1);
        }
        output = "";
    }
}
solve(3);