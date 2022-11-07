import axios from 'axios';
import React from 'react';
import Header from './Header';
import { setAuthUserData } from '../../Redux/auth-reducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
   componentDidMount(){
      axios.get(`http://localhost:3001/authPage`)
         .then(response => { 
            if(response.data[0].resultCode === 0 ){
               let {userId, email, login} = response.data[2].data;
               this.props.setAuthUserData(userId, email, login);
            }
            });
   }

   render(){
      return <Header {...this.props}/>
   }
};

const mapStateToProps = (state) => ({
   isFetching: state.auth.isFetching,
   login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);