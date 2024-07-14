import React from 'react'

function D(props) {
    console.log(props.value)
  return (
    <div>
     <h1>D Component is : {props.value.email}</h1> 
    </div>
  )
}

export default D
