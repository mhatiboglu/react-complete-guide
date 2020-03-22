import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  state = {
    persons: [
      { name: 'Sami', age: 10 },
      { name: 'Betul', age: 6 },
      { name: 'Merve', age: 28 }
    ],
    otherState: 'some other values',
    showPersons: true
  }

  handleOnClick = () => {
    //console.log('handled')
    this.setState({
      persons: [
        { name: 'Muh', age: 20 },
        { name: 'Bet', age: 6 },
        { name: 'Mer', age: 28 },
        //{ name: 'Merve', age: 28 },
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Muh', age: 20 },
        { name: event.target.value, age: 6 },
        { name: 'Merve', age: 28 },
        { name: 'Sam', age: 10 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }



  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
          persons = (<div >
            {this.state.persons.map(person =>{
                return <Person 
                  name={person.name}
                  age= {person.age}/>
           })}
          </div>)
    }

    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>Thi is really working</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
