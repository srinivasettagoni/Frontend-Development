import React, { useCallback, useState } from "react";
import "../../../Component/ClassBased.css";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

function UseCallBack() {
  let [item, setItem] = useState(1);
  let [amount, setAmount] = useState(1000);

  let increaseItem = useCallback(() => {
    setItem(item + 1);
  }, [item]);
  // let increaseItem = ()=>{
  //     setItem(item + 1)
  // }

  let increaseAmount = useCallback(() => {
    setAmount(amount + 1000);
  }, [amount]);

  // let increaseAmount = ()=>{
  //     setAmount(amount + 1000)
  // };
  return (
    <div className="train-info">
      <Title />
      <Count name={item} />
      <Button handleClick={increaseItem}>Item</Button>
      <Count name={amount} />
      <Button handleClick={increaseAmount}>Amount</Button>
    </div>
  );
}

export default UseCallBack;
