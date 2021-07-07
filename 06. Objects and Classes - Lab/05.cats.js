function solve(input) {
    let name = "";
    let age = 0;
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.speak = () => {
                console.log(`${name}, age ${age} says Meow`);
            }
        }
    }
    for (let currentCat of input) {
        currentCat = currentCat.split(" ");
        name = currentCat[0];
        age = Number(currentCat[1]);
        let cat = new Cat(name, age);
        cat.speak();
    }
}
solve();