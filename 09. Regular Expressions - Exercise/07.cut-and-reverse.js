function solve(input) {
    let first = input.substring(0, input.length/2);
    let second = input.substring(input.length/2, input.length);
    console.log(reverse(first));
    console.log(reverse(second)); 

    function reverse(string) {
        let result = "";
        for (let i = string.length - 1; i >= 0; i--) {
            result += string[i];
        }
        return result;
    }
}
solve('tluciffiDsIsihTgnizamAoSsIsihT');