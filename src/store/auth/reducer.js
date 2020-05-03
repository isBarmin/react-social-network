const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...payload,
        isAuth: true,
      };

    default:
      return state;
  }
};

export const setAuthUserDataAC = (userData) => ({
  type: SET_AUTH_USER_DATA,
  payload: userData,
});

export default authReducer;
