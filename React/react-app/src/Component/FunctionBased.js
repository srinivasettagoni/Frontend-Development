import { useState } from "react";
import "./ClassBased.css";

let FunctionBased = () => {
  let [state, setState] = useState("Morining train at 09:00");
  //   let state = "Morining train at 09:00";
  let handleClick = () => {
    // state="Evening train going to arrive at 08:00"
    // console.log(state)
    // document.getElementById("train").innerHTML = state;
    setState("Evening train going to arrive at 08:00");
  };

  return (
    <div className="train-info">
      <h4>Welcome to Function based Component</h4>
      <h1 id="train">{state}</h1>
      <button onClick={handleClick}>Train Status</button>
    </div>
  );
};

export default FunctionBased;
