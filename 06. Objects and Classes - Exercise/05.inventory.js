function solve(input) {
    let heroes = [];
    let sortedHeroes = [];
    let allHeroLevels = [];
    let name = "";
    let level = 0;
    let items = [];
    for (let line of input) {
        line = line.split(" / ");
        name = line[0];
        level = Number(line[1]);
        items = line[2];
        items = items.split(", ");
        items.sort();
        let hero = {};
        hero["hero"] = name;
        hero["level"] = level;
        hero["items"] = items;
        heroes.push(hero);
    }
    for (let hero of heroes) {
        allHeroLevels.push(hero.level);
    }
    allHeroLevels.sort((a, b) => a- b);
    for (let i = 0; i < allHeroLevels.length; i++) {
        for (let hero of heroes) {
            if (allHeroLevels[i] == hero.level) {
                sortedHeroes.push(hero);
            }
        }
    }
    for (let currentHero of sortedHeroes) {
        console.log(`Hero: ${currentHero.hero}`);
        console.log(`level => ${currentHero.level}`);
        console.log(`items => ${currentHero.items.join(", ")}`);
    }
}
solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
    ]
    );