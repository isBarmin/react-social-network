import React from 'react';
import './DialogsMessage.scss';

const mainCls = 'dialogs';

const DialogsMessage = (props) => {
  const { text } = props;
  return <div className={mainCls}>{text}</div>;
};

export default DialogsMessage;
