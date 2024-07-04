// let array = [1,2,3,4,5];
// for(i=0;i<array.length;i++){

//     console.log(i * 2)
// }

//Map Syntax  --------------------
// let newArray = array.map(callBackfunction(currentValue,index,array){
//     retrun Element for newArray
// },this) //this dependency
// let array = [1,2,3,4,5];
// let num = 5;
// let newArray = array.map((currValue,index,array)=>{
//     // console.log(currValue);
//     // console.log(index);
//     // console.log(array);

//     // console.log(currValue * 2)
//     // return num + currValue * 2
//     return currValue % 2 == 0  //[ false, true, false, true, false ]
// },num)
// console.log(newArray)

// Filter Syntax
// let newArray = array.filter(callBackfunction(currentValue,index,array){
//     retrun Element for newArray
// },this) //this dependency

// let array = [1,2,3,4,5]
// let evenNumber =  array.filter((currValue,index,array)=>{
//     // console.log(currValue);
//     // console.log(index)
//     // console.log(array)

//     return currValue % 2 == 0;  //[ 2, 4 ]
// })
// console.log(evenNumber);

// Reduce interact with each and every element and converts it into single value

// let Array = array.reduce((accumulator,currevalue,index,array)=>{

// },initialValue)

// let array = [1,2,3,4,5];
// let newArray = array.reduce((accumulator,currValue,index,array)=>{
//     // console.log(accumulator)
//     return accumulator + currValue
//         // console.log(currValue)
// },5)      //initial Value takes as a accumulator if no initial value accumulator takes the 1 emelemt of the Array
// console.log(newArray)

// Chaining the Map, Filter,Reduce
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let evenNumber = array.filter((currValue)=>{
//     // console.log(currValue % 2 == 0)
//     return currValue % 2 == 0
// }).map((currValue)=>{
//     // console.log(currValue * 2)
//     return currValue * 2;
// }).reduce((accumulator,currentValue)=>{
//         return accumulator + currentValue
// })
// console.log(evenNumber);

//In one line Chaining
// let evenNumber = array
//   .filter((currValue) => currValue % 2 == 0)
//   .map((currValue) => currValue * 2)
//   .reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(evenNumber);



// For Each() : same as Map() one time iteration and direct out put without new array
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// array.forEach((value)=>{
//     console.log(value) 
// })

//Includes() : checking the element
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let check = array.includes(10) 
// console.log(check)   // includes(15) //false
// console.log(check)  // includes(10) //true

//Some() : condition checking greter than 5 
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let findValue = array.some((value)=>{
//     return value > 5;
// })
// console.log(findValue)  //true

//every() : if Greater than 5 in each element then the true or else false
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let findValue = array.every((value)=>{
    return value > 5;
})
console.log(findValue)  //true