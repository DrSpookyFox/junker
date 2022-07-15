//needs more dependencies to match version of react.
//if versions need to be changed does everyone need to switch them? everything is broken locally. localhost will not load

import React, { Component } from 'react';
//import { render } from 'react-dom';
//import Hello from './Hello';
import './style.css';
//import { MentionsInput, Mention } from 'react-mentions'
import './mention-style.css'
//import {swapTags, getUsersFromTags} from './tags'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      value: 'Hi @{{user||123||John Reynolds}}',
      singleLineValue: 'Hi @{{user||234||Holly Reynolds}}',
      mentionData: null,
      users: [
        {
          _id: '123',
          name: { first: 'Trent', last: 'Dodson' }
        },
        {
          _id: '234',
          name: { first: 'Alexander', last: 'Singer' }
        },
        {
          _id: '345',
          name: { first: 'Jimmy', last: 'Morgan' }
        }
      ]
    };
  }

  handleChange = (event, newValue, newPlainTextValue, mentions) => {
    console.log(newValue, newPlainTextValue, mentions)
    this.setState({
      value: newValue,
      mentionData: {newValue, newPlainTextValue, mentions}
    })
  }

  handleChangeSingle = (e, newValue, newPLainTextValue, mentions) => {
    this.setState({
      singleLineValue: newValue
    })
  }

  render() {
    const userMentionData = this.state.users.map(myUser => ({
      id: myUser._id,
      display: `${myUser.name.first} ${myUser.name.last}`
    }));


    //needs another user file?
    //needs styling
    //needs to have chat under every post
    //what database needs to be used?
    //maybe have everything in a client folder instead of src?
    