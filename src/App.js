import React, { Component } from 'react';

class App extends Component {
  state = {
    name: 'Ryu',
    age: 30
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  handleSubmit = (e) => {
    //prevent default behaviour
    e.preventDefault()
    console.log(`Form submitted ${this.state.name}`)
  }

  render() {
    return (
      <div className="App">
        <p>My name is: { this.state.name } and I am { this.state.age }</p>
        <form onSubmit={ this.handleSubmit }>
          <input type="text" onChange={ this.handleChange } />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
