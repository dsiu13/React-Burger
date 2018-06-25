import React from 'react';
import Logo from '../../Logo/Logo'
import NavItems from '../NavItems/NavItems'
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';


const sideDrawer = (props) => {

  return (
    <Aux>
    <Backdrop />
    <div className={classes.SideDrawer}>
      <Logo height="11%"/>
      <nav>
        <NavItems />
      </nav>
    </div>
    </Aux>
  );
}

export default sideDrawer;
