function grades(grade) {
    if (grade >= 2 && grade <= 2.99) {
        console.log(`Fail (2)`);
    } else if (grade >=3 && grade <= 3.49) {
        console.log(`Poor (${grade.toFixed(2)})`);
    } else if (grade >= 3.5 && grade <= 4.49) {
        console.log(`Good (${grade.toFixed(2)})`);
    } else if (grade >= 4.5 && grade <= 5.49) {
        console.log(`Very good (${grade.toFixed(2)})`);
    } else if (grade >= 5.5 && grade <= 6) {
        console.log(`Excellent (${grade.toFixed(2)})`);
    }
}
grades();