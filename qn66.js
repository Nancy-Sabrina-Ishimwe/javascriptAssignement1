/*Loops on Arrays:
Array Sum:
Write a function that calculates the sum of all elements in an array.

Even Numbers:
Create a program that prints all even numbers from an array.

Array Reverse:
Implement a function to reverse the elements of an array.

Array Filter:
Write a program that filters out all elements less than 10 from an array.

Array Average:
Calculate and print the average of elements in an array.

Array Search:
Implement a function that searches for a specific element in an array and returns its index.

Duplicate Elements:
Write a program to find and print duplicate elements in an array.

Array Sorting:
Sort an array of numbers in ascending order using any sorting algorithm.

*/

function arraySum(array) {
    return array.reduce((a, b) => a + b, 0);
  }
  console.log(arraySum([1, 2, 3, 4, 5])); // Outputs: 15

  
  function printEvenNumbers(array) {
    array.forEach(num => {
        if(num % 2 === 0) {
            console.log(num);
        }
    });
  }
  printEvenNumbers([1, 2, 3, 4, 5]); // Outputs: 2, 4

  
  function arrayReverse(array) {
    return array.reverse();
  }
  console.log(arrayReverse([1, 2, 3, 4, 5])); // Outputs: [5, 4, 3, 2, 1]

  
  function arrayFilter(array) {
    return array.filter(num => num >= 10);
  }
  console.log(arrayFilter([1, 2, 3, 4, 5, 10, 11, 12])); // Outputs: [10, 11, 12]

  
  function arrayAverage(array) {
    const sum = array.reduce((a, b) => a + b, 0);
    return sum / array.length;
  }
  console.log(arrayAverage([1, 2, 3, 4, 5])); // Outputs: 3
  function arraySearch(array, element) {
    return array.indexOf(element);
  }
  console.log(arraySearch([1, 2, 3, 4, 5], 3)); // Outputs: 2

  function arraySearch(array, element) {
    return array.indexOf(element);
  }
  console.log(arraySearch([1, 2, 3, 4, 5], 3)); // Outputs: 2

  
  function arrayDuplicates(array) {
    return array.filter((item, index) => array.indexOf(item) !== index);
  }
  console.log(arrayDuplicates([1, 2, 2, 3, 4, 4, 5])); // Outputs: [2, 4]

  
  function arraySort(array) {
    return array.sort((a, b) => a - b);
  }
  console.log(arraySort([5, 3, 2, 4, 1])); // Outputs: [1, 2, 3, 4, 5]
  