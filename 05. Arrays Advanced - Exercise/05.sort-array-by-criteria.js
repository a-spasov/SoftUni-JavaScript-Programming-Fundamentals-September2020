function solve(inputStrings) {
    let output = [];
    let currentSubArray = [];
    let sortedByLength = inputStrings.sort((a, b) => a.length - b.length);
    let firstStringLength = sortedByLength[0].length;
    let lastStringLength = sortedByLength[sortedByLength.length - 1].length;
    for (let i = firstStringLength; i <= lastStringLength; i++) {
        for (let currentString of sortedByLength) {
            if (currentString.length == i) {
                currentSubArray.push(currentString);
            } 
        }
        currentSubArray.sort();
        for (let element of currentSubArray) {
            console.log(element);
        } 
        currentSubArray = [];
    }  
    
}
solve(["ba", "aaa", "aa"]);