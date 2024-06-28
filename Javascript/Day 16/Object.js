// var student = {
//     name:"Hema",
//     age:2,
//     greet:function(){
//         console.log("Hello World")
//     }
// }
// console.log(student)

// Object Creation  in Object Constructor

// var person = new Object()

// person.name = "Darwin";
// person.age = 22;
// person.greet = function(){}

// console.log(person);

// Function Constructor
// function Person(name,age){
//     this.name = name;
//     this.age = age
// }

// var person1 = new Person("Hema",21);
// var person2 = new Person("Darwin",20);

// console.log(person1);
// console.log(person2);

// Accessing the Object properties

// var student = {
//     name:"Hema",
//     age:12,
//     greet:function(){
//         console.log("Hello World")
//     }
// }
// console.log(student.name);
// console.log(student.age)

// Update 
// student.name = "Darwin";
// // Delete
// delete student.greet
// console.log(student);

//  console.log(student["name"]) 
//  student["age"] = 55;

//  delete student["greet"]
//  console.log(student)

// we cant do dynamic with Dot notation 
// var course = "age";
// console.log(student.age)
// console.log(course)
// console.log(student[course])

// Loops in Object (for... in)
// var student = {
//     name:"Hema",
//     age:12,
//     greet:function(){
//         console.log("Hello World")
//     }
// }

// for(var key in student){
//     // console.log(student[key]) // name,age,greet: function
//     console.log(student.key) // Undefined
// }

// nested loop
var student = {
    name:"Hema",
    age:12,
    greet:function(){
        console.log("Hello World")
    },
    address:{
        hno:123,
        city:"HYD"
    },
    contact:{
        email:"abc@gmail.com",
        phone:123456
    }
}
// console.log(student.address.hno)
// console.log(student.greet())

// for(var key in student){
//     // console.log(student[key])
//     if(typeof student[key] == "function"){
//         console.log(student[key]())
//     }
// }

// Built in Methods

// console.log(Object.keys(student));
// console.log(Object.values(student))

// console.log(Object.entries(student))