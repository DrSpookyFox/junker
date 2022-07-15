//import { MentionsInput, Mention } from 'react-mentions'

//<MentionsInput value={this.state.value} onChange={this.handleChange}>
  //<Mention
    //trigger="@"
    //data={this.props.users}
    //renderSuggestion={this.renderUserSuggestion}
  //>
  //<Mention
    //trigger="#"
    //data={this.requestTag}
    //renderSuggestion={this.renderTagSuggestion}
  //>
//</MentionsInput>


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