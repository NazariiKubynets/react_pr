import React from 'react';
import { NavLink } from 'react-router-dom';
import c from './Navbar.module.css';
import FriendItem from './FriendItem/FriendItem';

const Navbar = (props) => {
   let friendsElements = props.friends.map(f => <FriendItem name={f.name} img={f.img} key={f.id}/>);
   return (
      <nav className={c.app__nav}>
         <div className={c.item} >
            <NavLink to='/profile' className={navData => navData.isActive ? c.active : c.item}>Profile</NavLink>
         </div>
         <div className={c.item}>
            <NavLink to='/dialogs'>Messages</NavLink>
         </div>
         <div className={c.item}>
            <NavLink to='/news'>News</NavLink>
         </div>
         <div className={c.item}>
            <NavLink to='/music'>Music</NavLink>
         </div>
         <div className={c.item}>
            <NavLink to='/users'>Find users</NavLink>
         </div>
         <div className={c.item}>
            <NavLink to='/settings'>Settings</NavLink>
         </div>
         <div className={c.itemF}>
            <NavLink className={c.friends} to='/friends'>Friends</NavLink>
            <div className={c.friends__el}>
               {friendsElements}
            </div>
         </div>
      </nav>
   );

};

export default Navbar;
