/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */


import React, { Component } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
// import "./style.css";
import API from "../utils/Api";
class AppNavbar extends Component {

    state = {
        user: null,
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
    //logout 
    logout = () => {

        API.logout()
            .then(() => {
                this.setState({ user: null, redirect: "Yes" })
                //window.location.reload()
                //  .then(()=>console.log("logged out"))
            })
    }



    render() {
        return (
            this.state.redirect ? <Redirect to="/home" /> :
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo avatar"><img src="../assets/animal-kingdom.png"></img></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                         

                            <li>
                                {!this.state.user ?
                                    <a onClick={() => window.location = '/login'}>Login</a>
                                    :
                                    <a onClick={this.logout}>Logout</a>
                                }
                            </li>
                            <li>
                                {this.state.user ?
                                    <li><a onClick={() => window.location = '/home'}>Chat</a></li>:
                                    <li><a href="#"></a></li>
                                }
                            </li>
                            <li>
                                {this.state.user ?
                                    <li><a onClick={() => window.location = '/history'}>History</a></li>:
                                    <li><a href="#"></a></li>
                                }
                            </li>

                            {/* <li><a onClick={() => window.location = '/login'}>login</a></li>
                                <li><a onClick={this.logout}>logout</a></li> */}
                            {/* <li><a onClick={() => window.location = '/home'}>chat</a></li>

                            <li><a onClick={() => window.location = '/history'}>history</a></li> */}

   <li className="active">
                                <a href="#">User: {this.state.user}</a>
                            </li>
                        </ul>
                    </div>
                </nav>
        )
    }

}


// import React, {Component} from 'react';
// import{
//     Collapse,
//     Navbar,
//     NavbarToggler,
//     NavbarBrand,
//     Nav,
//     NavItem,
//     NavLink,
//     Container
// } from 'reactstrap';

// class AppNavbar extends Component {
//     state={
//         isOpen: false
//     }
//     toggle = () => {
//         alert()
//         this.setState({
//             isOpen: !this.state.isOpen

//         })
//     }
// render(){
//     return(
//         <div>
//       <Navbar color="dark" dark expand="sm" className="mb-5">
//           <Container>
//         <NavbarBrand href="/" className="mr-auto">SentiTalk</NavbarBrand>
//         <NavbarToggler onClick={this.toggler}  />
//         <Collapse isOpen={this.state.isOpen} navbar>
//           <Nav className ="ml-auto" navbar>
//             <NavItem>
//               <NavLink href="https://github.com/mykolyn/sentibot">Github</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/">Chat</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="/">History</NavLink>
//             </NavItem>
//           </Nav>
//         </Collapse>
//       </Container>
//       </Navbar>
//     </div>
//     )
// }
// }

export default AppNavbar