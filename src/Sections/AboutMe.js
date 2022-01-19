import React from "react"
import {Container,Row,Col,Button} from "react-bootstrap"
function AboutMe(){
    return(
        <div id="aboutme">
            <Container>
                <h1 class="Header">About Me</h1>
                <Row>
                    <Col lg={4} md={12}><div class="Selfie"><img class="MyPhoto" src = "/images/profile_img/Selfie.jpg" alt = "selfie" height="300px" width="300px"></img></div></Col>
                    <Col lg={8} md={12}><h5>Hey, I'm Kippum, a software developer and currently a student pursuing a bachelor's degree at the University of Texas at Dallas who is interested in full-stack web application development.
                        <br></br><br></br>My goal is to develop an application that can provide convenience to people and to achieve this goal I have been obtaining the necessary skills and knowledge through school, personal projects and, an internship. 
                        <br></br><br></br>Also, on my free time I enjoy playing sports especially table tennis, making and playing games, and sleeping.</h5>
                        <br></br>
                        <Button variant="dark" href="https://docs.google.com/document/d/1luOxDYdrQ7ENP1RqTUwVBiJg12d_asX3UnQss-gOrgM/edit?usp=sharing">Resume</Button>
                        </Col>
                        
                </Row>
            </Container>
        </div>
    );
}

export default AboutMe;