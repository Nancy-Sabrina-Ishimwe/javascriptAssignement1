/*Create a function that returns the difference of 2 numbers*/

function difference (num1, num2) {
    if (num1 > num2) {
      return num1 - num2
    } else {
      return num2 - num1
    }
  }
  var result=difference(12,4);
  console.log(result);