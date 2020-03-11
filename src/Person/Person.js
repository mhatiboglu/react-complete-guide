import React from 'react';
import './Person.css';
 
 const Person = (props) => {
     return  (
     <div className='Person'> 
         <p>I'm {props.name} and {props.age} years old.  </p>
     <p style={{color:'red'}}>{props.children}</p>
     <input type= 'text' onChange={props.changed} value={props.name}/>
    </div> )
 }

 export default Person;