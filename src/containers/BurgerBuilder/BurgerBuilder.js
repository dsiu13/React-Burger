import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

  // constructor(props){
  //   super()
  // }

  render (){
    return (
      <Aux>
        <div><Burger /></div>
        <div>Build Controller</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
