import React from 'react';
import { connect } from 'react-redux';
import { addPostAC, changePostTextAC } from '../../../store/profile/reducer';
import * as profileSelectors from '../../../store/profile/selectors';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
  const { posts, postText, changePostText, addPost } = props;

  return (
    <MyPosts
      posts={posts}
      newMessageText={postText}
      onPostTextChange={changePostText}
      onAddButtonClick={addPost}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    posts: profileSelectors.posts(state),
    postText: profileSelectors.postText(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostAC()),
    changePostText: (event) => dispatch(changePostTextAC(event.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer);
