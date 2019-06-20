import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id:1, name: "John",age:29 },
      { id:2, name: "Max",age:20 },
      { id:3, name: "Jane",age:28 }
    ]
  }

  nameChangedHandler = (event,id) => {
	//console.log('was clicked');
	const personIndex = this.state.persons.findIndex(p => {
		return p.id = id;
	});

	const person = { ...this.state.persons[personIndex] }

	person.name = event.target.value;

	const persons = [...this.state.persons]
	persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  switchNameHandler = (name) => {
    //console.log('was clicked');
    this.setState({
      persons: [
        { id:1, name: "John Doe",age:29 },
        { id:2, name: name,age:20 },
        { id:3, name: "Jane",age:27 }
      ],
      showPersons: false
    });
  }

  deletePersonHandler = (personIndex) => {
	  const personObject = [...this.state.persons];
	  personObject.splice(personIndex,1);
	  this.setState({persons:personObject});
  }

  togglePersonsHanler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
			{this.state.persons.map((person,index) => {
				return <Person 
					click={() => this.deletePersonHandler(index)}
					name={person.name} 
					age={person.age} 
					key={person.id} 
					changed={(event) => this.nameChangedHandler(event,person.id)}/>	
			})}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p> This is really working!</p>
        <button onClick={this.togglePersonsHanler}>Toggle Persons</button>
        {persons}
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does This Work Now?'));
  }
}

export default App;