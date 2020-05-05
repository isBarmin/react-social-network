import React from 'react';
import { reduxForm, Field } from 'redux-form';
import DialogsItem from './dialogs-item/DialogsItem';
import DialogsMessage from './dialogs-message/DialogsMessage';
import './Dialogs.scss';

const mainCls = 'dialogs';

const Dialogs = (props) => {
  const { dialogs, messages, onMessageSend } = props;

  const submitHandler = (values) => {
    const { messageText } = values;
    onMessageSend(messageText);
  };

  return (
    <div className={mainCls}>
      <div className={`${mainCls}__aside`}>
        {dialogs.map((dialog, i) => (
          <DialogsItem key={i} id={dialog.id} name={dialog.name} />
        ))}
      </div>

      <div className={`${mainCls}__body`}>
        <div>
          <AddMessageForm onSubmit={submitHandler} />
        </div>

        {messages.map((message, i) => (
          <DialogsMessage key={i} id={message.id} text={message.text} />
        ))}
      </div>
    </div>
  );
};

let AddMessageForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field component="textarea" name="messageText" />
      <button type="submit">Send</button>
    </form>
  );
};

AddMessageForm = reduxForm({
  form: 'dialogAddMessageForm',
})(AddMessageForm);

export default Dialogs;
