import './App.css';
import FunctionBased  from './Component/FunctionBased';
import ClassBased from './Component/ClassBased';
import StateManage from './Component/Hook/StateManage';
import Counter from './Component/Hook/Task/Counter.js'
import Groceries from './Component/InventoryDashboard/Groceries.js';
import ListItem from './Component/InventoryDashboard/ListItems.js';
import TaskInputSubmit from './Component/InventoryDashboard/TaskInputSubmit.js';
import Electronics from './Component/InventoryDashboard/Electronics.js';

function App() {


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
    <Electronics/>
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
