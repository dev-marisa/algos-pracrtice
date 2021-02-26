/* 

Odds or Evens 

Given an array, determine if the value of the odd indexes added together are 
larger than the even indexes added together

Example array:
[2, 5, 3, -1, 4, 4, 6]

var evens = 2 + 3 + 4 + 6
var odds = 5 + -1 + 8

return odds > evens

*/

// Step 1 - write a function to take in an array
function oddsOrEvens(arr) {
    var odds = 0;
    var evens = 0;
    // Step 2 - loop through the array
    for(var i=0; i<arr.length; i++) {
        // Step 3 - write a condition (if) that checks if the index is odd or even
        if(i % 2 == 1) {
            // Step 3a - add the odd indexes to a variable called "odds"
            odds += arr[i];
        } else {
            // Step 3b - add the even indexes to a variable called "evens"
            evens += arr[i];
        }
    }
    // at the end we want to return if odds are larger than evens
    if(odds > evens) {
        return "odds are greater than evens";
    } else {
        return "odds are NOT greater than evens";
    }
}

console.log(oddsOrEvens([2, 5, 3, -1, 4, 14, 6]));


// var res = "";
// for(var i=0; i<10; i++) {
//     res += "**";
//     console.log(res);
// }


// console.log(5 % 2);
// console.log(5 % 2 == 0);