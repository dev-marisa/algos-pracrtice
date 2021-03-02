/* 
Warmup

Write a function called `getMax( arr )` that takes an array and returns the largest value in it

Second to Max

Write a function called `getSecondToMax( arr )` that takes and array and returns the second largest value present in it, if the array is too short return null instead.
    
Example1: [41, 1, 4, Math.PI, 7] should return 7
Example2: [3, 15, 20, 8, 16, 10] should return 16
*/

function getMax(arr) {
    var largest = arr[0];
    for(var i=1; i<arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// console.log(getMax([-3, -7, -12, -4, -9]));

function getSecondToMax(arr) {
    var largest = arr[0];
    var second = arr[1];
    for(var i=1; i<arr.length; i++) {
        if(arr[i] > largest) {
            second = largest;
            largest = arr[i];
        } else if(arr[i] > second) {
            second = arr[i];
        }
    }
    return second;
}

console.log(getSecondToMax([0, 1, 3, 12, 30, 7, 4, 9]));