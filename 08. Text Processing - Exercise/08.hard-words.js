function solve(input){
    let letter = input.shift();
    let words = input[0];
    for (let word of words) {
        let gap = "_".repeat(word.length);
        if (letter.includes(` ${gap} `)) {
            letter = letter.replace(` ${gap} `, ` ${word} `);
        }
        if (letter.includes(` ${gap}.`)) {
            letter = letter.replace(` ${gap}.`, ` ${word}.`);
        }
        if (letter.includes(` ${gap},`)) {
            letter = letter.replace(` ${gap},`, ` ${word},`);
        }
        if (letter.includes(` ${gap}!`)) {
            letter = letter.replace(` ${gap}!`, ` ${word}!`);
        }
        if (letter.includes(` ${gap}?`)) {
            letter = letter.replace(` ${gap}?`, ` ${word}?`);
        }
    }
    console.log(letter);
}
solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)