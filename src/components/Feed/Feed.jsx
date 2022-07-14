import Post from "../Post/Post";

const Feed = ({ allPosts }) => {
  // Feed expects a list of posts called allPosts
  return (
    <>
      <div>Feed</div>
      {allPosts.length < 1 ? (
        <>You dont have any posts yet</>
      ) : (
        <ul>
          {allPosts.map((singlepost) => (
            <li>
              <Post post={singlepost} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Feed;
