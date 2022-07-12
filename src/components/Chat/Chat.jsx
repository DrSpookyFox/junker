import { MentionsInput, Mention } from 'react-mentions'

<MentionsInput value={this.state.value} onChange={this.handleChange}>
  <Mention
    trigger="@"
    data={this.props.users}
    renderSuggestion={this.renderUserSuggestion}
  />
  <Mention
    trigger="#"
    data={this.requestTag}
    renderSuggestion={this.renderTagSuggestion}
  />
</MentionsInput>

// Chat Window
// <div class="chat-notification">
//   <div class="chat-notification-logo-wrapper">
//     <img class="chat-notification-logo" src="/img/logo.svg" alt="Chat Logo">
//   </div>
//   <div class="chat-notification-content">
//     <h4 class="chat-notification-title">Chat</h4>
//     <p class="chat-notification-message">You have a new message!</p>
//   </div>
// </div>
