import React from 'react';
import Post from './Post/Post';
import './MyPosts.scss';

const MyPosts = (props) => {
  const { newMessageText, onPostTextChange, onAddButtonClick, posts } = props;

  return (
    <div className="posts">
      <h3>My posts</h3>

      <div>
        <textarea value={newMessageText} onChange={onPostTextChange} />
        <button onClick={onAddButtonClick} type="button">
          Add
        </button>
      </div>

      <div>
        <ul>
          {posts.map((post, i) => (
            <li key={i}>
              <Post text={post.text} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyPosts;
