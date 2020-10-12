export default function fetchPostsForSubreddit(subreddit) {
  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then((response) => response.json())
    .then((responseData) => {
      return responseData.data.children.map((resource) => resource.data);
    });
}
