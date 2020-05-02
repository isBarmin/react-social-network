import React from 'react';
import UserCard from './user-card/UserCard';
import './Users.scss';

const Users = (props) => {
  const { users, followingProcess, onUnfollowClick, onFollowClick } = props;
  const mainCls = 'users';

  return (
    <div className={mainCls}>
      {users.map((user) => (
        <UserCard
          key={user.id}
          data={user}
          disableFollowButton={followingProcess.includes(user.id)}
          onFollowClick={onFollowClick}
          onUnfollowClick={onUnfollowClick}
        />
      ))}
    </div>
  );
};

export default Users;
