//Write a function that checks if all elements in an array are positive.
function areAllPositive(arr) {
    return arr.every(num => num > 0);
   }
   
   console.log(areAllPositive([1, 2, 3, 4, 5])); // Outputs: true
   console.log(areAllPositive([1, -2, 3, 4, 5])); // Outputs: false
   