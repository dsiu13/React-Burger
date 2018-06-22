import React from 'react';
import classes from './Button.css'

const Button = (props) => (
  <button onClick={props.clicked} className={[classes.Button[props.btnTypes]].join(' ')}>
    {props.children}
  </button>
)

export default Button;
