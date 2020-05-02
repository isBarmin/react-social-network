import { produce } from 'immer';

const SET_USERS = 'SET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_IS_LOADING = 'SET_IS_LOADING';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';

const initialState = {
  users: [],
  currentPage: 1,
  pageSize: 16,
  totalUsersCount: 0,
  isLoading: false,
};

const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: payload,
      };

    case SET_USERS:
      return {
        ...state,
        users: payload,
      };

    case FOLLOW:
      const index = state.users.findIndex((u) => u.id === payload);
      return produce(state, (draft) => {
        draft.users[index].followed = true;
      });

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === payload) {
            return {
              ...user,
              followed: false,
            };
          }

          return user;
        }),
      };

    case CHANGE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };

    default:
      return state;
  }
};

export const setUsersAC = (users) => ({
  type: SET_USERS,
  payload: users,
});

export const followAC = (userId) => ({
  type: FOLLOW,
  payload: userId,
});

export const unfollowAC = (userId) => ({
  type: UNFOLLOW,
  payload: userId,
});

export const setIsLoadingAC = (isLoading) => ({
  type: SET_IS_LOADING,
  payload: isLoading,
});

export const setTotalUsersCountAC = (value) => ({
  type: SET_TOTAL_USERS_COUNT,
  payload: value,
});

export const changeCurrentPageAC = (value) => ({
  type: CHANGE_CURRENT_PAGE,
  payload: value,
});

export default usersReducer;
