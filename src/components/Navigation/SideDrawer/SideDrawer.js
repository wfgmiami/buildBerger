import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import NavigationItem from '../NavigationItem/NavigationItem';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const SideDrawer = props => {
  console.log('props ', props)
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open]
  }
  return(
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>

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
