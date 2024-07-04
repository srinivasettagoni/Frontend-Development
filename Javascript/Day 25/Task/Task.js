// // Task1: Calculate Total Cost of Available Products
// // You have an array of product objects, where each product has a name, price, and a boolean indicating whether
// // it is available. Your goal is to calculate the total cost of all available products.

// const products = [
//   { name: "Laptop", price: 1000, available: true },
//   { name: "Phone", price: 500, available: false },
//   { name: "Tablet", price: 750, available: true },
//   { name: "Monitor", price: 300, available: true },
//   { name: "Keyboard", price: 100, available: false },
// ];

// //checking Vaialable and find the price
// // let totalSum = products
// // .filter((currValue) => currValue.available)
// // .map((currentValue) => currentValue.price)
// // .reduce((acc,curreValue)=> acc + curreValue)

// let totalCost = products.filter((products)=>{
//         return products.available
// }).map((currValue)=>{
//     return currValue.price
// }).reduce((acc,currentValue)=>{
//     return acc + currentValue
// })


// console.log(totalCost);

// //total Price Cost
// // let total = products.map((curreValue)=> curreValue.price)
// // .reduce((acc,curr)=> acc + curr)
// // console.log(total)



// task 2:
// Task: Analyze and Transform Student Data
// You have an array of student objects, where each student has a name, age, and an array of scores. Your goal is 
// to process this data to find out the average score of students who are older than 18 and have passed 
// all subjects (a passing score is 60 or above). You also need to format the result to show the average score 
// rounded to two decimal places.

const students = [
    { name: 'Alice', age: 19, scores: [85, 92, 78] },
    { name: 'Bob', age: 17, scores: [55, 60, 65] },
    { name: 'Charlie', age: 18, scores: [95, 88, 92] },
    { name: 'David', age: 20, scores: [72, 85, 90] },
    { name: 'Eve', age: 22, scores: [60, 65, 70] },
    { name: 'Frank', age: 21, scores: [95, 100, 99] }
];

// let result = students.filter((currentValue)=>{
//         // console.log(currentValue.age)
//         if(currentValue.age > 18){
//             return currentValue.age
//         }
// }).map((currValue)=>{
//         return currValue.scores
// }).reduce((acc,curr)=>{
//     return acc + curr
// })
// console.log(result)


const passingScore = 60;

const averageScore = students
    .filter(student => student.age > 18 && student.scores.every(score => score >= passingScore)) // Filter students who are older than 18 and passed all subjects
    .map(student => student.scores.reduce((acc, score) => acc + score, 0) / student.scores.length) // Map to their average scores
    .reduce((acc, score, _, arr) => acc + score / arr.length, 0); // Calculate the average score

const roundedAverageScore = averageScore.toFixed(2); // Round to two decimal places

console.log(roundedAverageScore); // Output: "88.33"