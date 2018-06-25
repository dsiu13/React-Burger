import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Nav/Toolbar/Toolbar';
import SideDrawer from '../Nav/SideDrawer/SideDrawer';

class Layout extends Component {

constructor(props) {
  super(props)
    this.state = {
      showSideDrawer: true
    }
}

  sideDrawerClosedHandler = () => {
    this.setState=({showSideDrawer:false});
  }

  render () {
    return (
      <Aux>
        <Toolbar />
        <SideDrawer open={this.state.sideDrawerClosedHandler}
        closed={this.sideDrawerClosedHandler}/>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;
