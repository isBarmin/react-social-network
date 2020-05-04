import React from 'react';
import * as _ from 'lodash';
import './ProfileCard.scss';

const ProfileCard = (props) => {
  const { profile } = props;
  const {
    userId,
    fullName,
    aboutMe,
    lookingForAJob,
    lookingForAJobDescription,
    contacts,
    photos,
  } = profile;
  const mainCls = 'profile-card';

  return (
    <div className={mainCls}>
      <div className={`${mainCls}__aside`}>
        <div className={`${mainCls}__photo`}>
          <img src={_.get(photos, 'large')} alt="" />
        </div>
      </div>

      <div className={`${mainCls}__body`}>
        <div className={`${mainCls}__name`}>{fullName}</div>
        <div className={`${mainCls}__status`}>{aboutMe}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
