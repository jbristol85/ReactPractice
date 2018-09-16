import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Josh", age: 32, belt: "black", id: 1 },
      { name: "Jim", age: 31, belt: "blue", id: 2 },
      { name: "Matt", age: 20, belt: "brown", id: 3 }
    ]
  };
  addNinja = ninja => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]; //makes a carbon copy of the ninjas array in state
    this.setState({
      ninjas: ninjas
    });
  };
  deleteNinja = id => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: ninjas
    });
  };
  render() {
    return (
      <div className="App">
        <h1>My first React App!</h1>
        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
