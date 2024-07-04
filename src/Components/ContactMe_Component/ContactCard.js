import React from "react";
import { Col, Row, Nav, Navbar, Container } from "react-bootstrap";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
export default function ContactCard() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="NavbarHeader" href="#aboutme">
          <h4>Kippum Chang</h4>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
