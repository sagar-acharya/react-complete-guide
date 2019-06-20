import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {
  state = {
    userInput: ''
  }

  
  calculateInputLength = (event) => {
	this.setState({
		userInput: event.target.value
	});
  }

  deleteCharHandler = (index) => {
	const text = this.state.userInput.split('');
	text.splice(index,1);
	const updatedText = text.join('');
	this.setState({ userInput: updatedText });
  }

  render() {
	const style = {
		marginTop: '20px',
	}

	const charList = this.state.userInput.split('').map((char,index) => {
		return <Char character={char} key={index} clicked={() => this.deleteCharHandler(index)}/>
	});
    return (
      <div className="App" style={style}>
		<div style={style}>
			<input 
			type="text" 
			onChange={(event) => this.calculateInputLength(event)} 
			placeholder="Type to count length"
			value={this.state.userInput}
			/>
		</div>
		<Validation lengthOfInput={this.state.userInput.length} />
		<div style={style}>
			<span>Input Field Length: <strong>{this.state.userInput.length}</strong></span>
		</div>
        {charList}
      </div>
    );
    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does This Work Now?'));
  }
}

export default App;