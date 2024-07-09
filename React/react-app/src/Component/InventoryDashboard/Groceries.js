import { useState } from "react";
import PackagedGoods from "./PackagedGoods";
import '../../Component/ClassBased.css'

let Groceries = ()=>{
    let [grocery,setGrocery] = useState("Sugar");
    let [groceries,setGroceies] = useState({
        id: 1,
        name: "Pantry staples (spices, pasta, sauces)",
        image:
          "https://images.unsplash.com/photo-1542990253-a781e04c0082?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    )

    let addToCart =  (item)=>{
        setGrocery(item)
    }
    let addingToCart = (groceryItem)=>{
        setGroceies(groceryItem)
    }
    return(
        <div className="train-info">
            <h1>Groceries Parent</h1>
            <h3>{grocery}</h3>
            <h2>{groceries.name}</h2>
            <img src={groceries.image} width={'200px'}height={'200px'}/>
            {/* <PackagedGoods name={grocery}  addToCart ={addToCart}/> */}
            <PackagedGoods name={grocery}  addToCart ={addToCart} groceryName={groceries.name} groceryImage={groceries.image} addingToCart={addingToCart}/>
        </div>
    )
}
export default Groceries;

