function solve(numA, numB, numC) {
    let result = sum(numA, numB);
    console.log(subtract(result, numC));

    function sum(i, j) {
        return i + j;   
    }
    function subtract(k, l) {
        return k - l;  
    }
}
solve(1,2,3);