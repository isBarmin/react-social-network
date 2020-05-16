import React, { useState, useEffect } from 'react';
import './ProfileStatus.scss';

const ProfileStatus = (props) => {
  const mainCls = 'profile-status';
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const changeHandler = (event) => {
    setStatus(event.target.value);
  };

  const blurHandler = (event) => {
    if (props.status !== status) {
      props.onChange(event.target.value);
    }
  };

  return (
    <div className={mainCls}>
      <span>{status}</span>
      <input
        readOnly={props.noEditable}
        value={status}
        onChange={changeHandler}
        onBlur={blurHandler}
        type="text"
      />
    </div>
  );
};

export default ProfileStatus;
