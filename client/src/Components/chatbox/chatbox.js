import React, {Component} from 'react'
// import {Launcher} from 'react-chat-window'
import Talk from "talkjs";
// class Chatbox extends Component {
  
  
  
  class Chatbox extends Component {
    constructor(props) {
      super(props);
      this.talkjsContainer = React.createRef();
    }
    componentDidMount() {
      // user
      const currentUser = this.props.currentUser;
      console.log(currentUser);
      Talk.ready.then(() => {
        let me = new Talk.User({
          id: currentUser.id,
          name: currentUser.name,
          email: currentUser.email,
          photoUrl: currentUser.photo,
          welcomeMessage: "Hey there! How are you feeling?"
        });
  
  
        window.talkSession = new Talk.Session({
          appId: "tcUG0HIm",
          me: me
        });
        // bot
        let bot = new Talk.User({
          id: "654321",
          name: "SentiBot",
          email: "Sebastian@example.com",
          photoUrl: "https://demo.talkjs.com/img/sebastian.jpg",
          welcomeMessage: "Hey there! How are you feeling today?"
        });
  
        let conversation = window.talkSession.getOrCreateConversation(Talk.oneOnOneId(me, bot));
        conversation.setParticipant(me)
        var inbox = window.talkSession.createInbox({ selected: conversation });
        inbox.mount(this.talkjsContainer.current);
  
      })
  
  
    }
  
    render() {
      return (
        <div ref={this.talkjsContainer}></div>
      )
    }
  
  
  
  }
  
  export default Chatbox;




  // ========= reat chat box =========
  // constructor() {
  //   super();
  //   this.state = {
  //     messageList: []
  //   };
  // }
 
  // _onMessageWasSent(message) {
  //   this.setState({
  //     messageList: [...this.state.messageList, message]
  //   })
  // }
 
  // _sendMessage(text) {
  //   if (text.length > 0) {
  //     this.setState({
  //       messageList: [...this.state.messageList, {
  //         author: 'them',
  //         type: 'text',
  //         data: { text }
  //       }]
  //     })
  //   }
  // }
 
  // render() {
  //   return (<div>
  //     <Launcher
  //       agentProfile={{
  //         teamName: 'react-chat-window',
  //         imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
  //       }}
  //       onMessageWasSent={this._onMessageWasSent.bind(this)}
  //       messageList={this.state.messageList}
  //       showEmoji
  //     />
  //   </div>)
  // }
// }

// export default Chatbox;