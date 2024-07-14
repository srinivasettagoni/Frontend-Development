import React, { useEffect } from 'react'

function NotFound() {
    useEffect(()=>{
        document.title = "Not found";
      return ()=>{
        document.title = "React App";
      } 
    })
 
  return (
    <div>
        
      <h1>Page Not Found</h1>
    </div>
  )
}

export default NotFound
