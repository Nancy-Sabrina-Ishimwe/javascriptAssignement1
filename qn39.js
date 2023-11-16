//Write a function that checks if a given value is present in an array.

function checkIfPresent(arr, value) {
    return arr.includes(value);
   }
   
   console.log(checkIfPresent([1, 2, 3, 4, 5], 3)); 
   console.log(checkIfPresent([1, 2, 3, 4, 5], 6)); 
   