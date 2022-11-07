import React from "react";
import { NavLink } from "react-router-dom";
import c from "./Users.module.css";

let Users = (props) =>{
   
      let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);

      let pages = [];
      for(let i=1; i<= pagesCount; i++){
         pages.push(i);
      }
      return (
         <div>
            <div>{props.isFetching ? 
            <img src="https://icons8.com/preloaders/generator.php?filmstrip&image=805&speed=6&fore_color=3A9C18&back_color=F4F4F4&size=64x64&transparency=1&reverse=0&orig_colors=0&gray_transp=0&image_type=2&inverse=0&flip=0&frames_amount=20&word=237-261-157-41-266-237-41-257-237-266-57-41-227-41-36-36-36"/> 
            : null}</div>
            <div className={c.pages}>
               {pages.map(p => {
                  return <span className={props.currentPage === p && c.selectedPage} onClick={(e) => {props.onPageChanged(p);}}>{p}</span>
               })}
            </div>
            {
               props.users.map(u => <div key={u.id}>
                     <span>
                        <div className={c.userImg}>
                           <NavLink to={'./../profile/'+ u.id}>
                           <img src={u.img} />
                           </NavLink>
                        </div>
                        <div>
                           {u.followed
                              ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                              : <button onClick={() => { props.follow(u.id) }}>Follow</button>
                           }
                        </div>
                     </span>
                     <span>
                        <span>
                           <div>{u.fullName}</div>
                           <div>{u.status}</div>
                        </span>
                        <span>
                           <div>{u.location.country}</div>
                           <div>{u.location.city}</div>
                        </span>
                     </span>
   
                  </div>)
            }
         </div>
      )
   
}

export default Users;