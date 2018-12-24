import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 0, value: 1 },
      { id: 1, value: 2 },
      { id: 2, value: 3 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(x => (
          <Counter key={x.id} value={x.value} selected="true">
          <h3>Title # {x.id}</h3>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
