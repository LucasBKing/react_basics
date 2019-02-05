import React, { Component } from 'react';
import Ninjas from './Ninja'
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas: [
      {id: 1, name: 'Name one', age: 10, belt: 'white'},
      {id: 2, name: 'Name two', age: 12, belt: 'brown'},
      {id: 3, name: 'Name three', age: 14, belt: 'black'}
    ]
  }

  render() {
    return (
      <div className="App">
        <Ninjas ninjas={this.state.ninjas}/>
        <AddNinja />
      </div>
    );
  }
}

export default App;
