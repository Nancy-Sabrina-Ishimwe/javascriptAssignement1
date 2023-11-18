/*Functions Programming:
Power Function:
Implement a function to calculate the power of a number.

Array Max and Min:
Write a function that finds the maximum and minimum values in an array.

The sum of Digits:
Calculate the sum of digits of a given number using a function.

GCD (Greatest Common Divisor):
Write a function to find the greatest common divisor of two numbers.

Random Number Generator:
Create a function that generates a random number within a specified range.
*/

function power(base, exponent) {
    return Math.pow(base, exponent);
   }
   
   console.log(power(2, 3)); // 8

   function maxMin(arr) {
    return {
      max: Math.max(...arr),
      min: Math.min(...arr)
    };
   }
   
   console.log(maxMin([1, 2, 3, 4, 5])); // { max: 5, min: 1 }

   
   function sumOfDigits(num) {
    let str = num.toString();
    let arr = str.split('');
    let sum = arr.reduce((a, b) => a + parseInt(b), 0);
    return sum;
   }
   
   console.log(sumOfDigits(12345)); // 15

   
   function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
   }
   
   console.log(randomNumber(1, 10)); // a random number between 1 and 10
   