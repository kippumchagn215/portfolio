import React from "react"
import {Container} from "react-bootstrap"
import ContactCard from "../Components/ContactMe_Component/ContactCard";
import ContactForm from "../Components/ContactMe_Component/ContactForm";
export default function ContactMe(){
    function preventDefault(e){
        e.preventDefault();
    }
    return(
        <div class="">
            <h1 class="Header" id="contact">Contact Me</h1>
            <ContactForm></ContactForm>
            <ContactCard></ContactCard>
        </div>
        
    );
}