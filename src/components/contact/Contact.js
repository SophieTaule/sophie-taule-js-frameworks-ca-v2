import React from 'react';
import { Container } from 'react-bootstrap';
//import Heading from "../layout/Heading";
import ContactForm from "./ContactForm";

export function Contact() {
    return (
        <div className="Contact">
            <Container>
                <h1>Contact Page</h1>
                <ContactForm />
            </Container>
        </div>
    );
}

export default Contact;
