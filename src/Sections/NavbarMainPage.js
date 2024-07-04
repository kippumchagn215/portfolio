import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

function NavbarMainPage() {
  return (
    <Navbar
      className="Navbar"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand className="NavbarHeader" href="#aboutme">
          <h4>Kippum Chang</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#aboutme">About Me</Nav.Link>
            <Nav.Link href="#workexp">Work Experience</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="mailto:kippumchang@gmail.com" className="font-size">
              <AiOutlineMail />
            </Nav.Link>
            <Nav.Link
              href="https://github.com/kippumchagn215"
              className="font-size"
            >
              <AiFillGithub />
            </Nav.Link>
            <Nav.Link
              href="https://www.linkedin.com/in/kippum-chang-1938021a3/"
              className="font-size"
            >
              <AiFillLinkedin />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMainPage;
