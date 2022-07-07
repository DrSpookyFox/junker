import React, {useState} from "react"
import * as postAPI from "../../services/postService"

const CreatePost = () => {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [caption, setCaption] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
       
        const submitPost = {
            title: title,
            image: image,
            caption: caption
        }

        // console.log("submitPost", submitPost)
        // submit that object as a post request to an api
        postAPI.create(submitPost)

    }  

    return <>
        <div>Create Post</div>
        <form type="submit">
            {/* Title Input */}
            <input type="text" value={title} placeholder="title" onChange={(event) => {setTitle(event.target.value)}}/>
            {/* Image Input */}
            <input type="text" value={image} placeholder="image" onChange={(event) => {setImage(event.target.value)}}/>
            {/* Caption Input */}
            <input type="text" value={caption} placeholder="caption" onChange={(event) => {setCaption(event.target.value)}}/>
            <button type="submit" onClick={(event) => handleSubmit(event)}>create post</button>
        </form>
    </>
}

export default CreatePost