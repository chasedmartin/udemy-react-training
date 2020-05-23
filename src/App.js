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
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    //console.log('Was clicked!');
    // Dont' do this: this.state.persons[0].name = "Chasers";
    this.setState({persons: [
      { name: "Chasers", age: 30},
      { name: "Richard", age: 34},
      { name: "Virag", age: 26}
    ]})
  }

  render() {
     return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: nerd stuff</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;