import React, { Component } from "react";
import Chatbox from "../Components/chatbox/chatbox"
import AppNavBar from "../Components/AppNavbar"
import HistoryBtn from "../Components/historyBtn"
import "../css/chatbot.css"

class Home extends Component {
    render () {
        const user = {
            id: 12345,
            name: 'Test'
        }
        return (
           <div>
               <AppNavBar />
                <h4>Welcome to Home</h4>
                
                <Chatbox currentUser={user} />
                <HistoryBtn />
           </div>
        )
    }
};

export default Home;