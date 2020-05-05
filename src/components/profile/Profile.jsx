import React from 'react';
import ProfileCard from './profile-card/ProfileCard';
import MyPostsContainer from './my-posts/MyPostsContainer';
import './Profile.scss';

const Profile = (props) => {
  const { profile, status, updateStatus, noEditableStatus } = props;

  return (
    <div className="profile">
      <h2>Profile</h2>
      <ProfileCard
        profile={profile}
        status={status}
        onChangeStatus={updateStatus}
        noEditableStatus={noEditableStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
