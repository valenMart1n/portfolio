import React from "react";
import './Contact.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faJava, faJs, faLinkedin, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Contact() {
    return(
        <div className="contact-background">
            <h2>CONTACTAME</h2>
            <div className="contacts-container">
                <div className="contacts" style={{backgroundColor: "rgb(236, 56, 21)"}}>
                 Email<FontAwesomeIcon className="contact-icon" icon={faEnvelope}/> 
                 </div>
                 <div className="contacts"  style={{backgroundColor: "rgb(60, 60, 60)"}}>
                 Github<FontAwesomeIcon className="contact-icon" icon={faGithub}/> 
                 </div>
                 <div className="contacts"  style={{backgroundColor: "rgb(77, 165, 230)"}}>
                 Linkedin<FontAwesomeIcon className="contact-icon" icon={faLinkedin}/> 
                 </div>
            </div>
        </div>
    );
}

export default Contact;