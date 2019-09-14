import React from 'react';
import {NavLink} from 'react-router-dom';

const NavigationItem = ( props ) => {
  return (
    <li>
      <NavLink
        exact
        to={props.link}
      >
        {props.childrent}
      </NavLink>
    </li>
  )
}

export default NavigationItem;
