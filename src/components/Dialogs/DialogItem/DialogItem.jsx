import React from "react";
import { NavLink } from "react-router-dom";
import c from "./DialogItem.module.css";

const DialogItem = (props) => {
   return (
      <li className={c.item}>
         <img src={props.img} alt="dialogItem_img" />
         <NavLink to={'/dialogs/' + props.id}> {props.name}</NavLink>
      </li>
   )
}



export default DialogItem;
