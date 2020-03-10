import React from 'react';

 
 const Person = (props) => {
     return  (
     <div> 
         <p>I'm {props.name} and {props.age} years old.  </p>
     <p>{props.children}</p>
     <input type= 'text' onChange={props.changed} value={props.name}/>
    </div> )
 }

 export default Person;