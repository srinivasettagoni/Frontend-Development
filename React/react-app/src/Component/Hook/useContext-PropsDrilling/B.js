import React from 'react'
import C from  './C.js'

const B = (props) => {
  return (
    <div>
     <h1>B Component is {props.data.name}</h1> 
      <C info={props.data}/>
    </div>
  )
}

export default B
