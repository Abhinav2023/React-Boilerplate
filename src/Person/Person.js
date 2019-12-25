import React from 'react';
import './Person.css';
const person=(props)=>{
    return(
        <div className="Person">
            <p>Hello My name is {props.name} and age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.click} value={props.name} />
        </div>
    )
};

export default person;