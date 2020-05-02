import React from 'react';
import classNames from 'classnames';
import './Post.scss';

const Post = (props) => {
  const { className, avatar, text } = props;
  const classes = classNames({
    post: true,
    [className]: className,
  });

  return (
    <div className={classes}>
      <div className="post__aside">
        <img className="post__avatar" src={avatar} alt="" />
      </div>
      <div className="post__body">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Post;
