import React from 'react'
import { Link,Outlet,Route, Routes} from 'react-router-dom'
// import Electronics from './InventoryDashboard/Electronics'
import '../Component/InventoryDashboard/Groceries.css'

function Devices() {
  return (
    <div  className="groceries-links" >
        <Link to="electronics"  className="link" >
          Electronics
        </Link>
        <Link to="computer-accessories"  className="link">
          Computer Accessories
        </Link>

        <Outlet/>

        {/* <Routes>
        <Route path="electronics" element={<Electronics/>}/>
        </Routes> */}
       
    </div>
  )
}

export default Devices
