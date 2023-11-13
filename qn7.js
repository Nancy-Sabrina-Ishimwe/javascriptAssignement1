function MinVal(arr) {
    var minValue = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < minValue) {
            minValue = arr[i];
        }
    }

    return minValue;
}
var numbers = [4, 8, 90, 112, 5];
var minResult = MinVal(numbers);
console.log(minResult);