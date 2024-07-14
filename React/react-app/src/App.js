import { Routes,Route, Link } from "react-router-dom";
import "./App.css";
import Electronics from './Component/InventoryDashboard/Electronics'
import Groceries from './Component/InventoryDashboard/Groceries.js'
import ListItems from './Component/InventoryDashboard/ListItems.js'
import MonthlySalesReport from "./Component/SalesDashboard/MonthlySalesReport.js";
import Home from "./Component/Home.js";
import NotFound from "./Component/NotFound.js";
import Devices from "./Component/Devices.js";
import ComputerAccessories from './Component/InventoryDashboard/ComputerAccessories.js'
import PackagedGoods from "./Component/InventoryDashboard/PackagedGoods.js";
import Stand from './Component/InventoryDashboard/Stand.js'

function App() {
  return (
    <div>
      <div className="nav-bar">
        <div className="logo">
          <img src="https://logowik.com/content/uploads/images/dmart-avenue-supermarts4302.jpg" />
        </div>
        <Link  to={'/'} className="nav-links">
          Home
        </Link>
      
        <Link to={"/devices"} className="nav-links">
          Devices
        </Link>
        <Link to={"/groceries"} className="nav-links">
          Groceries
        </Link>
        <Link  to={"/list-item"} className="nav-links">
          List Items
        </Link>
        <Link to={"/monthly-sales-report"} className="nav-links">
          Monthly report
        </Link>
       
      </div>
      <Routes>
      <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<Home/>}/>
        
        <Route path="/devices" element={<Devices/>}> 

        <Route path="electronics" element={<Electronics/>}/>
        <Route path="computer-accessories" element={<ComputerAccessories/>}/>
         </Route>
       
        <Route path="/groceries" element={<Groceries/>}>
          <Route path="packaged-goods" element={<PackagedGoods/>}/>
          <Route path="stand" element={<Stand/>}/>

        </Route>


        <Route path="/list-item" element={<ListItems/>}/>
        <Route path="/monthly-sales-report" element={<MonthlySalesReport/>}/>
      </Routes>
    </div>
  );
}

export default App;
