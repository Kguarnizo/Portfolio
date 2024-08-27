import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState("");

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

    const validationErrors = {};
    if (!templateParams.from_name.trim()) {
      validationErrors.from_name = "⚠ name is required";
    }
    if (!templateParams.from_email.trim()) {
      validationErrors.from_email = "⚠ email is required";
    } else if (!/\S+@\S+\.\S+/.test(templateParams.from_email)) {
      validationErrors.from_email = "⚠ email is not valid";
    }

    if (!templateParams.message.trim()) {
      validationErrors.message = "⚠ message is required";
    }
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then((response) => {
          console.log("Email sent successfully!", response);
          setName("");
          setEmail("");
          setMessage("");
          toast.success(
            `Thank you, ${templateParams.from_name}! Your message has been sent`,
            {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: false,
              progress: undefined,
              theme: "light",
              transition: Flip,
            },
          );
        })
        .catch((error) => {
          console.error("Error sending email", error);
        });
    }
  };

  return (
    <div className="total-form-container">
      <h2>Contact Me</h2>
      <div className="contact-form-container">
        <p>
          Have a question, a project idea, or just want to chat? I'm here for
          it! I'm always looking forward to connecting with new people and
          exploring exciting opportunities. Let's connect and start the
          conversation today; I'm eager to hear your thoughts and explore how we
          can collaborate.
        </p>
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.from_name && (
            <span className="error-message">{errors.from_name}</span>
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.from_email && (
            <span className="error-message">{errors.from_email}</span>
          )}
          <textarea
            cols="30"
            rows="10"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {errors.message && (
            <span className="error-message">{errors.message}</span>
          )}
          <ToastContainer closeButton={false} />
          <div className="form-button-container">
            <button type="submit">Send Email</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
