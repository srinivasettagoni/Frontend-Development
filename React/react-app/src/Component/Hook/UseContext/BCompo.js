import React, { createContext, useContext } from 'react'
import C from './CCompo.js'
import myContext from './Context.js'
function B() {
  let info = useContext(myContext)
  console.log(info)
  return (
    <div>
      <h1>B Component : {info.name}</h1>
      <C/>
    </div>
  )
}

export default B
