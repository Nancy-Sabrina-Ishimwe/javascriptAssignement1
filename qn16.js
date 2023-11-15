/*Given an array like this: 
var some numbers = [3,4,8,2,1,2,2,6,3,4];
Create a function to sort and arrange these elements of the array in ascending order.
Modify the first array to make sure that it will also display the last 3 numbers and the first 3 numbers in front of the sorted array
From the same sorted array, also display the first 3 numbers. */


function sortAndArrange(arr) {
    arr.sort((a, b) => a - b);
    var lastThreeNumbers = arr.slice(-3);
    console.log(lastThreeNumbers);
   }
   var numbers = [3,4,8,2,1,2,2,6,3,4];
   sortAndArrange(numbers);
   