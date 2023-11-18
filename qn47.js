//Write a function that generates a random number between a given range.

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
   }
   
   console.log(randomNumber(1, 100)); // Outputs a random number between 1 and 100
   