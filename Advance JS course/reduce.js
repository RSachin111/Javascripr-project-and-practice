//reduce method always return a value it wont make a new array
var arr = [2, 4, 6, 8, 10];
var result = arr.reduce(function (accumulator, value) {
  return accumulator + value / 2;
}, 0);

// The reduce function is called on the array arr.

// The callback function is executed for each element in the array.
// The callback function takes two parameters:
//     accumulator: The accumulated result.
//     value: The current element being processed.

// Iteration 1:

// accumulator (initially 0) + value (2) / 2 = 0 + 1 = 1

// Iteration 2:

// accumulator (1 from the previous iteration) + value (4) / 2 = 1 + 2 = 3

// Iteration 3:

// accumulator (3 from the previous iteration) + value (6) / 2 = 3 + 3 = 6

// Iteration 4:

// accumulator (6 from the previous iteration) + value (8) / 2 = 6 + 4 = 10

// Iteration 5:

// accumulator (10 from the previous iteration) + value (10) / 2 = 10 + 5 = 15

// Final Result:

// The final value of result is 15.


arr = [1,2,3,4,5,6,7]

arr2 = arr.reduce(function(h1,h2,h3){

    return h1+h2+h3

})

console.log(arr2)