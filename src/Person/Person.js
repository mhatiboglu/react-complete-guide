import React from 'react';
import './Person.css';

const Person = (props) => {
    return (
        <div
            className='Person'>
            <p onClick={props.click}>
                I'm {props.name} and {props.age} years old.  </p>
            <p style={{ color: 'red' }}>{props.children}</p>
            <input
                type='text'
                onChange={props.click}
                value={props.name} />
        </div>)
}

export default Person;