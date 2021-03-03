import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Chase", age: 30},
      { name: "Richard", age: 34},
      { name: "Virag", age: 24}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    // Dont' do this: this.state.persons[0].name = "Chasers";
    this.setState({persons: [
      { name: newName, age: 30},
      { name: "Richard", age: 34},
      { name: "Virag", age: 26}
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      { name: 'Chase', age: 30},
      { name: event.target.value, age: 34},
      { name: 'Virag', age: 24}
    ]})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

     return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {this.state.showPersons === true ?
          <div>
            <Person 
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            <Person 
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, 'Queso')} 
              changed={this.nameChangedHandler} >My hobbies: nerd stuff</Person>
            <Person 
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} />
          </div> : null
        }
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;