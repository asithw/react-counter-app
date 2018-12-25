import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

class App extends Component {
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

    console.log(
      "after increment.. state value = ",
      this.state.counters[0].value
    );
    console.log("after increment.. const value = ", counters[0].value);
    this.setState({ counters });
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
      <React.Fragment>
        <NavBar totalCounters = {this.state.counters.filter(x => x.value !==0).length}/>
        <main className="containers">
          <Counters
            counters = {this.state.counters}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
