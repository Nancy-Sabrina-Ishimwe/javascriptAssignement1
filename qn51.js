//Write a function that filters out negative numbers from an array.

function filterNegatives(arr) {
    return arr.filter(num => num >= 0);
   }
   
   console.log(filterNegatives([1, -2, 3, -4, 5])); // Outputs: [1, 3, 5]
   