import { useRef } from "react";
import "../../Component/ClassBased.css";
function RefObj(){
    let h2Ref = useRef()
    let getRef = ()=>{
        console.log("Hello get Ref");
        // document.getElementById("text").style.backgroundColor = "yellow";
        h2Ref.current.style.backgroundColor = "yellow";
    }
    return(
        <div className="train-info">
            <h2 id="text" ref={h2Ref}>This is  use Ref Hook</h2>
            <button onClick={getRef}>Change</button>
        </div>
    )
}
export default RefObj;