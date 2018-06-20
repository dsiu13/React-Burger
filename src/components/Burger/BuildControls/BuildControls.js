import React from 'react';

import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Bacon', type: 'bacon' },
  { label: 'Tomato', type: 'tomato' },
  { label: 'Onion', type: 'onion' },
  { label: 'Lettuce', type: 'lettuce' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },

];

const buildControls = (props) => (
  <div className={classes.BuildControls}>
    <p>Current Total: <strong>${props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientsAdded(ctrl.type)}
        removed={() => props.ingredientsRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]} />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.buyable}>Order Now</button>
  </div>
);

export default buildControls;
