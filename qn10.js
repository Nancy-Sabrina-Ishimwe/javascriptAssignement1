/*Create a function that displays a patern like this:
* * * * *
* * * * *
* * * * *
* * * * *  */

function displayPattern(rows, columns) {
    for (let i = 0; i < rows; i++) {
      let line = '';
      for (let j = 0; j < columns; j++) {
        line += '* ';
      }
      console.log(line);
    }
   }
displayPattern(4, 5);
   