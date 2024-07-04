// Traditional Function -----------
// function add(a,b){
//     console.log(a + b);
// }
// add(2,5)

// Function expression --------------
// let add = function(a ,b){
//     console.log(a + b);
// }
// add(2,5)

// Arrow Function ------------

    // let add1 = (a,b)=>{
    //     console.log(a + b);
    // }
    // add1(3,7);

    // let add1 = (a,b)=>{
    //     return a + b
    // }
    // console.log( add1(3,7));

//One lin eof Code in Arrow Function ---------
// let oneLine = (x,y)=> x * y
// console.log(oneLine(5,5));

//One line parameter  ---------------
// let double = function(a){
//     return 2 * a
// }
// console.log(double(5)) 

// let double1 = a => 2 * a;

// console.log(double1(10));

// without parameter -----------
// let random = function(){
//     return Math.random()
// }
// console.log(random());

// let random1 = ()=> Math.random()
// console.log(random1());


// LIMITATION for Arrow function------------------

// 1. Object 
// let student = {
//     name :"Darwin",
//     getName : function(){       // In traditional fn this keyword already in built
//         return  ` My name is ${this.name}`
//     }
// }
// console.log(student.name);
// console.log(student.getName())

// let student = {
//     name :"Darwin",
//     getName : ()=>{     //this keyword wont have access but inheriate
//         return  ` My name is ${student.name}`
//     }
// }
// console.log(student.name);
// console.log(student.getName())

// 2. Constructor
// let Person = function(name){
//     this.name = name 
// }
// let person1 = new Person("Darwin");
// console.log(person1.name)


// let Person = (name)=>{  //Arrow fn won't accept constructor
//     this.name = name 
// }
// let person1 = new Person("Darwin");
// console.log(person1.name)

// 3. Object Arguments
// function objArgument(){
//     for(i =0;i<arguments.length;i++){
//         console.log(arguments[i])
//     }
// }
// objArgument(1,2,3,4,5);

// let  objArgument1 = (...arguments)=>{   //we have pass the aruguments in Arrow fn
//     for(i =0;i<arguments.length;i++){
//         console.log(arguments[i])
//     }
// }
// objArgument1(1,2,3,4,5);

