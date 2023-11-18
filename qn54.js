//Write a function that capitalizes the first letter of each word in a sentence.

function capitalizeFirstLetterOfEachWord(sentence) {
    return sentence.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
   }
   
   console.log(capitalizeFirstLetterOfEachWord("hello world")); // Outputs: "Hello World"
   