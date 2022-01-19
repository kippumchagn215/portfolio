import React from "react"
import {Row,Col} from "react-bootstrap"

export default function ContactForm(){
    return(
                <div class="container-2">
                    <form action="https://formsubmit.io/send/kippumchang@gmail.com" method="POST">
                    <label for="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your name"></input>

                        <label for="email">Email</label>
                        <input type="text" id="email" name="email" placeholder="Your email"></input>


                        <label for="subject">Subject</label>
                        <textarea id="subject" name="subject" placeholder="Message" style={{height:"200px"}}></textarea>

                        <button type="submit">Send</button>

                    </form>
                </div>
           
    );
}