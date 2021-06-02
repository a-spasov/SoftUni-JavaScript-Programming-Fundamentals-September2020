function solve(numA, numB, numC) {
    console.log(smallestNumber(numA, numB, numC));

    function smallestNumber(numA, numB, numC) {
        let smallest = numA;
        if (smallest > numB) {
            smallest = numB;
        }
        if (smallest > numC) {
            smallest = numC;
        }
        return smallest;
    }
}
solve(1,23,-1);