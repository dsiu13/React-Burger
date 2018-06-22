import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

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
          <Button btnType="Danger" clicked={this.props.buyCancelHandler}>Cancel?</Button>
          <Button btnType="Success" clicked={this.props.continueHandler}>Continue?</Button>
        </Aux>
      )
  }
}

export default OrderSummary;
