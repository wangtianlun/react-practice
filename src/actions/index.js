export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const requestPosts = (subreddit) => ({
  type: REQUEST_POSTS,
  subreddit,
})

export const receivePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS,
  subreddit,
  posts: { isFetching: false, items: json },
  receivedAt: Date.now()
})

export const fetchPosts = subreddit => dispatch => {
  dispatch(requestPosts(subreddit))
  
  setTimeout(() => {
    dispatch(receivePosts(subreddit, [1, 2, 3, 4]))
  }, 2000)
}