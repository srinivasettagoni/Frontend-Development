import React from 'react'
import D from './D.js'

function C(props) {
  return (
    <div>
     <h1>C Component is : {props.info.age}</h1> 
      <D value={props.info}/>
    </div>
  )
}

export default C
