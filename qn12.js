/*Create a function that displays a pattern like this:
1 1 1 1 
1 1 1 0  
1 1 0 0  
1 0 0 0  
*/

function squarePatern(rows,cols) {
    for (let i = rows; i>=1 ; i--) {
     console.log('1 '.repeat(i) + '0 '.repeat(rows - i));
   }
}
  squarePatern(4,5);