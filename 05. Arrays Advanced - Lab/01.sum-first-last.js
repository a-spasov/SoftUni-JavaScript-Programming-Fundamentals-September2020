function sumElements(inputNumbers) {
    let firstElement = getFirstElement(inputNumbers);
    let lastElement = getLastElement(inputNumbers);
    let sum = firstElement + lastElement;
    console.log(sum);

    function getFirstElement(input) {
        let element = Number(input.shift());
        return element;
    }
    function getLastElement(input) {
        let element = Number(input.pop());
        return element;
    }
}
sumElements(["20","30","40"]);