const ADD_POST = 'ADD_POST';
const CHANGE_POST_TEXT = 'CHANGE_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';

const initialState = {
  userProfile: {},
  status: '',
  postText: '',
  posts: [
    {
      id: 1,
      text: 'Some text',
    },
    {
      id: 2,
      text: 'Another some text',
    },
    {
      id: 3,
      text: 'Hi',
    },
  ],
};

const profileReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER_PROFILE:
      return {
        ...state,
        userProfile: payload,
      };

    case SET_PROFILE_STATUS:
      return {
        ...state,
        status: payload,
      };

    case CHANGE_POST_TEXT:
      return {
        ...state,
        postText: payload,
      };

    case ADD_POST:
      const post = {
        id: 4,
        text: state.postText,
      };
      return {
        ...state,
        posts: [...state.posts, post],
      };

    default:
      return state;
  }
};

export const setUserProfileAC = (profileData) => ({
  type: SET_USER_PROFILE,
  payload: profileData,
});

export const setProfileStatusAC = (status) => ({
  type: SET_PROFILE_STATUS,
  payload: status,
});

export const addPostAC = () => ({
  type: ADD_POST,
});

export const changePostTextAC = (text) => ({
  type: CHANGE_POST_TEXT,
  payload: text,
});

export default profileReducer;
