/*Write a function that counts the number of vowels in a string.*/

function countVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
     if (vowels.includes(str[i].toLowerCase())) {
       count++;
     }
    }
    return count;
   }
   
   console.log(countVowels("Hello")); 
   