import React from 'react';
import logoImg from '../../assets/images/burger-logo.png';
import classes from './Logo.css'

const Logo = (props) => (
  <div className={classes.Logo}>
    <img src={logoImg} alt="My Logo" />
  </div>
);

export default Logo;
