import React, { createContext, useContext } from 'react'
import D from './DCompo.js'
import myContext from './Context.js'

function C() {
  let contextData = useContext(myContext)
  return (
    <div>
      <h1>C Component : {contextData.age}</h1>
      <D/>
    </div>
  )
}

export default C
