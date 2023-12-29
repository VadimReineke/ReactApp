import React from 'react';
import { connect } from 'react-redux';
import { followAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, toggleIsFetchingAC, unfollowAC } from '../../redux/users-reducer';

import axios from 'axios';
import Users from './Users'

import classes from './User.module.css'
import Preloader from '../Common/Preloader/Preloader';


class UsersContainer extends React.Component {
   componentDidMount = () => {
      this.props.toggleIsFetching(true);
       axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items);
         this.props.setTotalUsersCount(response.data.totalCount);
         this.props.toggleIsFetching(false);    
       })
   }

   onPageChanged = (pageNumber) => {
      this.props.toggleIsFetching(true);
       this.props.setCurrentPage(pageNumber)
       axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items)
         this.props.toggleIsFetching(false); 
       })
   }
   render() {
       return <>
       { this.props.isFetching ? <Preloader /> : null}

       <Users users={this.props.users}
       totalUserCount={this.props.totalUserCount}
       pageSize={this.props.pageSize}
       currentPage={this.props.currentPage}
       onPageChanged={this.onPageChanged}
       follow={this.props.follow}
       unfollow={this.props.unfollow}
       />
      </> 
   }
}

let mapStateToProps = (state) => {
        return {
          users: state.usersPage.users,
          currentPage: state.usersPage.currentPage,
          pageSize: state.usersPage.pageSize,
          totalUserCount: state.usersPage.totalUserCount,
          isFetching: state.usersPage.isFetching
        }
}

let mapDispatchToProps = (dispatch) => {
        return {
         follow: (userId) => {
            dispatch(followAC(userId))
         },
         unfollow: (userId) => {
            dispatch(unfollowAC(userId))
         },
         setUsers: (users) => {
            dispatch(setUsersAC(users))
         },
         setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
         },
         setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
         },
         toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAC(isFetching))
         }
        }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

