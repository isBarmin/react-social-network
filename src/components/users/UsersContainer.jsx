import React from 'react';
import { connect } from 'react-redux';
import {
  changeCurrentPageAC,
  updateFollowingProcessAC,
} from '../../store/users/reducer';
import * as usersSelectors from '../../store/users/selectors';
import * as thunks from '../../store/users/thunks';
import Pagination from '../pagination/Pagination';
import Users from './Users';

class UsersContainer extends React.Component {
  componentDidMount() {
    const { getUsers, pageSize, currentPage } = this.props;
    getUsers(currentPage, pageSize);
  }

  componentDidUpdate(prevProps) {
    const { getUsers, currentPage, pageSize } = this.props;
    if (prevProps.currentPage !== currentPage) {
      getUsers(currentPage, pageSize);
    }
  }

  followHandler = (userId) => {
    const { follow } = this.props;
    follow(userId);
  };

  unfollowHandler = (userId) => {
    const { unfollow } = this.props;
    unfollow(userId);
  };

  calcPageCount = () => {
    const { totalUsersCount, pageSize } = this.props;
    return Math.ceil(totalUsersCount / pageSize);
  };

  render() {
    const {
      users,
      currentPage,
      followingProcess,
      isLoading,
      changePage,
    } = this.props;
    return (
      <>
        <h2>Users</h2>
        {isLoading && <div>Loading ...</div>}
        <Pagination
          pages={this.calcPageCount()}
          activeItemIndex={currentPage}
          onPageChange={changePage}
        />

        <Users
          users={users}
          followingProcess={followingProcess}
          onFollowClick={this.followHandler}
          onUnfollowClick={this.unfollowHandler}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: usersSelectors.isLoading(state),
    users: usersSelectors.users(state),
    pageSize: usersSelectors.pageSize(state),
    currentPage: usersSelectors.currentPage(state),
    totalUsersCount: usersSelectors.totalUsersCount(state),
    followingProcess: usersSelectors.followingProcess(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: (currentPage, pageSize) =>
      dispatch(thunks.getUsers(currentPage, pageSize)),
    follow: (userId) => dispatch(thunks.follow(userId)),
    unfollow: (userId) => dispatch(thunks.unfollow(userId)),
    changePage: (value) => {
      dispatch(changeCurrentPageAC(value));
    },
    updateFollowingProcess: (userId, inProcess) => {
      dispatch(updateFollowingProcessAC(userId, inProcess));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
