
const Post = ({post}) => {
    const {title, id, image, caption} = post

    return <div>
        <div>{title}</div>
        <div>{id}</div>
        <img src={image} alt={`photo-${title}`}/>
        <div>{caption}</div>
    </div>
}

export default Post