import React, { Component } from "react";
import Google from "./google.js";
import API from "../utils/Api";
import { Redirect } from "react-router-dom";

class Login extends Component {

    state = {
        showGoogle: "",
        redirect: ""

    };

    componentDidMount() {
        this.checkUser()
    }


    checkUser = () => {
        // console.log(event.target.value)
        API.checkUser()
            // .then(res => this.setState({ user: res.data.user.username }))
            .then(res => {

                console.log(res)
                if (res.data !== "NoUser") {

                    console.log("in redirect")
                    // return <Redirect to="/login" />
                    this.setState({ redirect: "Yes" })
                }
            }

            )           
            .catch(err => console.log(err));
    }

    google = () => {

        this.setState({ showGoogle: true })
    }

    renderPage = () => {
        if (this.state.showGoogle) {
            return <Google />;
        };
    }

    render() {
        return (
            this.state.redirect ?<Redirect to="/home" /> : 
            <div>
                <h4>Welcome to SentiBot. Please Log in.</h4>
                {/* <button onClick={() => window.location = '/home'}>Login</button> */}

                <button onClick={this.google}>Login</button>
                <button onClick={() => window.location = '/signup'}>Sign Up</button>
                {this.renderPage()}

            </div>
        )
    }
};


export default Login;