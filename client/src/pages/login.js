import React, { Component } from "react";

class Login extends Component {
    render () {
        return (
            <div>
                <h4>Welcome to SentiBot. Please Log in.</h4>
                <button onClick={() => window.location = '/home'}>Login</button>
                <button onClick={() => window.location = '/signup'}>Sign Up</button>
            </div>
        )
    }
};

export default Login;

