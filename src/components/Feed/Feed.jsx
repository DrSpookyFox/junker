import Post from "../Post/Post"

const Feed = ({allPosts}) => {
    return <>
    <div>Feed</div>
    <ul>{allPosts.map((singlepost) => (
        <li>
            <Post post={singlepost} />
        </li>
    ))}

    </ul>
    </>

}

export default Feed