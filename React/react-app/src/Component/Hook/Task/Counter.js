import { useState } from "react";

let Counter = ()=>{

    let [state,setState] = useState(0);
   let increase = ()=>{
        setState(state + 1)
    }
    let decrease = ()=>{
        setState(state - 1)
    }
    return(
        <div>
            <h1>{state}</h1>
            <button onClick={increase}>Count++</button>
            <button onClick={decrease}>Count--</button>
        </div>
    )
}

export default Counter;
