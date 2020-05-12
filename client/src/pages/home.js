import React, { Component } from "react";
import Chatbox from "../Components/chatbox/chatbox"
import AppNavBar from "../Components/AppNavbar"
import HistoryBtn from "../Components/historyBtn"
import "../css/home.css"

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = { chatBoxOpen: false }
    }

    setChatBoxOpen(state) {
        this.setState({ chatBoxOpen: state });
    }

    render() {
        return (
            <div>
                <AppNavBar />
                <div className="infoPage">
                    <h4>Welcome to Senti Bot</h4>
                    <p>
                        Senti Bot will talk with you and analyze how you're feeling based on your text input.
                    </p>
                    <Chatbox setChatBoxOpen={state => this.setChatBoxOpen(state)} />
                    {!this.state.chatBoxOpen && <HistoryBtn />}
                </div>
            </div>
        )
    }
};

export default Home;