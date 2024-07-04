let result = (value)=>{
    console.log(`This is callback result  = ${value}....`)
}
let add = (a, b, callback)=>{
    let resultVal = a + b
    callback(resultVal)
    return ()=>{
        console.log(`This is HOF .....`)
    }
    // console.log(a + b)
}
let x =  add(2,3,result);
x()

//result Fn  is Call back Funtion

//add Fn   is Higher Oreder function
//1. HOF  Function takes argument as function
// 2. Return a new function

