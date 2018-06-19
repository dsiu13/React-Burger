import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ingredients: {
        tomato: 1,
        onion: 1,
        bacon: 1,
        lettuce: 1,
        cheese: 2,
        meat: 2,
      }
    };
  }

  render (){
    return (
      <Aux>
        <div><Burger ingredients={this.state.ingredients}/></div>
        <div>Build Controller</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
