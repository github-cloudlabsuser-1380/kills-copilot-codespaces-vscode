function reverseSentence(sentence) {
    // Split the sentence into an array of words
    const words = sentence.split(' ');

    // Reverse the order of the words
    const reversedWords = words.reverse();

    // Capitalize the first letter of the first word
    const capitalizedFirstWord = reversedWords[0].charAt(0).toUpperCase() + reversedWords[0].slice(1);

    // Replace the first word with the capitalized version
    reversedWords[0] = capitalizedFirstWord;

    // Join the words back into a sentence
    const reversedSentence = reversedWords.join(' ');

    return reversedSentence;
}

const inputSentence = 'hello world';
const reversedSentence = reverseSentence(inputSentence);
console.log(reversedSentence);