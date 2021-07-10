function solve(input) {
    let employees = [];
    class Employee {
        constructor(name) {
            this.name = name;
            this.personalNumber = name.length;
        }
    }
    for (let currentName of input) {
        let employee = new Employee(currentName);
        employees.push(employee);
    }
    employees.forEach((element) => console.log(`Name: ${element.name} -- Personal Number: ${element.personalNumber}`));
}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );