// let array = [1,2,3,4,5]
// console.log(...array) //1 2 3 4 5

// 1. Expanding

// let array1 = [1,2,3,4,5];
// let array2 = [...array1,6,7,8,9];
// console.log(array2)    
 
// 2. Combining
// let array1 = [1,2,3,4,5];
// let array2 = [6,7,8,9,10];
// let array = [...array1,...array2]
// console.log(array);

//3. Cloning Arrays => Shallow Copy: takes the original array as a 
// refernce to another variable and passes the spred operator to that copied thenn the output will addas given below

// let originalArray = [1,2,3,4,5];
// let copiedArray = [...originalArray];  //Shallow Copy 
// copiedArray.push(6);
// console.log(originalArray); //[ 1, 2, 3, 4, 5 ]                     
// console.log(copiedArray)   //[ 1, 2, 3, 4, 5, 6 ]  => Shallow Copy

// Deep Copy 
// let originalArray = [1,2,3,4,5,[6,7]];
// // let copiedArray = JSON.parse(JSON.stringify(originalArray));  
// let copiedArray = structuredClone(originalArray);
// copiedArray[5].push(8);
// console.log(originalArray); // [ 1, 2, 3, 4, 5, [ 6, 7 ] ]                   
// console.log(copiedArray)   //  [ 1, 2, 3, 4, 5, [ 6, 7, 8 ] ]

// Deep copy will work like shallow copy when we use
//  JSON.parse(JSON.stringify(originalArray)) and structuredClone();

// 4. String  Expand
// let str = "Darwin";
// console.log(str.split(''));
// console.log([...str])
// Both works like a string expand 

// 5. Object Expanding
// let obj = {a:1,b:2}
// let obj2 = {...obj,c:3,d:4}
// console.log(obj2)

// Combining
// let obj1 = {a:1,b:2};
// let obj2 = {c:3,d:4};
// let obj  = {...obj1,...obj2}
// console.log(obj)

// Obj Shallow Copy 
// let originalObj = {a:1,b:2};
// let copiedObj = {...originalObj};
// copiedObj.c=3;
// console.log(originalObj);
// console.log(copiedObj);

// Deep copy
// let originalObj = {a:1,b:2,add:{c:3},d:4}
// // let copiedObj = JSON.parse(JSON.stringify(originalObj));
// let copiedObj = structuredClone(originalObj)
// copiedObj.add.e=5;
// console.log(originalObj);
// console.log(copiedObj);


// REST OPERATOR

// function spreadFunction(a,b,c){
//         console.log(a + b +c)
// }
// let num = [1,2,3]
// console.log(...num)  //Remove array and give numbers 1,2,3
// spreadFunction(...num)

// function spreadFunction(...args){
//     console.log(args)       //Add array and shows the values [1,2,3]
//         // console.log(a + b +c)
// }
// // let num = [1,2,3]
// // console.log(...num)
// spreadFunction(1,2,3)


// De-structuring
// In Array De structuring
// let  array = [1,2,3,4,5,6,7,8];  //storing the values in a,b,c,d,e
// let [a,b,c,d,e] = array
// console.log(array)
// console.log(b) //2
// console.log(e) //5

// let [a,b,...args] = array
// console.log(args)

// In Object De structuring
// let object = {a:1,b:2,c:3,d:4,e:5,f:6};
// // let {a,b,c,d} = object;
// // console.log(d)  //4
// let {a,b,...args} = object;
// console.log(args)

