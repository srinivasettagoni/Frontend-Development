import React,{useReducer, useState} from 'react'
import '../../Component/ClassBased.css'


function UseReducer() {

  let initialValue = 0;
  // let [state,setState] = useState(initialValue);
  let reducer = (state,action)=>{
    console.log(action)
    // if(action.type === 'Incre'){
    //   return state + 1
    // }
    switch(action.type){
      case "Incre" :
      return state + 1;
      case 'Decre':
        return state - 1;
        case 'multiply':
          return state * 5;
          case "Div":
            return state / 10;
      
    }
  }
    

  let [state,dispatch] = useReducer(reducer,initialValue)
  return (
    <div className='train-info'>
    <h1>{state}</h1>
    {/* <button onClick={()=>setState(state + 1)}>Count ++</button>
    <button onClick={()=>setState(state - 1)}>Count --</button>
    <button onClick={()=>setState(state * 4)}>Count **</button>
    <button onClick={()=>setState(state / 2)}>Count /</button> */}

  <button onClick={()=>dispatch({type :"Incre"})}>Count ++</button>
  <button onClick={()=>dispatch({type:"Decre"})}>Count -</button>
  <button onClick={()=>dispatch({type:"multiply"})}>Count * </button>
  <button onClick={()=>dispatch({type:"Div"})}>Count /</button>
    </div>
  )
}

export default UseReducer
