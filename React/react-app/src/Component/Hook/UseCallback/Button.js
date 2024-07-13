import React from 'react'

function Button(props) {
    console.log(`This is Button Component ${props.children}`)
  return (
    <div>
      
      <button onClick={props.handleClick}> {props.children}</button>
    </div> 
  )
}

export default React.memo(Button)
