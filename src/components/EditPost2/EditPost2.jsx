import Post from "../Post/Post"
import Feed from "../Feed/Feed"



const editPost = ({post}) => {
    const {title, id, image, caption} = post

    return <div>
        <div>{title}</div>
        <div>{id}</div>
        <img src={image} alt={`photo-${title}`}/>
        <div>{caption}</div>
    </div>
}

export default editPost
