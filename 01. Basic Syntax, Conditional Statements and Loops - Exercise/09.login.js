function logIn(input)  {
    let user = input[0];
    let pass = "";
    let counter = 0;
    for (let i = user.length - 1; i >= 0; i--) {
        pass += user[i];
    }
    for (let j = 1; j < input.length; j++) {
        counter++;
        if (pass == input[j]) {
            console.log(`User ${user} logged in.`);
        } else if (counter == 4) {
            console.log(`User ${user} blocked!`);
            break;
        } else {
            console.log("Incorrect password. Try again.");
        }
    }
}
logIn(["Acer", 
    "login", 
    "go", 
    "let me in", 
    "recA"]);