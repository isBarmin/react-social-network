import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { sendMessageAC } from '../../store/dialogs/reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  const { dialogs, messages, snedMessage } = props;

  return (
    <Dialogs
      dialogs={dialogs}
      messages={messages}
      onMessageSend={snedMessage}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsReducer.dialogs,
    messages: state.dialogsReducer.messages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    snedMessage: (message) => dispatch(sendMessageAC(message)),
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps),
)(DialogsContainer);
