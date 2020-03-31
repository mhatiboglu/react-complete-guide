import React from 'react';
import './Cockpit.css';

const cockpit = (props) => {

    let classes = [];
    if (props.persons.length <= 2) {
        classes.push('red')
    }
    if (props.persons.length <= 1) {
        classes.push('bold')
    }


    const style = {
        backgroundColor: 'green',
        color: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        marginBottom: '15px',
        ':hover': {
            backgroundColor: 'lightgreen',
            color: 'black'
        }

    };

    if(props.showPersons){
        style.backgroundColor = 'red';
        style[':hover'] = {
            backgroundColor: 'salmon',
            color: 'black'
        }

    }


    return (
        <div>
            <h1>Hi I'm a React App</h1>
            <p className={classes.join(' ')}>Thi is really working</p>
            <button
                style={style}
                onClick={props.toggle}>Toggle Persons</button>
            </div>
    )
}

export default cockpit;