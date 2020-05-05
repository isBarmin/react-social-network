const SEND_MESSAGE = 'SEND_MESSAGE';

const initialState = {
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
    case SEND_MESSAGE:
      const message = {
        id: '5',
        text: payload,
      };
      return {
        ...state,
        messages: [...state.messages, message],
      };

    default:
      return state;
  }
};

export const sendMessageAC = (message) => ({
  type: SEND_MESSAGE,
  payload: message,
});

export default dialogsReducer;
