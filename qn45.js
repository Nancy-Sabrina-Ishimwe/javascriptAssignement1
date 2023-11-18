//Write a function that calculates the sum of the even numbers in an array.

function sumEvenNumbers(arr) {
    return arr.reduce((sum, num) => num % 2 === 0 ? sum + num : sum, 0);
   }
   
   console.log(sumEvenNumbers([1, 2, 3, 4, 5])); // Outputs: 6
   