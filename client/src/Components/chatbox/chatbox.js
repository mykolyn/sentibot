import React, {Component} from 'react';
import axios from 'axios';
import {Launcher} from 'react-chat-window';
import "../../css/chatbot.css"

class Chatbox extends Component {

  // ========= reat chat box =========
  constructor() {
    super();
    this.state = {
      messageList: []
    };
  };

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    })
    axios.post('/api/watson/analyzer', {text: message.data.text})
      .then(res => {
        // const analysisResults = res.data;
        // // console.log(res.data);
        // let sentiment = analysisResults.result.sentiment.document.label;
        // let sentimentValue = Math.abs(analysisResults.result.sentiment.document.score) * 100;
        // let value = sentimentValue.toFixed(2)
        // // emotion calculated are sadness, joy, fear, disgust, and anger
        // const emotions = analysisResults.result.emotion.document.emotion;
        // let emotionVals = [];

        // for (let emotion in emotions) {
        //   emotionVals.push({ emotion: emotion, value: emotions[emotion] })
        // }
        // emotionVals.sort(function(a, b) {return b.value - a.value} );

        // setTimeout(() => this._sendMessage(`Based on what you said, I calculated that you are ${value}% ${sentiment}.`), 500);
        // setTimeout(() => this._sendMessage(`It sounds like your feeling more ${emotionVals[0].emotion } than the other emotions in my database.`), 1500);

        setTimeout(() => this._sendMessage(res.data.message1), 500);
        setTimeout(() => this._sendMessage(res.data.message2), 1500);
    })
    .catch(err => {
      console.log('error:', err);
    });
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