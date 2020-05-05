import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { sendMessageAC } from '../../store/dialogs/reducer';
import * as dialogsSelectors from '../../store/dialogs/selectors';
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
    dialogs: dialogsSelectors.dialogs(state),
    messages: dialogsSelectors.messages(state),
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
