/*Write a function that calculates the factorial of a number.*/

function factorialOfNum(num) {
    let result = 1;
    for (let n = 1; n <= num; n++) {
      result *= n;
    }
    return result;
   }
   
   console.log(factorialOfNum(5)); 
   