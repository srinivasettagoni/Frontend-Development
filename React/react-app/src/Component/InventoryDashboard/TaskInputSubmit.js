import React, { useState } from "react";

function TaskInputSubmit() {
  let [inputValue, setInputValue] = useState("");
  let [submittedData, setSubmittedData] = useState([]);

  let handleSubmit = (e) => {
    // console.log(e.target.value)
    e.preventDefault();
    // setSubmitValue(inputValue);
    // if (inputValue.trim()) {
      setSubmittedData([...submittedData, inputValue]);  // State to store the list of submitted data (an array of strings)
      setInputValue("");
    // }
    // console.log(submittedData);
  };
  let handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div>
      <h1>Input Submit Data Task</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      {/* <div>
       {submittedValue.map((item,index)=>(
            <h2 key={index}>{item}</h2>
       ))}
      </div> */}
      <div>
        {submittedData.map((item, index) => {
          return <div key={index}>{item}</div>;
        })}
      </div>
    </div>
  );
}

export default TaskInputSubmit;
