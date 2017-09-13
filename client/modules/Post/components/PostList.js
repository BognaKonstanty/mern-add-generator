
import React, { PropTypes } from 'react';
import PostListPage from '../pages/PostListPage/PostListPage.js';

// Import Components
import PostListItem from './PostListItem/PostListItem';

function PostList(props) {
  return (
    <div className="listView">
      {
        props.posts.map(post => (
          <PostListItem
            post={post}
            key={post.cuid}
            onDelete={() => props.handleDeletePost(post.cuid)}
            onThumbUp={() => props.handleThumbUpPost(post.cuid)}
            onThumbDown={() => props.handleThumbDownPost(post.cuid)}
            dispatch={props.dispatch}
          />
        ))
      }
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeletePost: PropTypes.func.isRequired,
  handleThumbUpPost: PropTypes.func.isRequired,
  handleThumbDownPost: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired
};

export default PostList;
