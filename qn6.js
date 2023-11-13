/*Create a function that recieves an array and returns the greates value inside that array*/
function MaximumVal(arr) {
    var maxValue = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        }
    }

    return maxValue;
}
var numbers = [4, 8, 90, 112, 5];
var maxResult = MaximumVal(numbers);
console.log(maxResult);