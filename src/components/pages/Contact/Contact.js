import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    
    const serviceId = "service_y49crmf";
    const templateId = "template_35eepnd";
    const publicKey = "Sl-yWOuvWZyfBdUKy";

    const templateParams = {
        from_name: name,
        from_email: email,
        to_name: "Katherine Guarnizo",
        message: message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
            console.log('Email sent successfully!', response);
            setName("")
            setEmail("");
            setMessage("");
        })
        .catch((error) => {
            console.error("Error sending email", error);
        });
    
    };

    return (
        <div className="total-form-container">
            <h2>Contact Me</h2>
            <div className="contact-form-container">
                <p>
                Have a question, a project idea, or just want to chat? I'm here for it! I'm always looking forward to connecting with new people and exploring exciting opportunities. Let's connect and start the conversation today; I'm eager to hear your thoughts and explore how we can collaborate.               
                </p>
                <form onSubmit={handleSubmit} className="contact-form">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        cols="30"
                        rows="10"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    >
                    </textarea>
                    <div className="form-button-container">
                    <button type="submit">Send Email</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;