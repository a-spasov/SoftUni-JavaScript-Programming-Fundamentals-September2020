function solve(input) {
    let password = input[0].concat(input[1]);
    let word = input[2];
    let counter = 0;
    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (counter == word.length) {
            counter = 0;
        }
        if (char == "a" || char == "A" || char == "e" || char == "E" || char == "o" || char == "O" || char == "u" || char == "U" || char == "i" || char == "I") {
            password = password.substring(0, i) + word[counter].toUpperCase() + password.substring(i +1, password.length);
            counter++;
        }
    }
    password = password.split("").reverse();
    console.log(`Your generated password is ${password.join("")}`);
}
solve([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ]
    );