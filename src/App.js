import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState(
    {
      persons: [
        { name: "Chase", age: 30},
        { name: "Richard", age: 34},
        { name: "Virag", age: 24}
      ],
      otherState: 'some other value'
    }
  );

  const switchNameHandler = () => {
    //console.log('Was clicked!');
    // Dont' do this: personsState.persons[0].name = "Chasers";
    setPersonsState({persons: [
      { name: "Chasers", age: 30},
      { name: "Richard", age: 34},
      { name: "Virag", age: 26}
    ]})
  }

     return (
      <div className="App">
        <h1>Hi, I'm a react app</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: nerd stuff</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }

export default app;