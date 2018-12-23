import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    //this.handleIncrement = this.handleIncrement.bind(this);
  }

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

//   handleIncrement() {
//     console.log("function clicked!..");
//     this.setState({ count: this.state.count++ });
//     console.log('function clicked!..', this); // this is not defined
//   }


  handleIncrement = (para1) => {
      console.log(para1)
    this.setState({ count: this.state.count + 2 });
  };


  render() {
    return (
      <React.Fragment>
        {this.state.tags.length === 0 && "Please create new tags"}
        {this.renderTags()}
        {this.state.count}
        <button onClick={() => this.handleIncrement( {id:23456} ) }> Increment </button>
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

=============================
in react , state is not directly modified
need to use setState method to update state

depending on how function is called 'this' can referenc different object

//obj.method();
if function is called as a part of method in object, 'this' in that function would always return
reference to the object

//function();
if function is called as standalone function without object reference, 'this' by default returns reference
to the window object, if strict mode is enabled 'this' returns undefuned


in the constructor, 'this' is not undefined
to fix this issue there is 2 solution,
1 - bind event handlers
2 - arrow function

// === passing argument to event handler
using inline function (arrow function)
*/
