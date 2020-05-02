import React from 'react';
import { connect } from 'react-redux';
import { api } from '../../dal/api';
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setIsLoadingAC,
  setTotalUsersCountAC,
  changeCurrentPageAC,
} from '../../store/users/reducer';
import Users from './Users';
import Pagination from '../pagination/Pagination';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.requestUsers();
  }

  componentDidUpdate(prevProps) {
    const { currentPage } = this.props;

    if (prevProps.currentPage !== currentPage) {
      this.requestUsers();
    }
  }

  requestUsers = () => {
    const {
      setUsers,
      pageSize,
      currentPage,
      setIsLoading,
      setTotalUsersCount,
    } = this.props;
    setIsLoading(true);

    api.requestUsers(currentPage, pageSize).then((data) => {
      setIsLoading(false);
      setUsers(data.items);
      setTotalUsersCount(data.totalCount);
    });
  };

  followHandler = (userId) => {
    const { follow } = this.props;
    api.follow(userId).then((data) => {
      if (data.resultCode === 0) {
        follow(userId);
      }
    });
  };

  unfollowHandler = (userId) => {
    const { unfollow } = this.props;
    api.unfollow(userId).then((data) => {
      if (data.resultCode === 0) {
        unfollow(userId);
      }
    });
  };

  calcPageCount = () => {
    const { totalUsersCount, pageSize } = this.props;
    return Math.ceil(totalUsersCount / pageSize);
  };

  render() {
    const {
      users,
      pageSize,
      currentPage,
      setUsers,
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
          pageSize={pageSize}
          currentPage={currentPage}
          setUsers={setUsers}
          onFollowClick={this.followHandler}
          onUnfollowClick={this.unfollowHandler}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.usersReducer.isLoading,
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    currentPage: state.usersReducer.currentPage,
    totalUsersCount: state.usersReducer.totalUsersCount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIsLoading: (isLoading) => {
      dispatch(setIsLoadingAC(isLoading));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setTotalUsersCount: (users) => {
      dispatch(setTotalUsersCountAC(users));
    },
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    changePage: (value) => {
      dispatch(changeCurrentPageAC(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
