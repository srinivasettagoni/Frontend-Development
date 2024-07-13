import React, { useReducer } from 'react'
import '../../Component/ClassBased.css'

function QuaterlySalesReport() {

    let initialValue = {
        month :"",
        report:0,
        profit:0
    }
    let formReducer = (formData, action)=>{
        console.log(action.type) //month                         
        console.log(action.payload) // July
        return {...formData, [action.type] : action.payload }
        // formData = {month : july} // july (input what we entered in UI)
    }
    let [formData,dispatch] = useReducer(formReducer,initialValue);

    let handleClick = (e)=>{
        e.preventDefault()
        console.log(formData)
    }
  return (
    <div className='train-info'>
      <form>
        <div>
            <input type='text' placeholder='Enter Month' onChange={(e)=>dispatch({type:"month",payload:e.target.value})}/>
        </div>
        <div>
            <input type='number' placeholder='Enter Sales Report' onChange={(e)=>dispatch({type:"report",payload:e.target.value})}/>
        </div>
        <div>
            <input type='number' placeholder='Enter Profit' onChange={(e)=>dispatch({type:"profit",payload:e.target.value})}/>
        </div>
        <button onClick={handleClick}>Submit </button>
      </form>
      <h1>{formData.month}</h1>
      <h1>{formData.report}</h1>
      <h1>{formData.profit}</h1>
    </div>
  )
}

export default QuaterlySalesReport
