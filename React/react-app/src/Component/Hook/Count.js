import React, { useEffect, useState } from "react";
import "../../Component/ClassBased.css";

function Count() {
    let stopCount 
    console.log(stopCount)
  let [count, setCount] = useState(0);
  let handleCount = () => {
    // console.log(count)
  stopCount = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      console.log(count)
    }, 1000);
    console.log(`This is setOnterval ${stopCount}`)
  };
  let handleStop = ()=>{
    console.log(`Stopped ${stopCount}`)
    clearInterval(stopCount)
  }

//   useEffect(() => {
//     document.title = `This is Count value = ${count}`;
//     console.log(`This is useEffect value ${}`);
//   });
  return (
    <div className="train-info">
      <h2>Counter</h2>
      <h3>{count}</h3>
      <button onClick={handleCount}>Count</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default Count;
