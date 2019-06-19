import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Test</h1>
      </div>
      <h1>test2</h1>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does This Work Now?'));
  }
}

export default App;