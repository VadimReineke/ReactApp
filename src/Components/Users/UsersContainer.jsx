import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, toggleFollowing, getUsers } from '../../redux/users-reducer';
import Users from './Users'
import Preloader from '../Common/Preloader/Preloader';
import { withAuthNavigate } from '../../HOC/AuthNavigate';

class UsersContainer extends React.Component {

   componentDidMount = () => {
      this.props.getUsers(this.props.currentPage, this.props.pageSize, 1)
   }

   onPageChanged = (pageNumber) => {
      this.props.getUsers(pageNumber, this.props.pageSize, pageNumber)
   }

   render() {

      return <>
         {this.props.isFetching ? <Preloader /> : null}

         <Users users={this.props.users}
            totalUserCount={this.props.totalUserCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingProgress={this.props.followingProgress}
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
      isFetching: state.usersPage.isFetching,
      followingProgress: state.usersPage.followingProgress,
   }
}

let AuthUsersContainer = withAuthNavigate(UsersContainer)

export default connect(mapStateToProps, { follow, unfollow, toggleFollowing, getUsers })(AuthUsersContainer)

