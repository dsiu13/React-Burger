import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log('[OrderSummary] WillUpdate');
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
        return (
          <li key={igKey}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>:{this.props.ingredients[igKey]}
          </li>
        );
      });

      return (
        <Aux>
          <h3>Your Order</h3>
          <p>Your Burger contains the following:</p>
          <ul>
              {ingredientSummary}
          </ul>
          <p>Continue to Checkout?</p>
        </Aux>
      )
  }
}

export default OrderSummary;
