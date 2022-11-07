import React from "react";
import c from "./FriendItem.module.css";

const FriendItem = (props) => {
   return (
      <div className={c.item}><img src={props.img} alt="" /><br/>{props.name}</div>
   )
}



export default FriendItem;
