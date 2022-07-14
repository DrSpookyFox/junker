import Feed from '../Feed/Feed'


const MyPosts = ({posts}) => {
    return <>
      {posts && posts.length > 0 && 
      <Feed allPosts={posts} />
      }
    </>

}

export default MyPosts