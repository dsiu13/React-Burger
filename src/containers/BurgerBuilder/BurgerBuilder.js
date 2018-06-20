import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import orderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
  lettuce: 0.25,
  bacon: 0.5,
  meat: 1,
  cheese: 0.5,
  onion: 0.25,
  tomato: 0.25
};

const TAX = 1.0825;

class BurgerBuilder extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ingredients: {
        bacon: 0,
        tomato: 0,
        onion: 0,
        lettuce: 0,
        cheese: 0,
        meat: 0
      },
      totalPrice: 2,
      buyable: false
    };
  }

  updateBuyState (ingredients) {
      const sum = Object.keys(ingredients)
          .map( igKey => {
              return ingredients[igKey];
          })
          .reduce( ( sum, el ) => {
              return sum + el;
          }, 0 );
      this.setState({ buyable: sum > 0 });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };

    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition * TAX
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    this.updateBuyState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };

    updatedIngredients[type] = updatedCount;
    const priceSubtraction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceSubtraction * TAX
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    this.updateBuyState(updatedIngredients);
  };

  render (){
    const disabledInfo = {
        ...this.state.ingredients
    };
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
      <Aux>
        <Modal> <orderSummary ingredients={this.state.ingredients} /> </Modal>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientsAdded={this.addIngredientHandler}
          ingredientsRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchase={this.state.buyable} />
      </Aux>
    );
  }
}

export default BurgerBuilder;
