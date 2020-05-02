import React from 'react';
import ProfileCard from './profile-card/ProfileCard';
import MyPostsContainer from './my-posts/MyPostsContainer';
import './Profile.scss';

const Profile = () => {
  return (
    <div className="profile">
      <h2>Profile</h2>
      <ProfileCard />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
