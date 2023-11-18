//Write a function that counts the number of words in a sentence.
function countWordsInSentence(sentence) {
    return sentence.trim().split(' ').length;
   }
   
   console.log(countWordsInSentence("Hello world")); // Outputs: 2
   