//Write a function that counts the number of consonants in a string.

function countConsonants(str) {
    let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
    if (consonants.includes(str[i].toLowerCase())) {
      count++;
    }
    }
    return count;
   }
   
   console.log(countConsonants("Hello")); 
   