//Write a function that checks if a given string contains only digits.

function containsOnlyDigits(str) {
    return /^\d+$/.test(str);
   }
   
   console.log(containsOnlyDigits("123")); // Outputs: true
   console.log(containsOnlyDigits("123abc")); // Outputs: false
   