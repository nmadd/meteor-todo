import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = (props) => (
 <ul>
   {props.items.map((item, index) => (<li key={index}><Link to={item.url}>{item.text}</Link></li>))}
 </ul>
);

export default NavBar;
