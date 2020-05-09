import React, { Component } from "react";
import "../css/chatbot.css"

export default class HistoryBtn extends Component {
    render() {
        return (
            <div className="history-container">
                <img 
                    alt="history redirect" 
                    src="https://image.flaticon.com/icons/png/512/1436/1436604.png"
                    className="history-btn"
                    onClick={() => window.location = '/history'}
                ></img>
            </div>
        )
    }
}