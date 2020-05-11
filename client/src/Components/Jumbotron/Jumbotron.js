import React, { Component } from "react";
//import { Link, Redirect } from "./node_modules/react-router-dom";
// import "./style.css";
//import API from "../utils/Api";


class Jumbotron extends Component {

    // state = {
    //     user: null,
    //     redirect: ""
    // };

    // componentDidMount() {
    //     this.checkUser()
    // }


    // checkUser = () => {
    //     // console.log(event.target.value)
    //     API.checkUser()
    //         // .then(res => this.setState({ user: res.data.user.username }))
    //         .then(res => {

    //             console.log(res)
    //             if (res.data === "NoUser") {

    //                 console.log("in redirect")
    //                 // return <Redirect to="/login" />
    //                 this.setState({ redirect: "Yes" })
    //             }
    //             else {
    //                 console.log("in setstate")
    //                 this.setState({ user: res.data.user.username })
    //             }
    //         }

    //         )
    //         // .then(res=>console.log(res.data))
    //         // .then(BrowserRouter.push('/login'))
    //         .catch(err => console.log(err));
    // }
    // //logout 
    // logout = () => {

    //     API.logout()
    //         .then(() => this.setState({ user: null, redirect: "Yes" }))
    //     //  .then(()=>console.log("logged out"))
    // }

    render() {
        return (
            <div className="container">
            <div className="jumbotron" style={{marginTop: "75px"}}>
            <h1 className="display-4">Sentibot</h1>
            <p className="lead">Having trouble resolving a conflict? We're here to help :)</p>
            <hr className="my-4"/>
            <p>We use machine learning to guide you through assertive conflict resolution methods. Powered by IBM watson applied theories.</p>
            <p className="lead">
              <a className="btn btn-primary btn-sm" href="#" role="button">Learn more</a>
            </p>
          </div>
          </div>
        )
    }

}


export default Jumbotron;