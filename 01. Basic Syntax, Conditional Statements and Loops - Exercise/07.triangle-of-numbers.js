function triangle(numbA) {
    let output = "";
    for (let i = 1; i <= numbA; i++) {
        for (let j = 1; j <= i; j++) {
            output += i + " ";
        }
        console.log(output);
        output = "";
    }
}
triangle(4);