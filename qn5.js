/*Create a function that recieves an array and return the sum of all the elements inside that array*/

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
   }
   var total = sumArray([1, 2, 3, 4, 5]);
   console.log(total); 
      