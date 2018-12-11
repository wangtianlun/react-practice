import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';

class ReduxExample extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.fetchPosts}>fetch posts</button>
        <ul>
          {
            this.props.posts.items
              ? this.props.posts.items.map(post => <li>{post}</li>)
              : 'loading'
          }
        </ul>
      </div>
    )
  }

  componentDidMount() {
    console.log(this.props);
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPosts: subreddit => {
      dispatch(fetchPosts(subreddit))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExample)