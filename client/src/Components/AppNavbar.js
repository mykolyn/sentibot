/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function AppNavbar() {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo avatar"><img src="https://via.placeholder.com/50"></img></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a onClick={() => window.location = '/history'}>history</a></li>
                    <li><a onClick={() => window.location = '/'}>logout</a></li>
                </ul>
            </div>
        </nav>
    )
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