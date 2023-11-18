//Write a function that converts an array of strings to uppercase.

function toUpperCaseArray(arr) {
    return arr.map(str => str.toUpperCase());
   }
   
   console.log(toUpperCaseArray(["hello", "world"])); // Outputs: ["HELLO", "WORLD"]
   