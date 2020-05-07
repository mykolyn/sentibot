import React, { Component } from "react";
import "../css/login.css";

class EntryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "signUp"
    };
  }

  changeView = (view) => {
    this.setState({
      currentView: view
    });
  };

  currentView = () => {
    switch (this.state.currentView) {
      case "signUp":
        return (
          <form>
            <h2>Sign Up!</h2>
            <fieldset>
              <legend>Create Account</legend>
              <ul>
                <li>
                  <label for="username">Username:</label>
                  <input type="text" id="username" required />
                </li>
                <li>
                  <label for="email">Email:</label>
                  <input type="email" id="email" required />
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input type="password" id="password" required />
                </li>
              </ul>
            </fieldset>
            <button>Submit</button>
            <button type="button" onClick={() => this.changeView("logIn")}>
              Have an Account?
            </button>
          </form>
        );
        break;
      case "logIn":
        return (
          <form>
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend>Log In</legend>
              <ul>
                <li>
                  <label for="username">Username:</label>
                  <input type="text" id="username" required />
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input type="password" id="password" required />
                </li>
                <li>
                  <i />
                  <a onClick={() => this.changeView("PWReset")} href="#">
                    Forgot Password?
                  </a>
                </li>
              </ul>
            </fieldset>
            <button>Login</button>
            <button type="button" onClick={() => this.changeView("signUp")}>
              Create an Account
            </button>
          </form>
        );
        break;
      case "PWReset":
        return (
          <form>
            <h2>Reset Password</h2>
            <fieldset>
              <legend>Password Reset</legend>
              <ul>
                <li>
                  <em>A reset link will be sent to your inbox!</em>
                </li>
                <li>
                  <label for="email">Email:</label>
                  <input type="email" id="email" required />
                </li>
              </ul>
            </fieldset>
            <button>Send Reset Link</button>
            <button type="button" onClick={() => this.changeView("logIn")}>
              Go Back
            </button>
          </form>
        );
      default:
        break;
    }
  };

  render() {
    return <section id="entry-page">{this.currentView()}</section>;
  }
}
export default EntryPage;
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
