/*Create a function that recieves an array of numbers and return the average of the numbers*/
function averg(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    var average = sum / arr.length;
    return average;
}

var numbers = [2, 6, 9, 12, 7];
var averageResult = averg(numbers);
console.log(averageResult);