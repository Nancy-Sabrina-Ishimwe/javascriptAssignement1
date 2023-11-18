//Write a function that checks if a number is prime.

function isPrime(num) {
    if (num < 2 || isNaN(num) || !isFinite(num)) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
     if (num % i === 0) {
       return false;
     }
    }
    return true;
   }
   
   console.log(isPrime(2)); // Outputs: true
   console.log(isPrime(4)); // Outputs: false
   