const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE_NEW_MESSAGE_TEXT';
const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
  newMessage: '',
  dialogs: [
    { id: '1', name: 'Dimych' },
    { id: '2', name: 'Sergey' },
    { id: '3', name: 'Sveta' },
    { id: '4', name: 'Roma' },
    { id: '5', name: 'Sasha' },
  ],
  messages: [
    { id: '1', text: 'Some message' },
    { id: '2', text: 'Yo' },
    { id: '3', text: 'Another some message' },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessage: payload,
      };

    case SEND_MESSAGE:
      const message = {
        id: '5',
        text: state.newMessage,
      };
      return {
        ...state,
        messages: [...state.messages, message],
      };

    default:
      return state;
  }
};

export const changeMessageAC = (text) => ({
  type: CHANGE_NEW_MESSAGE_TEXT,
  payload: text,
});

export const sendMessageAC = () => ({
  type: SEND_MESSAGE,
});

export default dialogsReducer;
