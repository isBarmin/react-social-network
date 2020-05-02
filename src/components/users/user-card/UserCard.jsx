import React from 'react';
import { NavLink } from 'react-router-dom';
import './UserCard.scss';

const UserCard = (props) => {
  const { data, onFollowClick, onUnfollowClick } = props;
  const { id, name, photos, followed, status } = data;
  const mainCls = 'user-card';

  const handleFollowClick = (event) => {
    onFollowClick(id);
  };

  const handleUnfollowClick = (event) => {
    onUnfollowClick(id);
  };

  return (
    <div className={mainCls}>
      <div className={`${mainCls}__aside`}>
        <NavLink to={`/profile/${id}`} className={`${mainCls}__avatar`}>
          <img src={photos.small} alt="" />
        </NavLink>

        <div className={`${mainCls}__name`}>{name}</div>

        {followed ? (
          <button onClick={handleUnfollowClick} type="button">
            Unfollow
          </button>
        ) : (
          <button onClick={handleFollowClick} type="button">
            Follow
          </button>
        )}
      </div>
      <div className={`${mainCls}__body`}>
        <p>{status}</p>
      </div>
    </div>
  );
};

export default UserCard;
