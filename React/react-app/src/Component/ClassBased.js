import React, { Component } from "react";
import "./ClassBased.css";

class ClassBased extends Component {
  constructor() {
    super();
    this.state = {
      trainInfo: "Morining train at 09:00",
    };
  }

  handleClick = () => {
    // this.state.trainInfo= "Evening train going to arrive at 08:00";
    // console.log(this.state.trainInfo)
    // this.forceUpdate()
    this.setState({
      trainInfo: "Evening train going to arrive at 08:00",
    });
  };
  render() {
    return (
      <div className="train-info">
        <div> Welcome to Class Based Component</div>
        <h2>{this.state.trainInfo}</h2>
        <button onClick={this.handleClick}>Train Status</button>
      </div>
    );
  }
}
export default ClassBased;
