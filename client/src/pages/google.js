import React, { Component } from "react";
import API from "../utils/Api";
import "../css/login.css";

class Google extends Component {



    googleLogin = (event) => {
        // console.log(event.target.value)
        console.log("in google button press") 
        API.googleLogin()
    }


    render() {
        return (
            <button type="button" onClick={this.googleLogin}>Google+</button>
        )

    }
}

export default Google