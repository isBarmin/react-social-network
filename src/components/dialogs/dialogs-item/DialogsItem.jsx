import React from 'react';
import { NavLink } from 'react-router-dom';
import './DialogsItem.scss';

const mainCls = 'dialogs';

const DialogsItem = (props) => {
  const { name, id } = props;
  return (
    <div>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  );
};

export default DialogsItem;
