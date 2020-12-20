import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormError from "./FormError";

const schema = yup.object().shape({
    firstName: yup
        .string().required("First name is required")
        .min(2, 'Fist name is too short - should be 4 characters minimum.'),
    lastName: yup
        .string().required("A username is required")
        .min(2, 'Last name is too short - should be 4 characters minimum.'),
    email: yup
        .string()
        .email("Please enter a valid email")
        .required("Email is required")
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 'Invalid email address.'),
    messageField: yup
        .string().required("Message to short")
        .min(10, 'Message is too short - should be 10 characters minimum.'),
});

function ContactForm() {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });

    function onSubmit(data) {
        console.log("data", data);
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control name="firstName" placeholder="Enter First Name" ref={register} />
                {errors.firstName && <FormError>{errors.firstName.message}</FormError>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control name="lastName" placeholder="Enter Last Name" ref={register} />
                {errors.lastName && <FormError>{errors.lastName.message}</FormError>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" placeholder="Enter your email" ref={register} />
                {errors.email && <FormError>{errors.email.message}</FormError>}
            </Form.Group>

            <Form.Group>
                <Form.Label>message</Form.Label>
                <Form.Control as="textarea" rows="3" name="messageField" placeholder="Enter your message" ref={register} />
                {errors.messageField && <FormError>{errors.messageField.message}</FormError>}
            </Form.Group>


            <Button variant="info" type="submit">Send</Button>
        </Form>
    );
}

export default ContactForm;

