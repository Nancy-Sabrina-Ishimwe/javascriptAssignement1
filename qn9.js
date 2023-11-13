/*Create a function that combines two arrays into one single array. 
    Use the following arrays:
    arrayOne = [a,b,c,d]
    arrayTwo = [e,f,g]*/

    function combineArr(arrOne, arrTwo) {
        var combinedArray = arrOne.concat(arrTwo);
        return combinedArray;
    }
    var arrOne = ['a', 'b', 'c', 'd'];
    var arrTwo = ['e', 'f', 'g'];
    
    var resultArray = combineArr(arrOne, arrTwo);
    console.log(resultArray);  