import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { changeMessageAC, sendMessageAC } from '../../store/dialogs/reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  const { dialogs, messages, message, snedMessage, changeMessage } = props;

  return (
    <Dialogs
      dialogs={dialogs}
      messages={messages}
      newMessageValue={message}
      onNewMessageChange={changeMessage}
      onSendButtonClick={snedMessage}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.dialogsReducer.newMessage,
    dialogs: state.dialogsReducer.dialogs,
    messages: state.dialogsReducer.messages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeMessage: (event) => dispatch(changeMessageAC(event.target.value)),
    snedMessage: () => dispatch(sendMessageAC()),
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
)(DialogsContainer);
