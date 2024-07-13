import React, { useRef } from 'react'

function SalesReport() {

    let nameRef = useRef();
    let reportRef = useRef();  
    console.log(nameRef ,reportRef);  
    let saveData = (e)=>{
        e.preventDefault();
        console.log(`Sales report : ${nameRef.current.value} and ${reportRef.current.value}`)
    }
  return (
    <div>
      <h2>Un Controlled Component</h2>
      {/* If Component form id managed by DOM methods or any other react thechn
      thechnique apart from state concept such component are called Uncontrolled Component */}
      <div className='train-info'>
            <form>
                <div>
                    <input type='text' placeholder='Enter Name' ref={nameRef}/>
                </div>
                <div>
                    <input type='number' placeholder='Enter Report Value' ref={reportRef} />
                </div>
           
                <button onClick={saveData}>Submit</button>
            </form>
            
            
      </div>    
    </div>
  )
}

export default SalesReport
