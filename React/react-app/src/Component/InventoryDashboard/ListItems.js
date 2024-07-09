import { useState } from "react";
import groceriesData from '../Item.js'
let ListItem = ()=>{

    let [list,setList] = useState(groceriesData)
    //   console.log(list)
    return(
        <div>
            <h1>List item</h1>
                <div>
                 {list.map((data)=>{
                    return (
                      <div>
                        <h2>{data.id}</h2>
                        <h3>{data.name}</h3>
                        <img src={data.image} width="200px" height="200px" alt="Hello"/>
                        </div>
                    )
                 })}
                </div>
        </div>
    )
}
export default ListItem;