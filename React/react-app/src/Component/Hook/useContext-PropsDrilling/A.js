import React, { useState } from 'react'
// import D from './D.js'
import '../../../Component/ClassBased.css'
import B from './B.js'

function A() {
  let [state,setState] = useState({
    name:"Darwin",
    age:23,
    email:"Nivas@gmail.com"
  })
  return (
    <div className='train-info'>
     <h1>A Component</h1> 
      {/* <D/> */}
      <B data={state}/>
    </div>
  )
}

export default A
