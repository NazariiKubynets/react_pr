import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow } from "../../Redux/user-reducer";
import * as axios from "axios";
import Users from "./Users";


class UsersContainer extends React.Component {
   componentDidMount() {
      this.props.toggleIsFetching(true);
      axios.get(`http://localhost:3001/usersPage?_page=${this.props.currentPage}&_limit=${this.props.pageSize}`)
         .then(response => { 
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data);
            this.props.setTotalUsersCount(response.data[0].totalCount);
         });
   }



   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      this.props.toggleIsFetching(true);
      axios.get(`http://localhost:3001/usersPage?_page=${pageNumber}&_limit=${this.props.pageSize}`)
         .then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data);
         });
   }

   render() {
      return <Users totalUsersCount={this.props.totalUsersCount}
         pageSize={this.props.pageSize}
         currentPage={this.props.currentPage}
         onPageChanged={this.onPageChanged}
         users={this.props.users}
         unfollow={this.props.unfollow}
         follow={this.props.follow}
         isFetching={this.props.isFetching} />
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching
   }
}

// let mapDispatchToProps = (dispatch) => {
//    return {
//       follow: (userId) => {
//          dispatch(followAC(userId));
//       },
//       unfollow: (userId) => {
//          dispatch(unfollowAC(userId));
//       },
//       setUsers: (users) => {
//          dispatch(setUsersAC(users));
//       },
//       setCurrentPage: (pageNumber) => {
//          dispatch(setCurrentPageAC(pageNumber));
//       },
//       setTotalUsersCount: (totalCount) => {
//          dispatch(setTotalUsersCountAC(totalCount));
//       },
//       setToggleIsFetching: (isFetching) => {
//          dispatch(toggleIsFetchingAC(isFetching));
//       }

//    }
// }

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching })(UsersContainer);