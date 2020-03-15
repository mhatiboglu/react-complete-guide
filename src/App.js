import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  state = {
    persons : [
      {name : 'Sami', age: 10},
      {name : 'Betul', age: 6},
      {name : 'Merve', age: 28}
    ]
  }

  handleOnClick= ()=>{
    //console.log('handled')
    this.setState({
      persons: [
        { name: 'Muh', age: 20 },
        { name: 'Betul', age: 6 },
        { name: 'Merve', age: 28 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Muh', age: 20 },
        { name: event.target.value , age: 6 },
        { name: 'Merve', age: 28 },
        { name: 'Sam', age: 10 }
      ]
    })
  }



  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>Thi is really working</p>
        <button onClick= {this.handleOnClick}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}
          changed={this.nameChangedHandler} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> Hi there!</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}> Hi there!</Person>
      </div>
    );
  }
}

export default App;
