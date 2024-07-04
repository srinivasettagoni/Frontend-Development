//CallBack Hell

// let  callBackHell = (n,callBack)=>{
//     console.log(`Thi is Call back Function ${n}`);
//     callBack()
// }
// callBackHell(1,()=>{
//     console.log("Callaback 2")
//     callBackHell(2,()=>{
//         console.log("Callback 3")
//     })
// })
// let callBackHell = (callBackFn)=>{
//     setTimeout(()=>{
//         callBackFn();
//     },2000)
// }
// callBackHell(()=>{
//     console.log("This is Function 1")
//     callBackHell(()=>{
//         console.log('This is Function 2');
//         callBackHell(()=>{
//             console.log("This is Function 3")
//         })
//     })
// })


//PROMISE=======================

// Creating Promise------
// resolve
// reject

// States of a Promise----------
// Pending
// Fulfilled
// Rejected

//   let getPromise =   new Promise((resolve,reject)=>{
//     console.log("This is Promise");
//     // resolve("Success");
//     reject("Rejected")
    
//     })


//Handling Promise
// .then();
// .catch()

// let newPromise = (number)=>{
//     return new Promise((resolve,reject)=>{
//         // console.log(`This is promise ${number}`)
//         resolve(`This is Resolve ${number}`)
//         // reject("This is Rejected")
//     })
// }
// newPromise(1).then((res)=>{
//     console.log(res);
// })
// newPromise(1).catch((reject)=>{
//     console.log(reject);
// })

//Call Back hell in Promise
// newPromise(1).then((res)=>{
//     console.log(res);
//     newPromise(2).then((res)=>{
//         console.log(res)
//         newPromise(3).then((res)=>{
//             console.log(res)
//         })
//     })
// })


//Async await

let newPromise = (number)=>{
    return new Promise((resolve,reject)=>{
        console.log(`This is promise ${number}`)
        resolve(`This is Resolve ${number}`)
        // reject("This is Rejected")
    })
}

let ayncFunction =async function(){
    console.log("This is Async Function 1")
    await newPromise(1);
    console.log("This is Async Function 2")
    await newPromise(2)

}
ayncFunction()