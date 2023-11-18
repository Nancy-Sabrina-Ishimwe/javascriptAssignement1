//Write a function that finds the median of an array of numbers.

function findMedian(arr) {
    // Sort the array in ascending order
    const sortedArr = arr.sort((a, b) => a - b);
    
    // Find the middle index of the array
    const middleIndex = Math.floor(sortedArr.length / 2);
    
    // If the array length is odd, the median is the middle element
    if (sortedArr.length % 2 !== 0) {
      return sortedArr[middleIndex];
    }
    
    // If the array length is even, the median is the average of the two middle elements
    return (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2;
   }
   
   console.log(findMedian([1, 2, 3, 4, 5])); // Outputs: 3
   console.log(findMedian([1, 2, 3, 4])); // Outputs: 2.5
   