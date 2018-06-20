import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
  .map(igKey => {
    return <li>
      <span style={{textTransform: 'capitalize'}}>{igKey}:</span>
      {props.ingredients[igKey]}</li>
  })

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Your Burger contains the following:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Checkout?</p>
    </Aux>
  );
};

export default orderSummary;
