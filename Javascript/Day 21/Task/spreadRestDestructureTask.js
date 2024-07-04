
// Task : 1 Spread operator
// function mergeArrays(...array){
   
//     // const mergedArray = [].concat(...array);
//     // const uniqueArray = [...new Set(mergedArray)]
//     // return uniqueArray;
// }
// const array1 = [1, 2, 3];
// const array2 = [3, 4, 5];
// const array3 = [5, 6, 7];
// let result = mergeArrays(array1,array1,array3)
// // console.log(result)


// Task :2 Rest Operator

// Write a function called calculateSum that accepts any number of arguments and returns their sum.
// Ensure that the function handles both numbers and arrays of numbers correctly.
// function calculateSum(...args) {
//         let sum = 0;
//         for(let arg of args){
//             if(Array.isArray(arg)){
//                 // Flatten the array and add its values to sum
//                 sum += calculateSum(...arg);
//             }else{
//                 // Add the number directly to sum
//                 sum += arg;
//             }
//         }
//         return sum;
// }
// console.log(calculateSum(1, 2, 3)); // Output: 6
// console.log(calculateSum(1, [2, 3], 4)); // Output: 10

// Task 3: Array Destructuring
// Task Description:
// Write a function called swapFirstAndLast that takes an array as an argument
//  and returns a new array with the first and last elements swapped.

// function swapFirstAndLast(array) {
//     if (array.length < 2) {
//         // If the array has less than 2 elements, return it as it is
//         return array;
//     }

//     // Destructure the array to get the first and last elements
//     const [first, ...middle] = array;
//     const last = middle.pop();

//     // Return a new array with the first and last elements swapped
//     return [last, ...middle, first];
// }

// const array = [1, 2, 3, 4, 5];
// const result = swapFirstAndLast(array);
// console.log(result); // Output: [5, 2, 3, 4, 1]


// Task 4: Object Destructuring
// Task Description:

// Write a function called extractUserInfo that takes a user object as an argument and returns a new object containing only the name, age, and email properties.
// Use object destructuring to achieve this.

// function extractUserInfo(user) {
//     const {name,age,email} = user;
//     return {name,age,email} ;
// }

// const user = {
//     name: 'Alice',
//     age: 25,
//     email: 'alice@example.com',
//     address: '123 Main St'
// };
// const result = extractUserInfo(user);
// console.log(result); // Output: { name: 'Alice', age: 25, email: 'alice@example.com' }

// Task 5: Nested Destructuring
// Task Description:

// Write a function called extractCoordinates that takes an object representing a point with nested objects for latitude and longitude.
// Return an object containing only the latitude and longitude values.
// Use nested destructuring to achieve this.

function extractCoordinates(point) {
    const { location: {latitude, longitude}} = point;
    return {latitude,longitude};
}

const point = {
    location: {
        latitude: 40.7128,
        longitude: -74.0060
    },
    name: 'New York City'
};
const result = extractCoordinates(point);
console.log(result); // Output: { latitude: 40.7128, longitude: -74.0060 }
