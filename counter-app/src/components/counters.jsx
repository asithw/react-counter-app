import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [{ id: 0, value: 0 }, { id: 1, value: 2 }, { id: 2, value: 3 }]
  };

  handleIncrement = counter => {
    //https://stackoverflow.com/questions/23436437/why-can-i-change-value-of-a-constant-in-javascript

    const counters = [...this.state.counters]; //cloning
const index = counters.indexOf(counter);
    // counters[0].value++; //THIS WILL CHNAGE STATE property also....

    counters[index] = { ...counter }; // only clone the object
    counters[index].value++;

    console.log("after increment.. state value = ", this.state.counters[0].value);
    console.log("after increment.. const value = ", counters[0].value);
    this.setState({counters});
  };

  handleDelete = counter => {
    console.log(counter.id);
    const counters = this.state.counters.filter(x => x.id !== counter.id);
    this.setState({ counters });
  };

  handleReset = () => {
    console.log("reset");
    const counters = this.state.counters.map(y => {
      y.value = 0;
      return y;
    });

    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.handleReset}>
          Reset
        </button>
        {this.state.counters.map(x => (
          <Counter
            key={x.id}
            counter={x}
            selected="true"
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
