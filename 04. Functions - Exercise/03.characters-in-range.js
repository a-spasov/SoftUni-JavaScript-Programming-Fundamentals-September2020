function solve(firstChar, secondChar) {
    let chars = findCharCodes(firstChar, secondChar);
    console.log(characters(chars));

    function findCharCodes(x, y) {
        let charCodes = [];
        charCodes[0] = x.charCodeAt();
        charCodes[1] = y.charCodeAt();
        return charCodes;
    }
    function characters(inputRange) {
        let result = '';
        if (inputRange[0] < inputRange[1]) {
            for (let i = inputRange[0] + 1; i < inputRange[1]; i++) {
                result += String.fromCharCode(i) + " ";
            }
        } else {
            for (let i = inputRange[1] + 1; i < inputRange[0]; i++) {
                result += String.fromCharCode(i) + " ";
            }  
        }
        
        return result;
    }
}
solve ('C',
'#'
);