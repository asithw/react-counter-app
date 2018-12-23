import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  customStyle = {
    marginTop: 20,
    fontSize: "19px",
    fontWeight: "bold"
  };

  render() {
    return (
      <React.Fragment>
        {/* expression is something thta produces a value*/}
        <span style={this.customStyle}>{this.state.count} world 1 </span>
        <button style={ {fontSize:50} } className="btn btn-primary">Hello {this.formatCount()} </button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <u>test</u> : count;
    //return count===0?"zero":count;
  }
}

export default Counter;
