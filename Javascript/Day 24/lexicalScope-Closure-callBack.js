//Lexical Scope
// function outerFunction(){
//     let a = 10;
//     // console.log(a);
//     function innerFunction(){
//         console.log(a)
//     }
//     innerFunction()
// }
// outerFunction()


//Closures : - Closures allow the inner function to access variables 
// from the outer function's scope, even after the outer function has returned

// function outerFunction(){
//     let a = 10;
//     // console.log(a);
//     function innerFunction(){
//         console.log(a)
//     }
//  return  innerFunction()  
// }
// outerFunction()

//  let outerFunction =()=>{
//     let a = 40;
//     console.log("Hello");
//     return  innerFunction=()=>{
//         console.log(a);
//     }

//  }
//  //  outerFunction()
//  let x = outerFunction();
//  x()


// Call back Function

// function sayHello(){
//     console.log("Hello Call back")
// }

// function add(a,b){
//     console.log(a + b)
// }
// let a = 2;
// let b = 3;
// add(a,b,sayHello())

function sayHello(){
    console.log("Hello Call back")
}

function sayHi(){
    console.log("Hi Call back")
}

function add(a,b,callBack){
    callBack()
    console.log(a + b)
}
let a = 2;
let b = 3;
add(a,b,sayHi);
add(a,b,sayHello);