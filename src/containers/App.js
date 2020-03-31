import React, { Component } from 'react';
import '../containers/App.css';
import Radium from 'radium'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  state = {
    persons: [
      { id: 'asd1', name: 'Sami', age: 10 },
      { id: 'asd2', name: 'Betul', age: 6 },
      { id: 'asd3', name: 'Merve', age: 28 }
    ],
    otherState: 'some other values',
    showPersons: true
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }



  render() {
    

    let persons = null;

    if (this.state.showPersons) {
      persons = 
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
        
      ;
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }
    }

   

    return (
      <div className="App">
        <Cockpit
        showPersons={this.state.showPersons}
        persons ={this.state.persons}
        toggle={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  }
}

export default Radium(App);
