import React from 'react';
import * as _ from 'lodash';
import ProfileStatus from './profile-status/ProfileStatus';
import './ProfileCard.scss';

const ProfileCard = (props) => {
  const { profile, status, onChangeStatus, noEditableStatus } = props;
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
        <div className={`${mainCls}__about`}>{aboutMe}</div>
        <ProfileStatus
          status={status}
          onChange={onChangeStatus}
          noEditable={noEditableStatus}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
