import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
    
  state = {
    counters: [{ id: 0, value: 0 }, { id: 1, value: 2 }, { id: 2, value: 3 }]
  };

  handleDelete = id => {
    console.log(id);
    const counters = this.state.counters.filter(x => x.id !== id);
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
            //onDelete={() =>this.handleDelete(x.id)}
            onDelete={this.handleDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
