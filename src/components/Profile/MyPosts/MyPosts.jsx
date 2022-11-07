import React from "react";
import c from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props) => {

   let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);

   let newPostElement = React.createRef();

   let onAddPost = () => { 
      props.addPost();
   }

   let onPostChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
   }

   return (
      <div>
         My posts
         <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
            <div className={c.myPosts__btn}><button onClick={onAddPost}>Add post</button></div>
         </div>
         <div className={c.posts}>
            {postsElements}
         </div>
      </div>
   )
}

export default MyPosts;
