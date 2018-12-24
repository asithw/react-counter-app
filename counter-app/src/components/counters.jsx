import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 0, value: "0" },
      { id: 1, value: "1" },
      { id: 2, value: "2" }
    ]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(x => (
          <Counter key={x.id} value={x.value} selected="true"/>
        ))}
      </div>
    );
  }
}

export default Counters;
