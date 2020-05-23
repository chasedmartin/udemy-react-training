import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
     return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <Person name="Chase" age="30" />
        <Person name="Richard" age="34">My hobbies: nerd stuff</Person>
        <Person name="Virag" age="23" />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;