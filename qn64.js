//Write a function that generates a pyramid pattern of a given height.

function generatePyramid(height) {
    for (let i = 1; i <= height; i++) {
    let row = ' '.repeat(height - i) + '*'.repeat(i * 2 - 1);
    console.log(row);
    }
   }
   
   generatePyramid(5);
   