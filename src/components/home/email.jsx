import React, { useState } from "react";
import InputField from "./InputField"; // Adjust the import path as necessary
import emailjs from "emailjs-com";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_lwjblw4", // Replace with your EmailJS service ID
        "template_l3y1e4p", // Replace with your EmailJS template ID
        { name, email, message },
        "7i7pFJeEBZlDTEmVv" // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email sent successfully!");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send email. Please try again later.");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Name:"
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
        required={true}
      />
      <InputField
        label="Email:"
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Enter your email"
        required={true}
      />
      <InputField
        label="Message:"
        type="textarea"
        value={message}
        onChange={handleMessageChange}
        placeholder="Enter your message"
        required={true}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default EmailForm;
