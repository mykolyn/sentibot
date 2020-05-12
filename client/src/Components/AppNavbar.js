/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../css/navbar.css"
import API from "../utils/Api";

class AppNavbar extends Component {

    state = {
        user: null,
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
                if (res.data === "NoUser") {

                    console.log("in redirect")
                    // return <Redirect to="/login" />
                    this.setState({ redirect: "Yes" })
                }
                else {
                    console.log("in setstate")
                    this.setState({ user: res.data.user.username })
                }
            }

            )
            // .then(res=>console.log(res.data))
            // .then(BrowserRouter.push('/login'))
            .catch(err => console.log(err));
    }
    //logout 
    logout = () => {

        API.logout()
            .then(() => this.setState({ user: null, redirect: "Yes" }))
        //  .then(()=>console.log("logged out"))
    }

    render() {
        return (
            this.state.redirect ? <Redirect to="/" /> :
                <nav>
                    <div className="nav-wrapper">
                        <a 
                            onClick={() => window.location = '/home'}
                            className="brand-logo avatar">
                            <img 
                                className="avatar"
                                src="https://cdn.dribbble.com/users/722835/screenshots/4082720/bot_icon.gif">
                            </img>
                        </a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a onClick={() => window.location = '/history'}>history</a></li>
                            <li><a onClick={this.logout}>logout</a></li>
                            <li className="active">
                                <a href="#">User: {this.state.user}</a>
                            </li>
                        </ul>
                    </div>
                </nav>
        )
    }

}

export default AppNavbar