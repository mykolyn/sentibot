import React, { Component } from "react";
import AppNavBar from "../Components/AppNavbar.js"
 import Jumbotron from "../Components/Jumbotron/Jumbotron"
 import Background from "../assets/prism.png"


class Landing extends Component {
    render () {
        const user = {
            id: 12345,
            name: 'Test'
        }
        return (
           <div style={{backgroundImage: {Background}}}>
               <AppNavBar />
           <Jumbotron/>
             
           </div>
        )
    }
};

export default Landing;