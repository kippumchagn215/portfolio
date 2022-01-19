import React from "react"
import {Container,Row,Col} from "react-bootstrap"
function Skills(){
    return(
    <div data-aos="fade-right" id="skills">
    <Container>
        <h1 class="Header">Skills</h1>
        <Row className="center">
            <Col lg={2} md={3} sm={4} xs={6}><img className="hvr-bounce-in margin-top-bottom" src="/images/skill_Img/html.png" alt="Html" width="120px" height="120px"></img></Col>
            <Col lg={2} md={3} sm={4} xs={6}><img className="hvr-bounce-in margin-top-bottom" src="/images/skill_Img/css.png" alt="Css" width="120px" height="120px"></img></Col>
            <Col lg={2} md={3} sm={4} xs={6}><img className="hvr-bounce-in margin-top-bottom" src="/images/skill_Img/js.png" alt="Js" width="120px" height="120px"></img></Col>
            <Col lg={2} md={3} sm={4} xs={6}><img className="hvr-bounce-in margin-top-bottom" src="/images/skill_Img/Bootstrap.png" alt="Bootstrap" width="120px" height="120px"></img></Col>
            <Col lg={2} md={3} sm={4} xs={6}><img className="hvr-bounce-in margin-top-bottom" src="/images/skill_Img/React.png" alt="React" width="120px" height="120px"></img></Col>
            <Col lg={2} md={3} sm={4} xs={6}><img className="hvr-bounce-in margin-top-bottom" src="/images/skill_Img/Angular.js.png" alt="Angular" width="120px" height="120px"></img></Col>
            <Col lg={2} md={3} sm={4} xs={6}><img className="hvr-bounce-in margin-top-bottom" src="/images/skill_Img/net.png" alt="Net" width="120px" height="120px"></img></Col>
            <Col lg={2} md={3} sm={4} xs={6}><img className="hvr-bounce-in margin-top-bottom" src="/images/skill_Img/node.png" alt="Node" width="120px" height="120px"></img></Col>
            <Col lg={2} md={3} sm={4} xs={6}><img className="hvr-bounce-in margin-top-bottom" src="/images/skill_Img/mongodb.png" alt="MongoDb" width="120px" height="120px"></img></Col>
            <Col lg={2} md={3} sm={4} xs={6}><img className="hvr-bounce-in margin-top-bottom" src="/images/skill_Img/sql.png" alt="Sql" width="120px" height="120px"></img></Col>
            <Col lg={2} md={3} sm={4} xs={6}><img className="hvr-bounce-in margin-top-bottom" src="/images/skill_Img/unity.png" alt="Unity" width="120px" height="120px"></img></Col>
            <Col lg={2} md={3} sm={4} xs={6}><img className="hvr-bounce-in margin-top-bottom" src="/images/skill_Img/python.png" alt="Python" width="120px" height="120px"></img></Col>
            <Col lg={2} md={3} sm={4} xs={6}><img className="hvr-bounce-in margin-top-bottom" src="/images/skill_Img/java.png" alt="Java" width="120px" height="120px"></img></Col>
            <Col lg={2} md={3} sm={4} xs={6}><img className="hvr-bounce-in margin-top-bottom" src="/images/skill_Img/c.png" alt="C" width="120px" height="120px"></img></Col>
        </Row>
    </Container>
    </div>
    );
}
export default Skills;