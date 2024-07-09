import { useState } from 'react';
import '../../Component/ClassBased.css'

let StateManage = ()=>{

    // let [currentVakue ,Update Function] = useState(initial value)
   let [state,setState] =  useState(0);
    // console.log(state)
    //console.log("This is re rendering")
let handleClick = ()=>{
    // setState(0) //if the initial value and update function is same the state won't re render
    // setState(2) 
        // setState(state + 1); // => 1
        // setState(state + 1); // => 1
        // setState(state + 1); // => 1

           // setState(state + 1); // => 1
        // setState(state + 1); // => 1
        // setState(state + 5); // => 5,10,15,20  setState will automaticallly takes the last value and adds 

        // setState((prevState)=>{
        //     return prevState + 1
        // })
        setState(prevState => prevState + 1) // => 0+1=1 =>3+1=4
        setState(prevState => prevState + 1) // => 1+1=2 =>4+1=5
        setState(prevState => prevState + 1) // => 2+1=3 =>5+1=6 
        //So here the last value will be the output like this it will add
}
    return(
        <div class='train-info'>
           <h2>This is React Hook</h2>
           <div>{state}</div>
           <button onClick={handleClick}>Count++</button>

        </div>
    )
}
export default StateManage;