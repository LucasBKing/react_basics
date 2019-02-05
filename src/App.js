import React, { Component } from 'react';

class App extends Component {
  state = {
    name: 'Ryu',
    age: 30
  }

  handleClick = (e) => {
    //console.log(e.target)
    // How access this.state? using arrow function
    this.setState({
      name: 'Yoshi'
    });
    console.log(this.state);
  }

  handleMouseOver = (e) => {
    console.log(e.target, e.pageX);
  }

  handleCopy = (e) => {
    console.log('Try being original for once!');
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <p>My name is: { this.state.name } and I am { this.state.age }</p>
        <button onClick={ this.handleClick }>Click Me</button>
        <button onMouseOver={  this.handleMouseOver }>Hover me</button>
        <p onCopy={ this.handleCopy }>What we think, we become</p>
      </div>
    );
  }
}

export default App;
