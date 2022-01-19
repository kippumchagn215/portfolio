import React from "react"
import NavbarMainPage from "../Sections/NavbarMainPage";
import WorkExp from "../Sections/WorkExp";
import AboutMe from "../Sections/AboutMe";
import Skills from "../Sections/Skills";
import Project from "../Sections/Project";
import ContactMe from "../Sections/ContactMe";
function MainPage(){
    return(
        <div>
        <NavbarMainPage></NavbarMainPage>
        <AboutMe></AboutMe>
        <WorkExp></WorkExp>
        <Skills></Skills>
        <Project></Project>
        <ContactMe></ContactMe>
        </div>
    );
}

export default MainPage;