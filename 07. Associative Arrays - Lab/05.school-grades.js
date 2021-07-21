function solve(input) {
    let schoolGrades = new Map();
    let name = "";
    let grades = [];
    for (let line of input) {
        line = line.split(" ");
        name = line.shift();
        grades = line.map(Number);
        if (!schoolGrades.has(name)) {
            schoolGrades.set(name, []);
        }
        let existing = schoolGrades.get(name);
        for (let grade of grades) {
            existing.push(grade);
        }
    }
    let sorted = Array.from(schoolGrades);
    sorted.sort((a, b) => compareAverage(a, b));
    for (let [name, grades] of sorted) {
        console.log(`${name}: ${grades.join(", ")}`);
    }

    function compareAverage(a, b) {
        let sumA = 0;
        let sumB = 0;
        for (let i = 0; i < a[1].length; i++) {
            sumA += Number(a[1][i]);
        }
        sumA = sumA/a[1].length;
        for (let j = 0; j < b[1].length; j++) {
            sumB += Number(b[1][j]);
        }
        sumB = sumB/b[1].length;

        return sumA - sumB;
    }
}
solve(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
);