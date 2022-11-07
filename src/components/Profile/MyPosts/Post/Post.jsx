import React from "react";
import c from './Post.module.css';

const Post = (props) => {
   return (
      <div className={c.item}>
         <img src="https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg" alt="img-Post" />
          {props.message}
         <div><span>Like {props.likesCount}</span></div>
      </div>
   )
}

export default Post;