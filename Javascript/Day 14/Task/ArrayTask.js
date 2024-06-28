// Task 1 : Find Maximum Element
// var numbers = [23, 45, 67, 12,101, 89, 34];
// var max = numbers[0];

// for(var i=1;i<numbers.length;i++){
//     // console.log(numbers[i])
//     if( numbers[i] > max){
//        max = numbers[i]
//     }
// }
// console.log(max)

// Task 2: Reverse Array
// var numbers = [1, 2, 3, 4, 5];
//  var reversed = []
// // numbers.reverse()
// // console.log(numbers)
// for(var i = numbers.length -1; i >=0; i--){
//     reversed.push(numbers[i]);
// }

// console.log(reversed)

// Task 3 : Find Unique Elements
// Objective: Create a new array that contains only the unique elements from an existing array (remove duplicates).
// var numbers = [1, 2, 3, 1, 2, 4, 5, 4, 6];
// var uniques = [...new Set(numbers)];
// console.log(uniques)

// OR

// var numbers = [1, 2, 3, 1, 2, 4, 5, 4, 6];
// var uniqueNumber = [];

// for(var i =0;i<numbers.length;i++){
//     if(uniqueNumber.indexOf(numbers[i]) === -1){
//         uniqueNumber.push(numbers[i])
//     }
// }
// console.log(uniqueNumber)

// Task 4 : Flatten a Multidimensional Array
// Objective: Flatten a multidimensional array into a single-dimensional array.
//
// var matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// var flatten = matrix.flat();
// console.log(flatten)

// OR

// var flattened = [];
// for (var i = 0; i < matrix.length; i++) {
//     // console.log(matrix.length)
//   for (var j = 0; j < matrix[i].length; j++) {
//     flattened.push(matrix[i][j]);
//   }
// }
// console.log(flattened);

// Task 5:  Find the Average of Array Elements
// Write a program that takes an array of numbers and calculates the average of all elements in the array.
// var numbers = [1, 2, 3, 4, 5];

// var sum = 0;
// for(var i=0;i<numbers.length;i++){
//     sum = sum + numbers[i]
// }  
// var average = sum / numbers.length
// console.log(average)

// Task 6: Find All Pairs of Elements with a Given Sum
// Write a program that finds all pairs of elements in an array that add up to a specific target sum
// Output: [[1, 7], [2, 6], [3, 5]]

// var array = [1, 2, 3, 4, 5, 6, 7];

// var targetSum = 8;

// var pair = []

// for(var i=0;i<array.length;i++){
//     for(var j = i + 1;j < array.length;j++){
//         // console.log(array[i])
//         if(array[i] + array[j] === targetSum){
//             pair.push([array[i],array[j]])
//         }   
//     }
// }
// console.log(pair)