import React, { Component } from 'react';
import Ninjas from './Ninja'

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <Ninjas name="Ryu" age="25" belt="Black"/>
      </div>
    );
  }
}

export default App;
