import React from "react"
import {Navbar,Nav,Container} from "react-bootstrap"

function NavbarMainPage(){
    return (
      <Navbar className = "Navbar" collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
      <Navbar.Brand className = "NavbarHeader" href="#aboutme"><h4>Kippum Chang</h4></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#aboutme">About Me</Nav.Link>
          <Nav.Link href="#workexp">Work Experience</Nav.Link>
          <Nav.Link href="#skills">Skills</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMainPage;