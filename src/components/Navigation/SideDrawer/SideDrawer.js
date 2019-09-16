import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import NavigationItem from '../NavigationItem/NavigationItem';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const SideDrawer = props => {

  return(
    <Aux>
      <Backdrop show />
      <div className={classes.SideDrawer}>

        <div className={classes.Logo}>
          {/* <Logo height="11%"/> */}
          <Logo/>
        </div>
        <nav>
          <NavigationItems />
        </nav>

      </div>
    </Aux>

  )
};

export default SideDrawer;
