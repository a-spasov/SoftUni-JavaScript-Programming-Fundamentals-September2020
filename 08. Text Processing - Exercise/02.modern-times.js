function solve(text) {
    let isValidWord = false;
    text = text.split(" ");
    for (let word of text) {
        if (word.length > 1 && word.startsWith("#")) {
            for (let i = 1; i < word.length; i++) {
                let charCode = word.charCodeAt(i);
                if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
                    isValidWord = true;
                } else {
                    isValidWord = false;
                    break;
                }
            }
            if (isValidWord) {
                console.log(word.substring(1, word.length));
            }
        }
    }
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia');