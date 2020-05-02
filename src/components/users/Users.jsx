import React from 'react';
import UserCard from './user-card/UserCard';
import './Users.scss';

const Users = (props) => {
  const { users, onUnfollowClick, onFollowClick } = props;
  const mainCls = 'users';

  return (
    <div className={mainCls}>
      {users.map((user) => (
        <UserCard
          key={user.id}
          data={user}
          onFollowClick={onFollowClick}
          onUnfollowClick={onUnfollowClick}
        />
      ))}
    </div>
  );
};

export default Users;
