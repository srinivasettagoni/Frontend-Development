import React, { useState,useMemo } from 'react'
import '../../Component/ClassBased.css'

function UseMemo() {
    let [number,setNumber] = useState(0);
    let [count,setCount] = useState(0);


    let isEven = useMemo(()=>{
            for(let i = 0;i<1000;i++){
                console.log(i)
            }
            return number % 2 === 0
        },[number])

//  When we are clicking on number button the for loop rendering and calling
// and if we click on count also it is rendering again so to reduce that problem we have implemented useMemo() 
    // let isEven = ()=>{
    //     for(let i = 0;i<1000;i++){
    //         console.log(i)
    //     }
    //     return number % 2 === 0
    // }
  return (
    <div className='train-info'>
      <h1>Number :{number} is {isEven ? "Even" : "Odd"}</h1>
        <button onClick={()=>setNumber(number + 1)}>Number</button>
      <h2>Count : {count}</h2>
        <button onClick={()=>setCount(count + 1)}>Count</button>
    </div>
  )
}

export default UseMemo
