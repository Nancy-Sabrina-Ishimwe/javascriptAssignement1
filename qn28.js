/*Write a function that checks if a string is a palindrome.*/
function isPalindrome(str) {
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
   }
   
   console.log(isPalindrome("racecar")); // Outputs: true
   console.log(isPalindrome("hello")); // Outputs: false
   