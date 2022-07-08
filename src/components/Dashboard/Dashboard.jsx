import React, {useState, useEffect} from "react"
import Post from "../Post/Post"
import Feed from "../Feed/Feed"
import CreatePost from "../CreatePost/CreatePost"
import * as postsAPI from "../../services/postService"

const Dashboard = () => {
    const [posts, setPosts] = useState([])

    // useEffect will fire once every time this component (Dashboard) rerenders.
    // It is called a footgun because if you leave one little bit out (the dependency array)
    // it will fire over and over and over again
    useEffect(() => {
        console.log('use effect is doing something, oops! i forgot the dependancy array')
        // We are going to call your postsAPI to get all data
        // then set that data to state
        postsAPI.index().then((allPosts) => setPosts(allPosts))
    },[])

    // empty fragment means div
    // also can't return two fragments side by side
    return <>
        <>Dashboard</>
        <Feed allPosts= {posts}/>
        <CreatePost />
    </>
}

export default Dashboard


// const allPosts = [
//     {
//         title: "sofa",
//         image: "https://c.stocksy.com/a/GFu700/z9/1884506.jpg",
//         caption: "this chair is smelly, old, broken, unsteady and probably worth a fortune",
//         id: "818181"
//     },
//     {
//         title: "Table",
//         image: "https://c.stocksy.com/a/GFu700/z9/1884506.jpg",
//         caption: "this chair is smelly, old, broken, unsteady and probably worth a fortune",
//         id: "818181"
//     },
//     {
//         title: "toilet seat",
//         image: "https://c.stocksy.com/a/GFu700/z9/1884506.jpg",
//         caption: "this chair is smelly, old, broken, unsteady and probably worth a fortune",
//         id: "818181"
//     },
//     {
//         title: "old chair",
//         image: "https://c.stocksy.com/a/GFu700/z9/1884506.jpg",
//         caption: "this chair is smelly, old, broken, unsteady and probably worth a fortune",
//         id: "818181"
//     }
// ]

