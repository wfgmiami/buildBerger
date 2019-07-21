import React from 'react';
import classes from './Person.css'
// import Radium from 'radium';

const person = (props) => {

  // const style = {
  //   '@media (min-wdith: 500px)':{
  //     wdith: '450px'
  //   }
  // }
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  )
}

export default person;
