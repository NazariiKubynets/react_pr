import React from 'react';
import c from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  if(!props.profile){
    return <div><img src="https://icons8.com/preloaders/generator.php?filmstrip&image=805&speed=6&fore_color=3A9C18&back_color=F4F4F4&size=64x64&transparency=1&reverse=0&orig_colors=0&gray_transp=0&image_type=2&inverse=0&flip=0&frames_amount=20&word=237-261-157-41-266-237-41-257-237-266-57-41-227-41-36-36-36"/>
  </div>}
  return <div className={c.content}>
    <img className={c.content__img} src='https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg' />
    <div className={c.content__data}>
      <img className={c.content__data_img} src={props.profile.img} />
      <div className={c.content__text}>
        <div className={c.content__name}>{props.profile.fullName}</div>
        <p>Date of Birth: {props.profile.birth}</p>
        <p>City: {props.profile.location.city}</p>
        <p>Education: {props.profile.education}</p>
        <p>Web Site:{props.profile.webSite}</p>
      </div>
    </div>
  </div>

}

export default ProfileInfo;