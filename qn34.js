/*Create a function called “stringModifier”. This function allows a user to provide a string, and then provide the position 
they want to modify, and a character to replace the modified one from the string. 
This function will receive 3 arguments the first argument will be a string, the second will be the position of a specific.*/

function stringModifier(str, position, char) {
    if (position < 0 || position >= str.length) {
      return str;
    }
    return str.substring(0, position) + char + str.substring(position + 1);
   }
   
   console.log(stringModifier("Hello", 1, 'a')); // Outputs: "Hallo"
   