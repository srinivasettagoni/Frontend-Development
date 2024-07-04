//Var ,let ,Const
// 1. Function scope and Block Scope


// function scope(){
//     if(true){
//         var a = 10;
//     //    let b = 20;
//     //    const c = 30;
//       // console.log(b)
//     // console.log(c)
//     }
//     // console.log(a)
//     // console.log(b)
//     // console.log(c)
// }
// scope();

//2. Hositing
// =================
// console.log(a)  // Undefied
// var a = 10;
// console.log(a);   // 10

// console.log(b)  //ReferenceError: Cannot access 'b' before initialization
// let b = 20;

// console.log(c)  //ReferenceError: Cannot access 'c' before initialization
// const c = 30;

// var  a;
// console.log(a)

// Temeropry Dead Zone
// {
//     console.log(a)
//     // var  a = 10;
//     let a = 20;
//     // console.log(a)
// }
// console.log("hello")

// Reassignment
// ===================
// var a = 10;
//  a = 20;
// console.log(a)  //20

// let b =10;
// b = 20;
// console.log(b)  //20

// const c = 2;
// c = 15;
// console.log(c)  //TypeError: Assignment to constant variable.

// Re Declaration
// ==================

// var a = 10;
// var a = 20;
// console.log(a) // 20

// let b = 20;
// let b = 30;
// console.log(b)  //SyntaxError: Identifier 'b' has already been declared

// const c = 15;
// const c = 25;
// console.log(c)  //SyntaxError: Identifier 'c' has already been declared


// Template Literals

// let name = "Darwin";
// let age = 23;
// // console.log(`${name}`)
// // let msg = "My name is" + name + " and " + age;
// let msg = `My name is ${name} and ${age}`;  //Strings interpolation

// // console.log(msg);

// // let text = "Good Evening everyone
// //  how is the day?";           // line breaks
// let txt = `Good Evening everyone how 
//  is the day?`       // we can make multi lines

// Tagged  Template
// function tagTemp(string,name){
//     console.log(string)
//     console.log(name)
// }
// let name = "Darwin"
// tagTemp `My name is ${name}`


// Symbol   : - Hiding the key or values Uniquness,Immutability,Non Enumerable
// ========
// let a = Symbol("Mahesh")
// console.log(a)

// let email = Symbol()
// let employee = {};
// employee.name = "Darwin";
// employee["age"]= 24;
// employee[email] = "abc@gmail.com"

// console.log(employee) //{ name: 'Darwin', age: 24, [Symbol()]: 'abc@gmail.com' }

// console.log(Object.keys(employee)) //[ 'name', 'age' ]

// for(let key in employee){
//     console.log(key)
// }


// Set() :- Set.add() removing duplicate values
// =========
    // let set = new Set([1,2,2,3,3,1,4,5,6]);
    // console.log(set)
    // let set = new Set();
    // set.add(2)
    // set.add(2)
    // set.add(3)
    // let check = set.has(2)
    // // console.log(check)
    // set.delete(2)
    // set.clear()
    // console.log(set)

    // Map()  creating for Object 
    // =========
    let map = new Map()
    map.set("name","Darwin")
    map.set(1,"one")
    map.set(true,"boolean")

    // console.log(map) //Map(3) { 'name' => 'Darwin', 1 => 'one', true => 'boolean' }
    map.delete(1)
    console.log(map.has(1))
    map.clear()
        console.log(map.get("name"))
        console.log(map)