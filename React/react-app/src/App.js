import './App.css';
// import FunctionBased  from './Component/FunctionBased';
import ClassBased from './Component/ClassBased';
// import StateManage from './Component/Hook/StateManage';
// import Counter from './Component/Hook/Task/Counter.js'
// import Groceries from './Component/InventoryDashboard/Groceries.js';
// import ListItem from './Component/InventoryDashboard/ListItems.js';
// import TaskInputSubmit from './Component/InventoryDashboard/TaskInputSubmit.js';
import Electronics from './Component/InventoryDashboard/Electronics.js';
import ComputerAccessories from './Component/InventoryDashboard/ComputerAccessories.js';
import Stand from './Component/InventoryDashboard/Stand.js';
import { useState } from 'react';
import Count from './Component/Hook/Count.js';
import RefObj from './Component/Hook/RefObj.js';
import SalesReport from './Component/SalesDashboard/SalesReport.js';
import MonthlySalesReport from './Component/SalesDashboard/MonthlySalesReport.js';
import UseReducer from './Component/Hook/UseReducer.js';
import QuaterlySalesReport from './Component/SalesDashboard/QuaterlySalesReport.js';

function App() {
 
  let [state,setState] = useState(false)

  return(
    <div>
    <div className='nav-bar'>
      <div className='logo'>
        <img src='https://logowik.com/content/uploads/images/dmart-avenue-supermarts4302.jpg' />
      </div>
      <div href="#" className='nav-links'>Home</div>
      <div href="#" className='nav-links'>Electronis</div>
      <div href="#" className='nav-links'>Home</div>
      <div href="#" className='nav-links'>Home</div>
      <div href="#" className='nav-links'>Home</div>
    </div>
    {/* <Electronics/> */}
    {/* // <ComputerAccessories/> */}
    {/* // <Stand/> */}
    {/* <Count/> */}
    {/* <RefObj/> */}
    {/* <SalesReport/> */}
    {/* <MonthlySalesReport/> */}
    {/* <UseReducer/> */}
    {/* <QuaterlySalesReport/> */}
    {/* {state ?  <ComputerAccessories/> : <Stand/>}
    <div className='train-info'>

    <button  onClick={()=>setState(true)}>ComputerAccessories</button>
  <button onClick={()=>setState(false)}>Stand</button>
  </div> */}
    </div>
  )
  // //Conditional Rendering
  // let stateManagement = true; //Function Component

  // if(stateManagement){
  //   return <FunctionBased/>
  // }else{
  //   return <ClassBased/>
  // }

  //Ternery Operator
  // let stateManagement = false;
  // return stateManagement ? <FunctionBased/> : <ClassBased/>

  // return <StateManage/>
  // return (
  //   <div className="App">
  //     {/* <div>Hello React Component</div> */}
  //     {/* <FunctionBased/>
  //     <ClassBased/> */}
  //     {/* <Counter/> */}
  //     {/* <Groceries/> */}
  //     {/* <ListItem/> */}
  //     <TaskInputSubmit/>
  //   </div>
  // );
}

export default App;
