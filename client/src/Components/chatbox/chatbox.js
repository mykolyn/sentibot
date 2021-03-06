import React, { Component } from 'react';
import axios from 'axios';
import { Launcher } from 'react-chat-window';
import "../../css/chatbot.css"
import API from "../../utils/Api";





class Chatbox extends Component {

  // ========= reat chat box =========
  constructor() {
    super();

    // this.onChangeUsername = this.onChangeUsername.bind(this);
    // this.onChangeDescription = this.onChangeDescription.bind(this);
    // this.onChangeDuration = this.onChangeDuration.bind(this);
    // this.onChangeDate = this.onChangeDate.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      user: "",
      redirect: "",

      messageList: [],
      description: "",
      //runs youCheck
      contentCheck: false,
      //checks if there is you in statement
      youCheck: false,
      //checks if user added a emotion word
      feelCheck: false,
      //checks for reasoning of feeling
      whyCheck: false,
      a: 3,
      b: 0,
      //set to true if new statement has higher score than previous statement
      scoreCheck: false,
      sentimentCheck: false

    };
  };



checkUser = () => {
    // console.log(event.target.value)
    API.checkUser()
        // .then(res => this.setState({ user: res.data.user.username }))
        .then(res => {

          
                console.log("in setstate")
                this.setState({ user: res.data.user.username })
            
        }

        )
        // .then(res=>console.log(res.data))
        // .then(BrowserRouter.push('/login'))
        .catch(err => console.log(err));
}
  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    })
    axios.post('/api/watson/analyzer', { text: message.data.text })
      // axios.post('/api/watson/analyzer', { text: "you ruined my jacket" })

      .then(res => {
        const analysisResults = res.data;
        console.log(res.data);
        let sentiment = analysisResults.result.sentiment.document.label;
        let sentimentValue = Math.abs(analysisResults.result.sentiment.document.score) * 100;
        let value = sentimentValue.toFixed(2)
        let statement = { text: message.data.text }
        let youCheck = this.youCheck
        //var youCheck = false
        console.log(statement.text)
        console.log("below should be keywords")
        console.log(analysisResults.result.keywords)
        var keywordLength = analysisResults.result.keywords.length
        console.log(keywordLength)

        var updateScore = (a) => {
          console.log("updating score....")

          this.setState({
            b: a,
          })
          console.log("a state: " + this.state.a + " b state: " + this.state.b)
        }

        var scoreCheck = () => {
          if (this.state.b > this.state.a) {
            console.log("this statement is longer than the last one" + this.state.b + ">" + this.state.a)
            this.setState({
              a: this.state.b,
              b: 0,
              scoreCheck: true
            })
            console.log('a should be a num' + this.state.a)
          } else {
            console.log("be more descriptive" + this.state.b + "<" + this.state.a)

          }
        }

        //check if statement uses "you" in statement
        // var youStatementCheck = function () {
        //   this.youCheck = statement.text.toLowerCase().includes("you")

        // }

        var youStatementCheck = () => {
          console.log("running youCheck")
          if (statement.text.toLowerCase().includes("you")) {
            this.setState({
              youCheck: true
            })
            setTimeout(() => this._sendMessage(`you I`), 500, console.log("run if true" + this.state.youCheck))
            // console.log("youcheck" + this.state.youCheck)
          } else {
            this.setState({
              youCheck: false
            })
            setTimeout(() => this._sendMessage(`go on..`), 500, console.log("run if false" + this.state.youCheck))


          }




          //console.log(this.state.youCheck)

          // this.state.youCheck ?
          //   setTimeout(() => this._sendMessage(`you I`), 500, console.log("run if true" + this.state.youCheck))
          // :
          //   setTimeout(() => this._sendMessage(`go on..`), 500, 
          //this.setState({youCheck: !this.state.youCheck }), 
          //  console.log("run if false" + this.state.youCheck))
          // setTimeout(() => this._sendMessage(`Okay lets try not to use “you” in your statement, instead describe what happened.
          //   `), 500)
        }
        // console.log("youuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu")
        // youStatementCheck()

        var contentCheck = () => {
          console.log("running contentCheck")
          //youStatementCheck()
          if (statement.text) {
            //youStatementCheck()

            this.setState({
              contentCheck: true
            })

            console.log("contentcheck" + this.state.contentCheck)
          }

          this.state.contentCheck ?
            setTimeout(() => this._sendMessage(`Im sorry to hear that, how does that make you feel?`), 500, console.log("run if true" + this.state.feelCheck))
            :
            setTimeout(() => this._sendMessage(`Try repharsing it`), 500, this.setState({
              contentCheck: true
            }), console.log("run if false" + this.state.feelCheck))

        }



        var feelingCheck = () => {
          console.log("running feelingCheck")
          if (statement.text.toLowerCase().includes("feel")) {
            this.setState({
              feelCheck: true
            })
            console.log("feelcheck" + this.feelCheck)
          }

          this.state.feelCheck ?
            setTimeout(() => this._sendMessage(`I see, why do you feel that way?`), 500, console.log("run if true" + this.state.feelCheck))
            :
            setTimeout(() => this._sendMessage(`Try using the keyword "feel" in your statement`), 500,
              //this.setState({ feelCheck: false}), 
              console.log("run if false" + this.state.feelCheck))

          // this.setState({
          //   feelCheck: true
          // })
          // setTimeout(() => this._sendMessage(`why do you feel that way?`), 500, console.log("feel check"))

        }

        //   youStatementCheck(statement.text)

        //   this.state.youCheck ? setTimeout(() => this._sendMessage(`Okay lets try not to use “you” in your statement, instead describe what happened.
        //  `), 500) : this._sendMessage('Im sorry to hear that, how did it make  you feel?')


        var whyCheck = () => {
          console.log("running whyCheck")
          updateScore(keywordLength)
          scoreCheck()

          if (this.state.scoreCheck) {
            this.setState({
              whyCheck: true
            })
            console.log("whycheck is" + this.whyCheck)
          }

          this.state.whyCheck ?
            setTimeout(() => this._sendMessage(`Now thats try to resolve the conflict, what can the other person do next time?`), 500, console.log("run if whycheck true" + this.state.feelCheck))
            :
            setTimeout(() => this._sendMessage(`Try being more descriptive about the situation or elaborate on how you feel`), 500, this.setState({
              youCheck: true
            }), console.log("run if whycheck false" + this.state.whyCheck))

        }


        // emotion calculated are sadness, joy, fear, disgust, and anger
        var sentimentCheck = () => {

          const emotions = analysisResults.result.emotion.document.emotion;
          let emotionVals = [];
          for (let emotion in emotions) {
            emotionVals.push({ emotion: emotion, value: emotions[emotion] })
          }
          emotionVals.sort(function (a, b) { return b.value - a.value });

          //setTimeout(() => this._sendMessage(`Based on what you said, you may come across as ${value}% ${sentiment}to the other person.`), 500);
          setTimeout(() => this._sendMessage(`Based on what you said, you may come across as ${sentiment} to the other person.`), 500);
          setTimeout(() => this._sendMessage(`It sounds like you're feeling more ${emotionVals[0].emotion}. We can revise your statement if you want, otherwise you're ready to tell this to the other person!`), 1500);
          console.log(this.state.messageList)


        }
        //conditional chain
        var commandList = [this.state.contentCheck, this.state.feelCheck, this.state.whyCheck, this.state.sentimentCheck]
        var botReply = [contentCheck, feelingCheck, whyCheck, sentimentCheck]
        var debug = ["youStatementCheck1", "contentCheck", "youStatementCheck2", "feelCheck", "youStatementCheck3", "whyCheck", "youStatementCheck", "sentimentCheck"]

        var runBot = () => {
          // console.log("running runBot")
          // console.log("initial states, a state: " + this.state.a + " b state: " + this.state.b)
          // updateScore(keywordLength)
          // console.log("...........")
          // console.log("running score check...")
          // scoreCheck()

          // console.log("states after checking/updating scores a state " + this.state.a + " b state: " + this.state.b)
          this.setState({
            description: statement.text,
            sentiScore: analysisResults.result.sentiment.document.label
          })
console.log("aaaaaaaaaaaa" + this.state.description)
console.log("ffffffffffff" + this.state.sentiScore)

const exercise = {
  username: this.state.username,
  description: this.state.description,
  duration: this.state.duration,
  date: this.state.date,
  sentiScore: this.state.sentiScore
}

console.log(exercise);

axios.post('/exercises/add', exercise)
  .then(res => console.log("data has been saved" + res.data));

          for (var i = 0; i < commandList.length; i++) {
            console.log("----run loop----" + commandList[i])
            console.log(debug[i] + " " + commandList[i])


            if (message.data.text.length < 15) {
              return setTimeout(() => this._sendMessage(`Please add more words for me to better understand.`), 500)

            }


            if (statement.text.toLowerCase().includes("you") === true) {
              return setTimeout(() => this._sendMessage(`Try not to use "you" in your statement`), 500, console.log("run if true" + this.state.youCheck))
            }

            if (commandList[i] === false) {

              return botReply[i](statement.text)
            }
          }
          // youStatementCheck(statement.text)
          // return  this.state.youCheck ? setTimeout(() => this._sendMessage(`Okay lets try not to use “you” in your statement, instead describe what happened.
          //  `), 500) : this._sendMessage('Im sorry to hear that, how did it make  you feel?')

          //  feelingCheck(statement.text)
          //  return  this.state.youCheck ? setTimeout(() => this._sendMessage(`Okay lets try not to use “you” in your statement, instead describe what happened.
          //  `), 500) : this._sendMessage('Im sorry to hear that, how did it make  you feel?')


          //     : condition2 ? value2
          //   : condition3 ? value3
          //   : value4;
        }

        runBot()

        // if (this.state.youCheck === true) {
        //   setTimeout(() => this._sendMessage(`Okay lets try not to use “you” in your statement, instead describe what happened.
        //   `), 500);
        // }

        //=============================================

        // ask how you feel

        // if (this.state.youCheck === false) {
        //   setTimeout(() => this._sendMessage(`Okay, now include how this made you feel `), 500);
        // }




      })


      .catch(err => {
        console.log('error:', err);
      });
  };

  //welcome message
  componentDidMount() {
    this.checkUser()

    var welcomeMessage = "Hi there! I'm here to help resolve your conflict through I-statements. Before we start, tell me what happened." + this.state.user
    this._sendMessage(welcomeMessage)

  }

  // componentDidUpdate() {
  //   console.log("hello from comp did update----------------------------------")

   
  //   console.log(this.state.description)
  // }



  //bot reply
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
    return (<div>
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