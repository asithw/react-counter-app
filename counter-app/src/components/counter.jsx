import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3", "tag4"]
  };

  customStyle = {
    marginTop: 20,
    fontSize: "19px",
    fontWeight: "bold"
  };

  renderTags() {
    if (this.state.tags.length == 0) return <h3>no tags found</h3>;
    return (
      <ul>
        {this.state.tags.map(x => (
          <li key={x}> {x} </li>
        ))}
      </ul>
    );
  }

handleIncrement(){
    console.log('function clicked!..');
    //console.log('function clicked!..', this.state.count); // this is not defined
}

render() {
    return (
      <React.Fragment>
        {this.state.tags.length === 0 && "Please create new tags"}
        {this.renderTags()}
        <button onClick={this.handleIncrement}> Increment </button>
      </React.Fragment>
    );
  }

  //   render() {
  //       let classes = this.getBadgeClasses();
  //     return (
  //       <React.Fragment>
  //         {/* expression is something thta produces a value*/}
  //         <span style={this.customStyle}>{this.state.count} world 1 </span>
  //         <button style={ {fontSize:50} } className={classes}>Hello {this.formatCount()} </button>

  //         <ul>{this.state.tags.map((x ,i )=> <li key={i}>{x}</li>)}</ul>

  //       </React.Fragment>
  //     );
  //   }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <u>test</u> : count;
    //return count===0?"zero":count;
  }
}

export default Counter;


/*
____conditional rendering_____-
jsx is not template engine, there is no f else condition like angular
conditional rendering should do with methods or aplying  logical and operation with non boolean value

Ex - 
true && false           => true
true && "abc"           => "abc"
true && 4               => 4
true && "wr" && "hi"    => "hi"

*/
