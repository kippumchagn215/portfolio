import React from "react";
import {Col,Row,Nav,Navbar,Container} from "react-bootstrap"
import { AiFillGithub,AiFillLinkedin,AiOutlineMail } from 'react-icons/ai';
export default function ContactCard(){
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className = "NavbarHeader" href="#aboutme"><h4>Kippum Chang</h4></Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="mailto:kippumchang@gmail.com" className="font-size"><AiOutlineMail/></Nav.Link>
                        <Nav.Link href="https://github.com/kippumchagn215" className="font-size"><AiFillGithub/></Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/kippum-chang-1938021a3/" className="font-size"><AiFillLinkedin/></Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    );
}