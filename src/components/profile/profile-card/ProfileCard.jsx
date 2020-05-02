import React from 'react';
import './ProfileCard.scss';

const ProfileCard = (props) => {
  const mainCls = 'profile-card';

  return (
    <div className={mainCls}>
      <div className={`${mainCls}__aside`}>
        <div className={`${mainCls}__photo`}>
          <img src="" alt="" />
        </div>
      </div>

      <div className={`${mainCls}__body`}>
        <div className={`${mainCls}__status`}>status</div>
      </div>
    </div>
  );
};

export default ProfileCard;
