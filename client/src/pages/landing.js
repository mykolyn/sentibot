import React, { Component } from "react";
import AppNavBar from "../Components/AppNavbar.js"
 import Jumbotron from "../Components/Jumbotron/Jumbotron"


class Landing extends Component {
    render () {
        const user = {
            id: 12345,
            name: 'Test'
        }
        return (
           <div>
               <AppNavBar />
           <Jumbotron/>
                <h4>Welcome to landing page</h4>
           </div>
        )
    }
};

export default Landing;