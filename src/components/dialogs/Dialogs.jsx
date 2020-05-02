import React from 'react';
import DialogsItem from './dialogs-item/DialogsItem';
import DialogsMessage from './dialogs-message/DialogsMessage';
import './Dialogs.scss';

const mainCls = 'dialogs';

const Dialogs = (props) => {
  const {
    dialogs,
    newMessageValue,
    messages,
    onNewMessageChange,
    onSendButtonClick,
  } = props;

  return (
    <div className={mainCls}>
      <div className={`${mainCls}__aside`}>
        {dialogs.map((dialog, i) => (
          <DialogsItem key={i} id={dialog.id} name={dialog.name} />
        ))}
      </div>

      <div className={`${mainCls}__body`}>
        <div>
          <textarea value={newMessageValue} onChange={onNewMessageChange} />
          <button onClick={onSendButtonClick} type="button">
            Send
          </button>
        </div>

        {messages.map((message, i) => (
          <DialogsMessage key={i} id={message.id} text={message.text} />
        ))}
      </div>
    </div>
  );
};

export default Dialogs;
