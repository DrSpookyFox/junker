import React, {useState, useEffect} from "react"
import Post from "../Post/Post"
import Feed from "../Feed/Feed"
import Navbar from "../Navbar/Navbar"
import CreatePost from "../CreatePost/CreatePost"
import * as postsAPI from "../../services/postService"

const Dashboard = ({user}) => {
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
        <Navbar />
        <Feed allPosts= {posts}/>
        <CreatePost user={user}/>
    </>
}

export default Dashboard

