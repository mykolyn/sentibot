import React, { Component } from "react";
import AppNavBar from "../Components/AppNavbar.js"
import ChatList from "../Components/History/History"


class History extends Component {
    render () {
        return (
           <div>
               <AppNavBar />
               <div className="container">
                <h4>     </h4>
                <ChatList/>
                </div>
           </div>
        )
    }
};

export default History;