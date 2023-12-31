import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow } from '../../redux/users-reducer';
import Users from './Users'
import Preloader from '../Common/Preloader/Preloader';
import {usersAPI} from '../../api/api';


class UsersContainer extends React.Component {
   componentDidMount = () => {
      this.props.toggleIsFetching(true);
      usersAPI.getUsers(this.props.currentPage, this.pageSize).then(data => {
         this.props.setUsers(data.items);
         this.props.setTotalUsersCount(data.totalCount);
         this.props.toggleIsFetching(false);    
       })
   }

   onPageChanged = (pageNumber) => {
      this.props.toggleIsFetching(true);
       this.props.setCurrentPage(pageNumber)
       usersAPI.getUsers(pageNumber, this.pageSize).then(data => {
         this.props.setUsers(data.items)
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

export default connect(mapStateToProps, 
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer)

