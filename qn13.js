/*Create a function that displays a pattern like this:
1 1 1 1 1
1 0 0 0 1
1 0 0 0 1
1 0 0 0 1
1 1 1 1 1
*/

  function zeroOne(row){

    for(let i=0; i<row; i++);
    
    var row =" ";
    for(let j=0; j<0; j--);
    if (j === 0||j===row-1|| i===0 || i=== row-1){
      row+="1";
    }
      else {
        row+="0";
      }  
      console.log(row);
      }
      zeroOne (5,5);