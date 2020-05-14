import React, { Component } from "react";
import Chatbox from "../Components/chatbox/chatbox"
import AppNavBar from "../Components/AppNavbar.js"
import API from "../utils/Api";
import "./home.css"
import Footer from "../Components/Footer/Footer.js"
import Chatcards from "../Components/Chatcards/Chatcards"
import Sentimood from "../Components/Sentimood/Sentimood";
import SentimoodPos from "../Components/SentimoodPos/SentimoodPos";

import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            redirect: "",
            sentiScore: "neutral",
            seconds: 0
        };
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

    test = () => {
        axios.get('/exercises/sentiscore')
            .then(response => {
                this.setState({ sentiScore: response.data.sentiScore })
console.log("asdasdasdasdasd"+response.data.sentiScore)
            })
            .catch((error) => {
                console.log(error);
            });
    }


    tick() {

        this.setState(state => ({
            seconds: state.seconds + 1
        }));
        axios.get('/exercises/sentiscore')
            .then(response => {
                this.setState({ sentiScore: response.data.sentiScore })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentDidMount() {
        console.log("2222222running didmount in home.js")
        this.checkUser()
        this.interval = setInterval(() => this.test(), 1000);

        // axios.get('/exercises/')
        // .then(response => {
        //   this.setState({sentiScore: response.data.sentiScore })
        // })
        // .catch((error) => {
        //   console.log(error);
        // })
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
                <div className="container" style={{ marginTop: "5%", marginBottom: "1%" }}>
                    <h1>Welcome {this.state.user}</h1>
                    <div>
                        Seconds: {this.state.seconds}
        Seconds: {this.state.sentiScore}
                    </div>
                </div>



                <Chatcards />
                <div>
                    <p style={{ marginLeft: "70px" }}>The color will change based on the sentiment score of your most recent message with our chatbot!</p>
                </div>
                <div className="container" style={{ textAlign: "center", marginBottom: "5%", marginTop: "-10%" }}>
                    {this.state.sentiScore === "positive" ? <SentimoodPos /> : <Sentimood />}



                </div>





                <Chatbox currentUser={user} />
            </div>
        )
    }
};

export default Home;