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

  addNinja = (newNinja) => {
    newNinja.id = Math.random();
    let ninjas = [...this.state.ninjas, newNinja]
    this.setState({
      ninjas: ninjas
    });
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter( ninja => {
      return ninja.id !== id
    })
    this.setState({
      ninjas
    })
  }

  componentDidMount() {
    console.log(`Component mounted`);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component update');
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <Ninjas ninjas={ this.state.ninjas } deleteNinja={ this.deleteNinja }/>
        <AddNinja addNinja={ this.addNinja }/>
      </div>
    );
  }
}

export default App;
