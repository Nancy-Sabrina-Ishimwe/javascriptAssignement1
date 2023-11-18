//Write a function that sorts an array of numbers in ascending order.

function sortArray(arr) {
    return arr.sort((a, b) => a - b);
   }
   
   console.log(sortArray([5, 3, 8, 1, 4])); // Outputs: [1, 3, 4, 5, 8]
   