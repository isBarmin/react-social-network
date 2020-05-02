const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  userId: null,
  email: null,
  login: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};

export const setUserDataAC = (userData) => ({
  type: SET_USER_DATA,
  payload: userData,
});

export default authReducer;
