import React, { Component } from "react";

//controlled component = no state , control by parent component

class Counter extends Component {
  //   state = {
  //     value: this.props.counter.value
  //   };

  //   handleIncrement = () => {
  //     this.setState({ value: this.state.value + 1 });
  //   };

  componentDidUpdate(preProps, preState) {
    console.log("counter - componentDidUpdate");
    console.log("preProps - ", preProps);
    console.log("preState - ", preState);

    if (this.props.counter.value !== preProps.counter.value) {
      //call ajax call() and get new data from server
      //
    }
  }

  //just before a component is removed from the  Dom 
  componentWillUnmount(){
    console.log("counter - component Will Unmount");
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  render() {
    console.log("Counter - render");

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }
}
export default Counter;
