function solve(string, iteration) {
    console.log(repeatString(string, iteration));

    function repeatString(string, iteration) {
        let result = "";
        for (let i = 1; i <= iteration; i++) {
            result += string;
        }
        return result;
    }
}

solve("aac", 2);