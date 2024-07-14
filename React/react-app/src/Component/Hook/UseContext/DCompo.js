import React, { useContext } from 'react'
import myContext from './Context'

function D() {
    let data = useContext(myContext)
  return (
    <div>
      <h1>D Component : {data.email}</h1>

    </div>
  )
}

export default D
