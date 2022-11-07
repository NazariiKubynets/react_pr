import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Header.module.css';

const Header = (props) => {
   return <header className={c.app_header}>
      <img className={c.logo_img} src='https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png' />
      <div className={c.loginBlog}>
         {props.isFetching? props.login: 
         <NavLink to={'/login'}>Login</NavLink> }
      </div>
   </header>
};

export default Header;