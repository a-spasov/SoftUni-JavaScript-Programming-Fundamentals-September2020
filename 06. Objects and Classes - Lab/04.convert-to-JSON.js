function solve(name, lastName, hairColor) {
    let person = {};
    person.name = name;
    person.lastName = lastName;
    person.hairColor = hairColor;
    let result = JSON.stringify(person);
    console.log(result);
}
solve();