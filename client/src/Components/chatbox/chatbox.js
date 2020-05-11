import React, { Component } from 'react';
import axios from 'axios';
import { Launcher } from 'react-chat-window';
import "../../css/chatbot.css"

class Chatbox extends Component {

  // ========= reat chat box =========
  constructor() {
    super();
    this.state = {
      messageList: []
    };
  };

  addChat(userMsg, botMsg) {
    axios.post('/api/watson/chat', { userMsg: userMsg, botMsg: botMsg });
  }

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    })

    const userMsg = message.data.text;
    let botMsg = {};

    if (message.data.text.length < 15) {
      botMsg.message1 = "Please add more words for me to better understand.";
      this._sendMessage(botMsg.message1);
      this.addChat(userMsg, botMsg);
    }
    else {
      axios.post('/api/watson/analyzer', { text: message.data.text })
        .then(res => {
          botMsg.message1 = res.data.message1;
          botMsg.message2 = res.data.message2;
          setTimeout(() => this._sendMessage(botMsg.message1), 500);
          setTimeout(() => this._sendMessage(botMsg.message2), 1500);
          this.addChat(userMsg, botMsg);
        })
        .catch(err => {
          console.log('error:', err);
        });
    }
  };

  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
    console.log(text)
  };

  render() {
    return (<div className="launcher-container">
      <Launcher
        agentProfile={{
          teamName: 'SentiBot',
          imageUrl: 'https://cdn.dribbble.com/users/722835/screenshots/4082720/bot_icon.gif'
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        showEmoji
      />
    </div>)
  }
}

export default Chatbox;