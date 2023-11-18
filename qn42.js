//Write a function that removes the last element from an array.

function removeDuplicates(arr) {
    return [...new Set(arr)];
   }
   
   console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Outputs: [1, 2, 3, 4, 5]
   