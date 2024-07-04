import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
function AboutMe() {
  return (
    <div id="aboutme">
      <Container>
        <h1 class="Header">About Me</h1>
        <Row>
          <Col lg={4} md={12}>
            <div class="Selfie">
              <img
                class="MyPhoto"
                src="/images/profile_img/Selfie.jpg"
                alt="selfie"
                height="300px"
                width="300px"
              ></img>
            </div>
          </Col>
          <Col lg={8} md={12}>
            <h5>
              Hi, I'm Kippum, experienced software developer with a diverse
              background spanning Unity game development, mathematical coding in
              <b> C# .NET,</b> and simulation improvement in <b>C++. </b>
              Skilled in writing and maintaining robust mathematical algorithms
              and simulation codes. <br></br>
              <br></br>Proficient in web technologies including
              <b> React.js, Angular.js, and Node.js, </b>
              with hands-on experience in database management systems such as{" "}
              <b>Apache CouchDB, SQL, and MongoDB.</b>
              <br></br>
              <br></br>Also, in my free time, I enjoy playing sports especially
              <b> pickleball!!!!</b>, table tennis, making and playing games,
              and watching TV shows
            </h5>
            <br></br>
            <Button
              variant="dark"
              href="https://docs.google.com/document/d/1luOxDYdrQ7ENP1RqTUwVBiJg12d_asX3UnQss-gOrgM/edit?usp=sharing"
            >
              Resume
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutMe;
