import React, { Component } from "react";
import Chatbox from "../Components/chatbox/chatbox"
import AppNavBar from "../Components/AppNavbar.js"
import API from "../utils/Api";
import "./home.css"
import Footer from "../Components/Footer/Footer.js"
import Chatcards from "../Components/Chatcards/Chatcards"

class Home extends Component {

    state = {
        user: null,
        redirect: ""
    };

    checkUser = () => {
        // console.log(event.target.value)
        API.checkUser()
            // .then(res => this.setState({ user: res.data.user.username }))
            .then(res => {

                console.log(res)
                if (res.data === "NoUser") {

                    console.log("in redirect")
                    // return <Redirect to="/login" />
                    //this.setState({ redirect: "Yes" })
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

    componentDidMount() {
        this.checkUser()
    }

    render() {
        const user = {
            id: 12345,
            name: 'Test'
        }
        return (
            <div>
                <AppNavBar />
                {/* <iframe ></iframe> */}
                <div className="container" style={{marginTop:"5%", marginBottom:"1%"}}>
                    <h1>Welcome {this.state.user}</h1>
                </div>


                
<Chatcards/>





                <Chatbox currentUser={user} />
            </div>
        )
    }
};

export default Home;