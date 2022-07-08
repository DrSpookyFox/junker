// import Post from "../Post/Post"
import Post from "../Post/Post"
import Feed from "../Feed/Feed"
import CreatePost from "../CreatePost/CreatePost"

const allPosts = [
    {
        title: "sofa",
        image: "https://c.stocksy.com/a/GFu700/z9/1884506.jpg",
        caption: "this chair is smelly, old, broken, unsteady and probably worth a fortune",
        id: "818181"
    },
    {
        title: "Table",
        image: "https://c.stocksy.com/a/GFu700/z9/1884506.jpg",
        caption: "this chair is smelly, old, broken, unsteady and probably worth a fortune",
        id: "818181"
    },
    {
        title: "toilet seat",
        image: "https://c.stocksy.com/a/GFu700/z9/1884506.jpg",
        caption: "this chair is smelly, old, broken, unsteady and probably worth a fortune",
        id: "818181"
    },
    {
        title: "old chair",
        image: "https://c.stocksy.com/a/GFu700/z9/1884506.jpg",
        caption: "this chair is smelly, old, broken, unsteady and probably worth a fortune",
        id: "818181"
    }
]

const Dashboard = () => {
    // empty fragment means div
    // also can't return two fragments side by side
    return <>
        <>Dashboard</>
        {/* <Feed allPosts= {allPosts}/> */}
        <CreatePost />
    </>
    
}

export default Dashboard
