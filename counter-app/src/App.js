import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

class App extends Component {
  state = {
    counters: [{ id: 0, value: 0 }, { id: 1, value: 2 }, { id: 2, value: 3 }]
  };

  constructor(props) {
    super(props);
    console.log("App - constructor");
    this.state.counters =[{ id: 0, value: 0 }, { id: 1, value: 2 }, { id: 2, value: 3 }];
    //in the constructor we set this.state directly
    //BUT setState() method can only be called when a component is rendered and placed in the Dom (not here)

    //console.log(this.props);
    //this.props is undefined unless it is pass as parameter
  }

  //called after  component is rendered into the Dom
  componentDidMount() {
    //getAjaxCall()
    // this.setState({ counters });
    console.log("App - componentDidMount");
  }

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
    console.log("App - render");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(x => x.value !== 0).length}
        />
        <main className="containers">
          <Counters
            counters={this.state.counters}
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

// App - constructor
// App - render
// Counters - render
// Counter - render
// App - componentDidMount

/*
our components go through a few phases
during their lifecycle the first phase is the mounting phase and this is when
an instance of a component is created and inserted into the Dom.
 there are a few special methods that we can add to our components and react will
automatically call these methods 
we refer to these methods as lifecycle  hooks 
so they allow us to hook into certain moments during the lifecycle of a component and do something and the

mounting phase we have three lifecycle hooks 
- constructor 
- render and 
- component did mount 
react will call these methods in order 

the second lifecycle phase is
the update phase  
and this happens when the state or the props of a component get changed 

in this phase 
we have two lifecycle hooks 
-render and 
-component did update 
so whenever we change the state of a component or give it new props
these two methods are called in order

and the last phase is the unmounting phase 
and this is when a component is removed from the Dom such as when we

component did mount this method is called after our component is rendered
into the Dom 
and it's the perfect place to make Ajax calls to get data from the
server so we can do an ajax call and then call the set state with new data

when component is rendered which basically returns a react element that  represents  virtual Dom 
now react gets that virtual Dom and render it in the actual browser Dom and then fires component mount event

when a component is rendered all is children are also rendered and recursively


update phase  
that phase happens whenever the state or props of a component changes 

updating the state of a component,all children are going to be (re)rendered as well.
if entire component tree is rendered that doesn't mean that the entire DOM is  rendered .

when a component is rendered we basically get a react element .that is updating the virtual dom.
react will then look at the virtual Dom it also has a copy of the old virtual Dom 
that's why we should not update the state directly .

using old virtual Dom and new virtual Dom ,
react  ll figure out what is changed
and based on that it will update the real Dom accordingly 

component will unmount phase

 this method is called just before a component is removed from the  Dom 
 */
