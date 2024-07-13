import React, { useState } from 'react'
import '../../Component/ClassBased.css'

const MonthlySalesReport = () => {
    let [formData,setFormData] = useState({name:"",report:""});
    let [submitted,setSubmitted] = useState([])
    // console.log(formData)
    let getData = (e)=>{
        e.preventDefault()
        // console.log(`This is Controlled Form Data`)
        console.log(formData)
        console.log(`Monthly Sales Report ${formData.name} and ${formData.report}`)
        setSubmitted([formData])
        // setFormData("")
    }
   
  return (
    <div className='train-info'>
      <h1>Controlled Component</h1>
      <form>
        <div>
        <input type='text' placeholder='Enter your name' onChange={(e)=>setFormData( {...formData,name: e.target.value})}/>
        </div>
        <div>
            <input type='number' placeholder='Enter sales report' onChange={(e)=>setFormData( {...formData,report: e.target.value})}/>
        </div>
        <button onClick={getData}>Submit</button>

          {submitted.map((item)=>{
            return (
              <div>
              <div>{item.name}</div>
              <div>{item.report}</div>
              </div>
            )
          })}
      </form>
    </div>
  )
}

export default MonthlySalesReport
