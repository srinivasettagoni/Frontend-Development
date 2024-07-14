import React, { useState } from "react";
import B from "./BCompo.js";
import "../../../Component/ClassBased.css";
import myContext from "./Context.js";

function A() {
    let [state,setState] = useState({
        name:"Darwin",
    age:23,
    email:"Nivas@gmail.com"
    })
  return (
    <div className="train-info">
      <h1>A Component</h1>

      <myContext.Provider value={state}>
        <B />
      </myContext.Provider>
    </div>
  );
}

export default A;
