import React, { useState } from 'react'
import '../../Component/ClassBased.css'


function Stand() {
    let [state,setState] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_28YfBa8WHNLI5HEcELCEI8uUgeM9m5k6A&s')
  return (
    <div className='train-info'>
      <img src={state}/>
    </div>
  )
}

export default Stand
