import React from 'react'

function Count(props) {
    console.log(`This Count Component ${props.name}`)
  return (
    <div>
      Count is : {props.name}
    </div>
  )
}

export default React.memo(Count);
