let sentence = prompt("Enter Text Here");

function findLargestWord(sentence) {
    let words = sentence.split(' ');
    let largestWord = '';

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > largestWord.length) {
            // largestWord = words[i];
        }
    }

//     return largestWord;
}

// let largestWord = findLargestWord(sentence);
// console.log("The largest word is:", largestWord);
