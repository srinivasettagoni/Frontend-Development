// // Convert Traditional Functions to Arrow Functions
// // Convert the following traditional functions into arrow functions.

// // function multiply(a, b) {
// //     return a * b;
// // }
//  let multiply = (a, b) => {
//     return a * b;
// }


// // function isEven(num) {
// //     return num % 2 === 0;
// // }
// let  isEven = (num) => {
//     return num % 2 === 0;
// }

// // function sayHello()  {
// //     return 'Hello, world!';
// // }
// let = sayHello = () => {
//     return 'Hello, world!';
// }

// // function add(x, y, z) {
// //     return x + y + z;
// // }
// let add = (x, y, z) => {
//     return x + y + z;
// }
// console.log(multiply(10,5));
// console.log(isEven(10));
// console.log(sayHello());
// console.log(add(1,2,3))


// Lexical Scope 
// Multiple Nested Scopes
// Create a function with multiple nested functions, each accessing variables from their outer scopes.

// function multiple(){
//     let a = 10;
//     let b = 3;
//     function innerFunction(){
//         console.log(a * b)
//     }
//     innerFunction()
// }
// multiple()

// Closure
// Create a Counter

// Create a counter function using closures that 
// can increment and decrement a private count variable.

function counter(){
    let count = 0;
    console.log("Helo")
    function innerFunction(){
      count++
      return count
    }
    return innerFunction();
}
console.log(counter()) 