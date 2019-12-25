import React, { Component,useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app=(props)=>{
  const [personState,personStateHandler]=useState({
    person:[
      {name: "Abhinav", age:18},
      {name: "Bansal", age:19} 
    ]
  });

  const SwitchStateHandler=()=>{
    return (
      personStateHandler({
        person:[
          {name: "Ayushi", age:18},
          {name: "Bansal", age:19} 
        ]
      })
    )
  }
  const InputChangeHandler=(event)=>{
    return(
      personStateHandler({
        person:[
          {name: event.target.value, age:18},
          {name: "Bansal", age:19} 
        ]
      })
    )
  }
  return (
    <div className="App">
      <p>Hello, This is working</p>
      <button onClick={SwitchStateHandler}>Click Me!</button>
      <Person 
        name={personState.person[0].name} 
        age={personState.person[0].age}
      />
      <Person 
        name={personState.person[1].name} 
        age={personState.person[1].age} 
        click={InputChangeHandler}
      >
        Hello, from chideren
      </Person>
    </div>
  );
}

export default app;
