import React, { Component } from "react";
import Google from "./google.js";
import API from "../utils/Api";
import { Redirect } from "react-router-dom";
import "../css/login.css";

class Login extends Component {

  state = {
    showGoogle: "",
    redirect: "",
    currentView: "logIn",
    username: "",
    password: "",
    email: "",
    message: "",
    loginmessage: ""


  };

  componentDidMount() {
    this.checkUser()
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    // alert(`Hello ${this.state.username} ${this.state.email}`);
    API.localSignup(
      {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      }
    ).then(res => {
      console.log("in react front after signup call:" + res.data)
      if (res.data === "UserExist") {
        this.setState({ message: "User Exist" })
        this.setState({ currentView: "signUp" })
      }
      else {
        this.setState({ redirect: "Yes" })
      }
    })
  };

  locallogin = event => {
    event.preventDefault();

    API.localLogin(

      {
        username: this.state.username,
        password: this.state.password
      }
    ).then(res => {
      if (res.data === "LoginFailed") {
        this.setState({ loginmessage: "Username/password combination failed" })
        this.setState({ currentView: "logIn" })

      }
      else {
        this.setState({ redirect: "Yes" })
      }

    })
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

  // google = () => {

  //     this.setState({ showGoogle: true })
  // }

  // renderPage = () => {
  //     if (this.state.showGoogle) {
  //         return <Google />;
  //     };
  // }

  changeView = (view) => {
    this.setState({
      currentView: view
    });
  };

  currentView = () => {
    switch (this.state.currentView) {
      case "signUp":
        return (
          <form onSubmit={this.handleFormSubmit}>>
            <h2>Sign Up!</h2>
            <fieldset>
              <legend>Create Account</legend>
              <ul>
                <h6 className="message">{this.state.message}</h6>
                <li>
                  <label for="username">Username:</label>
                  <input type="text" id="username" required
                    value={this.state.username}
                    name="username"
                    onChange={this.handleInputChange}
                    placeholder="username"
                  />
                </li>
                <li>
                  <label for="email">Email:</label>
                  <input type="email" id="email" required
                    value={this.state.email}
                    name="email"
                    onChange={this.handleInputChange}
                    placeholder="email"
                  />
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input type="password" id="password" required
                    value={this.state.passworde}
                    name="password"
                    onChange={this.handleInputChange}
                    placeholder="password"
                  />
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

          <form onSubmit={this.locallogin}>
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend>Log In</legend>
              <ul>
                <h6 className="message">{this.state.loginmessage}</h6>
                <li>
                  <label for="username">Username:</label>
                  <input type="text" id="username" required
                    value={this.state.username}
                    name="username"
                    onChange={this.handleInputChange}
                    placeholder="username"
                  />
                </li>
                <li>
                  <label for="password">Password:</label>
                  <input type="password" id="password" required
                    value={this.state.passworde}
                    name="password"
                    onChange={this.handleInputChange}
                    placeholder="password"
                  />
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

            <h6> Or Login Using...</h6>
            <Google />
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
    return (
      this.state.redirect ? <Redirect to="/home" /> :
        <div>
          <h4>Welcome to SentiBot. Please Log in.</h4>
          {/* <button onClick={() => window.location = '/home'}>Login</button> */}
          <section id="entry-page">{this.currentView()}</section>;

                {/* <button onClick={() => window.location = '/signup'}>Sign Up</button> */}
          {/* {this.renderPage()} */}

        </div>
    )
  }
};


export default Login;


// import "../css/login.css";

// class EntryPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       currentView: "signUp"
//     };
//   }

//   changeView = (view) => {
//     this.setState({
//       currentView: view
//     });
//   };

//   currentView = () => {
//     switch (this.state.currentView) {
//       case "signUp":
//         return (
//           <form>
//             <h2>Sign Up!</h2>
//             <fieldset>
//               <legend>Create Account</legend>
//               <ul>
//                 <li>
//                   <label for="username">Username:</label>
//                   <input type="text" id="username" required />
//                 </li>
//                 <li>
//                   <label for="email">Email:</label>
//                   <input type="email" id="email" required />
//                 </li>
//                 <li>
//                   <label for="password">Password:</label>
//                   <input type="password" id="password" required />
//                 </li>
//               </ul>
//             </fieldset>
//             <button>Submit</button>
//             <button type="button" onClick={() => this.changeView("logIn")}>
//               Have an Account?
//             </button>
//           </form>
//         );
//         break;
//       case "logIn":
//         return (
//           <form>
//             <h2>Welcome Back!</h2>
//             <fieldset>
//               <legend>Log In</legend>
//               <ul>
//                 <li>
//                   <label for="username">Username:</label>
//                   <input type="text" id="username" required />
//                 </li>
//                 <li>
//                   <label for="password">Password:</label>
//                   <input type="password" id="password" required />
//                 </li>
//                 <li>
//                   <i />
//                   <a onClick={() => this.changeView("PWReset")} href="#">
//                     Forgot Password?
//                   </a>
//                 </li>
//               </ul>
//             </fieldset>
//             <button>Login</button>
//             <button type="button" onClick={() => this.changeView("signUp")}>
//               Create an Account
//             </button>
//           </form>
//         );
//         break;
//       case "PWReset":
//         return (
//           <form>
//             <h2>Reset Password</h2>
//             <fieldset>
//               <legend>Password Reset</legend>
//               <ul>
//                 <li>
//                   <em>A reset link will be sent to your inbox!</em>
//                 </li>
//                 <li>
//                   <label for="email">Email:</label>
//                   <input type="email" id="email" required />
//                 </li>
//               </ul>
//             </fieldset>
//             <button>Send Reset Link</button>
//             <button type="button" onClick={() => this.changeView("logIn")}>
//               Go Back
//             </button>
//           </form>
//         );
//       default:
//         break;
//     }
//   };

//   render() {
//     return <section id="entry-page">{this.currentView()}</section>;
//   }
// }
// export default EntryPage;
