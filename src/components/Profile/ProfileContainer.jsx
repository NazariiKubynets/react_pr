import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Profile from './Profile';
import c from './Profile.module.css';
import { setUserProfile } from '../../Redux/profile-reducer';
import axios from 'axios';
import { connect } from 'react-redux';
import {useLocation,useNavigate,useParams} from "react-router-dom";


class ProfileContainer extends React.Component {

   componentDidMount() {
      let userId = this.props.router.params.userId;
      if(!userId) {userId=3;}
      axios.get(`http://localhost:3001/profilePage/`+ userId)
         .then(response => {
            this.props.setUserProfile(response.data);
         });
   }

   render() {
      return (
         <Profile {...this.props} profile={this.props.profile} />
      )
   }

}

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile
});

function withRouter(Component) {
   function ComponentWithRouterProp(props) {
       let location = useLocation();
       let navigate = useNavigate();
       let params = useParams();
       return (
           <Component
               {...props}
               router={{ location, navigate, params }}
           />
       );
   }

   return ComponentWithRouterProp;
}

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer));