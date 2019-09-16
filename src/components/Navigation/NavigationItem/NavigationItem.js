import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './NavigationItem.module.css';

const NavigationItem = ( props ) => {
  return (
    <li className={classes.NavigationItem}>
      <a
        href={props.link}
        className={props.active ? classes.active : null}
      >
        {props.children}
      </a>
    </li>
    // <li>
    //   <NavLink
    //     exact
    //     to={props.link}
    //   >
    //     {props.childrent}
    //   </NavLink>
    // </li>
  )
}

export default NavigationItem;
