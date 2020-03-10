import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <Person name='Sami' age='10'/>
        <Person name='Betul' age='6' />
      </div>
    );
  }
}

export default App;
