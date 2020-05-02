const ADD_POST = 'ADD_POST';
const CHANGE_POST_TEXT = 'CHANGE_POST_TEXT';

const initialState = {
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

export const addPostAC = () => ({
  type: ADD_POST,
});

export const changePostTextAC = (text) => ({
  type: CHANGE_POST_TEXT,
  payload: text,
});

export default profileReducer;
