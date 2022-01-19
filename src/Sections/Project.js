import React,{useEffect} from "react";
import ProjectRow from "../Components/Project_Components/ProjectRow";
import {Container} from "react-bootstrap"
import projectLists from "../Db/ProjectsList";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function Project(){
    useEffect(function(){
        AOS.init({mirror:false,delay:0,duration:1200})
    },[])
    return(
        <Container id="projects" style={{backgroundColor:"purple"}}>
            <h1 class="Header white-text">Projects</h1>
            {projectLists.map(function(item, i){
                return(
                    <div class = "padding-top margin-top2" data-aos="flip-left">
                    <ProjectRow projects={item} key={i}></ProjectRow>
                    </div>
                )
            })
            }
        </Container>
    );
}
export default Project;