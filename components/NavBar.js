import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus,faSignInAlt,faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


 function NavBar() {
    return (
        <Navbar sticky="top"  collapseOnSelect expand="lg" bg="light" variant="light">
  <Navbar.Brand href="#home"  ><FontAwesomeIcon icon={faBus} color="yellow" size="lg" />  Yellow School </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
        
    <Nav.Link href="#Find-tutor">Find tutor</Nav.Link>
      <Nav.Link href="#Become-a-tutor">Become a tutor</Nav.Link>
      
      
    </Nav>
    <Nav>
    <NavDropdown   title="English,USD" id="collasible-nav-dropdown">
        <NavDropdown.Item >Language</NavDropdown.Item>
        <NavDropdown.Item href="#English/3.1">English</NavDropdown.Item>
        <NavDropdown.Item >Currency</NavDropdown.Item>
        
        <NavDropdown.Item href="#USD/3.2">USD</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link eventKey={1} href="#help"><FontAwesomeIcon icon={faQuestionCircle} size="lg"/>  </Nav.Link>
      <Nav.Link eventKey={2} href="#login"><FontAwesomeIcon icon={faSignInAlt} size="lg"/>  Log in </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>

    )

}


export default NavBar;