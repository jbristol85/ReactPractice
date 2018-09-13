import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
    state = {
        ninjas: [
            { name: "Josh", age: 32, belt: "black", id: 1 },
            { name: "Jim", age: 31, belt: "blue", id: 2 },
            { name: "Matt", age: 20, belt: "brown", id: 3 }
        ]
    }
  render() {
    return (
      <div className="App">
          <h1>My first React App!</h1>
          <Ninjas ninjas= { this.state.ninjas } />

      </div>
    );  
  }
}

export default App;
