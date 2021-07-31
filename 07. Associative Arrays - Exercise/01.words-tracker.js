function wordsTracker(input) {
    let words = {};
    let trackingWords = input.shift();
    let count = 0;
    trackingWords = trackingWords.split(" ");
    for (let word of trackingWords) {
        words[word] = 0;
    }
    for (let currentWord of input) {
        if (words.hasOwnProperty(currentWord)) {
            count = words[currentWord];
            count++;
            words[currentWord] = count;
        }
    }
    let sorted = Object.entries(words);
    sorted.sort((a, b) => b[1] - a[1]);
    for (let [word, times] of sorted) {
        console.log(`${word} - ${times}`);
    }   
}
wordsTracker([
    'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
    ,'words','this','and','sentence','because','this','is','your','task'
    ]);