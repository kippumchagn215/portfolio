import React from "react"
import ProjectRowImg from "./ProjectRowImg";
import {Col,Row,Carousel,Button} from "react-bootstrap"
import NewlineText from "./NewLineText";
export default function ProjectRow(props){
    return(
        <Row>
            <Col lg={5}>
                <Carousel>
                    {props.projects.screenshots.map(function(e,i){
                        return(
                        <Carousel.Item>
                            <ProjectRowImg imgInfo = {e} key = {i}></ProjectRowImg>
                            <Carousel.Caption>
                            <h3>{e.imgtitle}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                        );
                    })}
                </Carousel>
            </Col>
            <Col lg={7}>
                <h1 class="white-text">{props.projects.name}</h1>
                <p class="white-text left">
                    <NewlineText text={props.projects.explanation}></NewlineText>
                </p>
                <Button variant="primary" size="lg" href={props.projects.code}>Code</Button>
                <Button variant="info" size="lg" href={props.projects.demo}>Demo</Button>
                {props.projects.report ? <Button variant="dark" size="lg" href = {props.projects.report}>Report</Button> : null}
            </Col>
        </Row>
    );
}
