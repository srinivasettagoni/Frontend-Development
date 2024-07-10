import React, { useEffect, useState } from "react";
import "../../Component/ClassBased.css";

function ComputerAccessories() {
  let [state, setState] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVaCChce9dJuR9nyr-M0pxk6pBPbi2-mFbiw&s"
  );
  let [mouse, setMouse] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJNHtIr3-aMY894l-By-LYu2gv1clt5xv2nw&s"
  );
  let [headset, setHeadset] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP06gLVRSOjjoG1qy9PpcXSpOlJGuMngkjNQ&s"
  );
  useEffect(() => {
    console.log("This is useEffect and auto calling ");

    return () => {
      localStorage.removeItem("name");
      console.log("This is Un mount or clear Phase");
      // alert("This is Un mount Phase")
    };
  }, [mouse]);

  let getLocalItem = () => {
    localStorage.setItem("name", "Darwin");
    localStorage.setItem("age", 25);
    console.log("This is Local Item");
  };
  return (
    <div>
      <div className="train-info">
        <img src={state} />
        <img src={mouse} />
        <img src={headset} />
        <button
          onClick={() => {
            setState(
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl1CqJIXyo5W8Ijn7uBJnweuH2dRUsdqYJuw&s"
            );
          }}
        >
          Mobile
        </button>
        <button
          onClick={() => {
            setMouse(
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-YNGNMESUgpeHH4L7Q3IH49gxCWKhQurR-g&s"
            );
          }}
        >
          Keyboard
        </button>
        <button
          onClick={() => {
            setHeadset(
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyfsaodPXPlW807Z51ibkfxTX_craZ3m_f1A&s"
            );
          }}
        >
          Headset
        </button>
        <button onClick={getLocalItem}> Set Local Item</button>
      </div>
    </div>
  );
}

export default ComputerAccessories;
