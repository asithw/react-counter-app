import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onDelete, onIncrement, counters, onReset } = this.props;
    console.log("Counters - render");
    return (
      <div>
        <button className="btn btn-primary" onClick={onReset}>
          Reset
        </button>
        {counters.map(x => (
          <Counter
            key={x.id}
            counter={x}
            selected="true"
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
