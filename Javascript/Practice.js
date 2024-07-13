// Spread Operator
// let num = [1,2,3]
// console.log(...num)


    // Rest Operator
// function restFunction(...args){
//     // console.log(a+b+c)

//     let sum = 0;
//     // for(let x of args){
//     //     sum = sum + x
//     // }
//     // console.log(sum)

//     for(let i=0;i<args.length;i++){
//         sum = sum + args[i]
//     }
//     console.log(sum)
//     console.log(args)
// }

// restFunction(1,2,3)

// Handling variable number of Arguments
// function concatenate(separator,...string){
//     return string.join(separator)
// }
// console.log(concatenate(",","Banana","Apple","Cherry")) //Banana,Apple,Cherry

// let [first,...rest] = [1,2,3,4,5];
// console.log(first);
// console.log(rest);

// Nested Destructing in Objcet

// let person = {
//     name:"Alice",
//     address:{
//         city:"HYD",
//         zip:12345
//     }
// }
// const {name,address:{city,zip}} = person;
// // console.log(name)
// console.log(city)
// console.log(zip)

// Nested Destructing in Array
// let num = [1,2,[3,4,5]];
// let [a,b,[c,d,e]] = num;
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

// Prototype

// let num = "Hello";
// console.log(num.hasOwnProyperty("Hello"))

// function Person(name){
//     this.name = name
// }
// Person.prototype.greet = function(){
//     return this.name
// }
// let firstName = new Person("Darwin");
// console.log(firstName.greet())


//Prototype

// function Person(firstName,lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// let person1 = new Person('Darwin',"Coding")
// let person2 = new Person("Nivas","Coding")
// // console.log(person1)
// // console.log(person2)
// Person.prototype.city = "Hyd";
// Person.prototype.greet = function(){
//     return `${this.firstName} and ${this.lastName}`
// }
// console.log(person1.city)
// console.log(person2.greet)


// function Child(date){
//     this.date = date
// }
// let child1 = new Child(12)
// // console.log(dateOfBirth)
// Child.prototype.date = 24;
// Child.prototype.eating = function(){
//     return `Eating Food`
// }

// Person.prototype.__proto__ = Child.prototype

// console.log(child1);
// console.log(child1)
// // console.log(person3)
// console.log(person2.date)
// console.log(person2.eating())


// Callback Function

// function sayHello(){
//     console.log("Hello")
// }
// function sayHi(){
//     console.log("Hi...")
// }
// function add(a,b,callBack){
//     callBack()
//     console.log(a + b)
// }
// let a = 10;
// let b = 20;
// add(a,b,sayHi)
// add(a,b,sayHello)

// HOF
// 1. The function takes one or more functions as arguments
// 2. Returns function as its results

// let result = (val)=>{
//     console.log(`Hello.... HOF is ${val}`)
// }
// let higer = (a,b,Callback)=>{
//     let c = a + b;
//     Callback(c)
//     return ()=>{
//         console.log(`Hello inside Function is ${c}`)
//     }
// }
// let x = higer(5,4,result)
// x()


// const fruits = ["apple", "banana", "cherry"];
// // Log each fruit to the console using forEach
// fruits.forEach((fruit, index) => {
// console.log(`Fruit at index ${index}: ${fruit}`);
// })

// Promise

// let promiseFuncion = new Promise((resolve,reject)=>{
//     console.log("This is Promise function");
//     resolve("Success")
//     // reject("This is Rejected")
// })

// let greet = (number)=>{
//     return new Promise((resolve,reject)=>{
//         // resolve("Success")
//         console.log(`This is Promise ${number}`)
//         setTimeout(()=>{
//             console.log(`This is setTimeout Function in ${number}`)
//         },1000)
//     })
// }
// greet(1).then((res)=>{
//     console.log(res)
// }).catch((rej)=>{
//     console.log(rej)
// })

// Chaining Promise

// let newPromise = (num)=>{
//     return new Promise((resolve,reject)=>{
//         console.log(`This is Promise ${num}`)
//         setTimeout(()=>{
//             console.log(`This is setTimeout ${num}`)
//         },2000)
//     })
// }
// newPromise(1).then((res)=>{
//     console.log("1 Resolve")
//     newPromise(2).then(()=>{
//         console.log("2 Resolve")
//         newPromise(3).then(()=>{
//             console.log("3 Resolve")
//         })
//     })
// })


// // Async and await
// let newPromise = (num)=>{
//     return new Promise((resolve,reject)=>{
//         console.log(`This is Promise function ${num}`)
//         setTimeout(()=>{
//             console.log(`This is setTimeout ${num}`)
//         })
//     })
// }
// // newPromise()
// let asyncFunction = async function(){
//     console.log(`This is Async Function`)
//    await newPromise(1)
// }
// asyncFunction()


// Async and await Handling errors using try... catch blocks

// let fetchData = async ()=> {
//     try{
//         const response = await fetch('API');
//         if(!response.ok){
//             throw new Error("Network was not ok")
//         }
//         const data = await response.json();
//         console.log(data);
//     }catch(error){
//         console.log(`Error ${error}`)
//     }
// }
// fetchData()

// Fetching the data
// Making simple GET Request
// fetch("'https://jsonplaceholder.typicode.com/posts/1")
// .then((response)=>{
//     if(!response.ok){
//         throw new Error("Network was not ok")
//     }else{
//         return response.json()
//     }
// }).then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log("Something error",error)
// })

// Making Post Request
fetch("https://jsonplaceholder.typicode.com/posts/1",
    {method:'POST',
        headers:{
            "content-type":"Application/text",
        },
        body:JSON.stringify({
            name:"Alice",
            age:25
        })
    })
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        return data
    }).catch((error)=>{
        return error
    })
