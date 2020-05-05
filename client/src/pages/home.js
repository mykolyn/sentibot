import React, { Component } from "react";
import Chatbox from "../Components/chatbox/chatbox.js"
import AppNavBar from "../Components/AppNavbar.js"


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
           </div>
        )
    }
};

export default Home;