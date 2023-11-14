/*Create a function that displays a pattern like this:
1 1 1 1 1
1 1 1
1 1 
1
*/

function trianglePatern(rows) {
    for (let i = rows; i>=1 ; i--) {
     console.log('1 '.repeat(i));
   }
   }
   trianglePatern(4,5);
