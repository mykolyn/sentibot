import React, {Component} from 'react';
import{
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class AppNavbar extends Component {
    state={
        isOpen: false
    }
    toggle = () => {
        alert()
        this.setState({
            isOpen: !this.state.isOpen
            
        })
    }
render(){
    return(
        <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
        <NavbarBrand href="/" className="mr-auto">SentiTalk</NavbarBrand>
        <NavbarToggler onClick={this.toggler}  />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className ="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/mykolyn/sentibot">Github</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Chat</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">History</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
      </Navbar>
    </div>
    )
}
}

export default AppNavbar