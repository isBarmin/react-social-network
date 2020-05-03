import { api } from '../../dal/api';
import {
  followAC,
  unfollowAC,
  setIsLoadingAC,
  setTotalUsersCountAC,
  setUsersAC,
  updateFollowingProcessAC,
} from './reducer';

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(setIsLoadingAC(true));
  api.requestUsers(currentPage, pageSize).then((data) => {
    const { items, totalCount } = data;
    dispatch(setIsLoadingAC(false));
    dispatch(setUsersAC(items));
    dispatch(setTotalUsersCountAC(totalCount));
  });
};

export const follow = (userId) => (dispatch) => {
  dispatch(updateFollowingProcessAC(userId, true));
  api.follow(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(followAC(userId));
      dispatch(updateFollowingProcessAC(userId, false));
    }
  });
};

export const unfollow = (userId) => (dispatch) => {
  dispatch(updateFollowingProcessAC(userId, true));
  api.unfollow(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(unfollowAC(userId));
      dispatch(updateFollowingProcessAC(userId, false));
    }
  });
};
