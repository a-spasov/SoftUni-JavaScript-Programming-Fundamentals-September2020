function solve(input) {
    let breakingPoints = [];
    let result = [];
    for (let charIndex in input) {
        charIndex = Number(charIndex);
        let charCode = input.charCodeAt(charIndex);
        if (charCode >= 65 && charCode <= 90) {
            breakingPoints.push(charIndex);
        }
    }
    for (let i = 0; i < breakingPoints.length; i++) {
        let start = breakingPoints[i];
        let end = breakingPoints[i + 1];
        result.push(input.substring(start, end));
    }
    console.log(result.join(", "));
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');