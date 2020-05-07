import React, { Component } from "react";
import API from "../utils/Api";
import "./style.css";

class Google extends Component {

 

    googleLogin = (event) => {
        // console.log(event.target.value)
        { console.log("in google button press") }
        API.googleLogin()
    }
   

render() {
    return (
        <div className="card" >
            <h5>Login Using....</h5>

            <button className="btn btn-primary" onClick={this.googleLogin}>Google+</button>

        </div>
    )

}
}

export default Google