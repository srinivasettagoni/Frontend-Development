// Task 1: Create and Access Object Properties
// Objective: Create an object representing a book and access its properties.

// var book ={
//     title : "Darwin's Book",
//     author : "Nivas",
//     yearPublished:1998,
//     genre : 123
// }
// console.log(book.title)
// console.log(book["author"])

// Task 2: Modify and Delete Object Properties
// Objective: Modify and delete properties of an existing object.

// var car = {
//     name : "Hyundai",
//     model : "creta",
//     year: 2024,
//     color:"red"
// }

// // car.model = "City"
// delete car.year
// // delete car["year"]
// console.log(car)

// Task 3: Nested Objects
// Objective: Create an object with nested objects and access their properties.

// var student = {
//     name:"Darwin",
//     age:23,
//     address :{
//         street:"Local",
//         city:"HYD",
//         state : "Telangana"
//     },
//     course:{
//         mern : "FSD",
//         duration : 5
//     }
// }
// // console.log(student.address.city)
// // console.log(student.address.state)
// console.log(student["course"]["mern"])

// Task 4: Looping Through Object Properties
// Objective: Loop through the properties of an object and print them.

// var employee = {
//     name: "Nivas",
//     position: "Full Stack Web Developer",
//     department: "Backend Developer",
//     salary: 150000
// }

// for( var key in employee){
//     // console.log(key)
//     // console.log(employee[key])
//   console.log(`${key} : ${employee[key]}`)
// }


// Task 5: Using Methods in Objects
// Objective: Add methods to an object and call them.


// var calculator = {
//     num1 : 2,
//     num2 :5,
//     add : function(){
//      return this.num1 + this.num2;
//     },
//     sub: function(){
//         return this.num1 - this.num2;
//     },
//     multiply: function(){
//         return this.num1 + this.num2;
//     }

// }
// console.log(calculator.add())
// console.log(calculator.sub())
// console.log(calculator.multiply())


// Task 6 : Nested Object Iteration
// Objective: Create an object with nested objects and use nested for...in loops to print all properties and their values.

// Create an object named 'company' with nested objects
// let company = {
//     name: "Tech Solutions Inc.",
//     location: "New York",
//     employees: {
//         "John Doe": "Software Engineer",
//         "Jane Smith": "UX Designer",
//         "Mike Johnson": "Data Analyst"
//     }
// };

// Iterate through the properties of the company object using for...in loop
// for (let key in company) {
//     if (company.hasOwnProperty(key)) {
//         // Check if the current property is 'employees'
//         if (key === "employees") {
//             console.log("Employees:");
//             // Iterate through the employees object using another for...in loop
//             for (let employee in company[key]) {
//                 if (company[key].hasOwnProperty(employee)) {
//                     console.log(`${employee}: ${company[key][employee]}`);
//                 }
//             }
//         } else {
//             // Print other properties normally
//             console.log(`${key}: ${company[key]}`);
//         }
//     }
// }

// Task 7 :Calculate Average Age
// Objective: Create an object with a list of people and their ages, then use a for...in loop to calculate the average age

var student ={
    ram:4,
    suresh:19,
    ashwin : 56,
    darwin:12
}
var totalAge = 0;
var count = 0;
for( var key in student){
    // console.log(student[key] )
   totalAge += student[key]
   count++
    
}
var avaerage = totalAge / count
console.log(avaerage)