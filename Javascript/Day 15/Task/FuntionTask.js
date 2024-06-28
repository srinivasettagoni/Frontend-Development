// Task1: Function to Reverse a String
// Objective: Write a function that takes a string as input and returns the reversed string.

// function reverse(name){
//         var str = name.split("").reverse().join("")
//         console.log(str)
// }
// reverse("Darwin");

// Task 2: Function to Calculate Factorial
// Objective: Write a recursive function that calculates the factorial of a number.

// function factorial(num){
//     if(num == 0 || num == 1){
//       return 1
//     }else{
//         return num * factorial(num - 1)

//     }
    
// }
// console.log(factorial(5)) 


// Task 3: Function to Generate Fibonacci Sequence
// Objective: Write a function that generates the first n numbers in the Fibonacci sequence.

    // function fibinoci(n){
    //     var a = 0;
    //     var b =1;

    //     for(var i = 0;i<n;i++){
    //         var sum = a + b;
    //         a = b;
    //         b = sum;
    //     }
    //     console.log(b)
    // }
    // fibinoci(5)

    // function fibonacci(n) {
    //     // Initialize the array with the first two Fibonacci numbers
    //     var fibonacci = [0, 1];
        
    //     // Handle edge cases for n less than or equal to 2
    //     if (n === 1) {
    //         return [0];
    //     } else if (n === 2) {
    //         return fibonacci;
    //     }
        
    //     // Generate the Fibonacci sequence up to n numbers
    //     for (var i = 2; i < n; i++) {
    //         fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    //     }
        
    //     // Return the Fibonacci sequence up to n numbers
    //     return fibonacci;
    // }
    
    // // Example usage:
    // var n1 = 5;
    // var n2 = 10;
    // var n3 = 15;
    
    // console.log(fibonacci(n1)); // Output: [0, 1, 1, 2, 3]
    // console.log(fibonacci(n2)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
    // console.log(fibonacci(n3)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]


    // Task 4 : Function to Perform Multiple String Operations
// Objective: Write a function that takes a string and returns an object containing the string's length, the string in uppercase, and the string in lowercase.
   

//     function string(str){
//      return  {
//        length: str.length,
//        uppercase:str.toUpperCase(),
//        lowercase: str.toLowerCase()

//     }
// }
//     var str1 = "Hello";
//     var str2 = "Javasscript";
//     var str3 = "World";
//     console.log(string(str1)) 
//     console.log(string(str2)) 
//     console.log(string(str3))
    

// Task 5: Function to Count Vowels in a String
// Objective: Write a function that counts the number of vowels in a given string.

// function countVowels(str) {
//     // Define a set of vowels (both lowercase and uppercase)
//     const vowels = "aeiouAEIOU";
//     let count = 0;
    
//     // Loop through each character in the string
//     for (let char of str) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
    
//     return count;
// }

// // Example usage:
// let string1 = "Hello World";
// let string2 = "JavaScript Programming";
// let string3 = "This is a test string with vowels";

// console.log(`Number of vowels in '${string1}': ${countVowels(string1)}`);
// console.log(`Number of vowels in '${string2}': ${countVowels(string2)}`);
// console.log(`Number of vowels in '${string3}': ${countVowels(string3)}`);


// Task 6: Function to Flatten a Nested Array
// Objective: Write a function that flattens a nested array into a single array.


function flattenArray(nestedArray) {
    let flatArray = [];

    // Loop through each element of the nestedArray
    for (let i = 0; i < nestedArray.length; i++) {
        // Check if the current element is an array
        if (Array.isArray(nestedArray[i])) {
            // If it's an array, concatenate its elements to flatArray
            flatArray = flatArray.concat(flattenArray(nestedArray[i]));
        } else {
            // If it's not an array, push the element to flatArray
            flatArray.push(nestedArray[i]);
        }
    }

    return flatArray;
}

// Example usage:
let nestedArray1 = [1, [2, [3, 4], 5], 6];
let nestedArray2 = [[1, 2, [3]], 4, [5, [6, 7]]];
let nestedArray3 = [1, [2, [3, [4, [5]]]]];
let nestedArray4 = [1, 2, 3, [4, 5], [6, [7, [8, [9]]]]];

console.log("Flattened array 1:", flattenArray(nestedArray1));
console.log("Flattened array 2:", flattenArray(nestedArray2));
console.log("Flattened array 3:", flattenArray(nestedArray3));
console.log("Flattened array 4:", flattenArray(nestedArray4));
