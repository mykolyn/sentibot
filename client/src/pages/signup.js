import React, { Component } from "react";

class SignUp extends Component {
    render () {
        return (
            <div>
                <h4>Create An Account</h4>
                <button onClick={() => window.location = '/home'}>Sign up!</button>
            </div>
        )
    }
};

export default SignUp;