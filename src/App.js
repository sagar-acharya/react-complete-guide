import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "John",age:29 },
      { name: "Max",age:20 },
      { name: "Jane",age:28 }
    ]
  }

  switchNameHandler = (name) => {
    //console.log('was clicked');
    this.setState({
      persons: [
        { name: "John Doe",age:29 },
        { name: name,age:20 },
        { name: "Jane",age:27 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "John Doe",age:29 },
        { name: event.target.value,age:20 },
        { name: "Jane",age:27 }
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p> This is really working!</p>
        <button onClick={this.switchNameHandler.bind(this,'MaxWorld')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age} 
        click={this.switchNameHandler.bind(this, 'MaxMillion')}
        changed={this.nameChangedHandler}
        >My hobbies : Racing </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does This Work Now?'));
  }
}

export default App;