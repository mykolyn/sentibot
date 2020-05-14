import React, { Component } from "react";
import API from "../../utils/Api";
import "../../css/login.css";

class Google extends Component {



    googleLogin = (event) => {
        // console.log(event.target.value)
        console.log("in google button press")
        API.googleLogin()
    }


    render() {
        return (
            // <div class="google-btn">
            //     <div class="google-icon-wrapper">
            //         <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
            //     </div>
            //     <p class="btn-text" onClick={this.googleLogin}><b>Sign in with google</b></p>
            // </div>
            // // <button type="button" onClick={this.googleLogin}>Google+</button>

            <div class="col">
                <a href="#" class="fb btn">
                    <i class="fa fa-facebook fa-fw"></i> Login with Facebook
         </a>
                <a href="#" class="twitter btn">
                    <i class="fa fa-twitter fa-fw"></i> Login with Twitter
        </a>
                <a href="#" class="google btn" onClick={this.googleLogin}><i class="fa fa-google fa-fw">
                </i> Login with Google+
        </a>
            </div>
        )

    }
}

export default Google