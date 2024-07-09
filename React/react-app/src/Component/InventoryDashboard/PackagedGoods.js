import './PackagedGoods.css'
let PackagedGoods = (props)=>{
    
   
    let adding = ()=>{
        props.addToCart("Wheate Rice")
        props.addingToCart({
            id: 2,
            name: "Legumes (beans, lentils, peanuts)",
            image:
              "https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          })

    }
    return(
        <div className="goods">
            <h2>PackagedGoods Child </h2>
            {/* <h1>{props.name}</h1> */}
            {/* <h1>{props.groceryName}</h1> */}
            {/* <img src={props.groceryImage} width={"200px"} height={"200px"}/> */}
            <button onClick={adding}>Add cart</button>
        </div>
    )
}
export default PackagedGoods;