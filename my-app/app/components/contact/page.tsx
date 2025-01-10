// components/About.tsx
"use client";

import "./style.css"; // We'll create this CSS file next.


   

import React, { useState } from "react";


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contactSection">
      <div className="container">
        <h2 className="title">Contact Me</h2>
        <p className="subtitle">Feel free to reach out to me. I'd love to hear from you!</p>
        <form onSubmit={handleSubmit} className="contactForm">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            required
            className="input"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            required
            className="input"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            required
            className="textarea"
          />
          <button type="submit" className="submitButton">
            Send Message
          </button>
        </form>
      </div>
    </section>
  


  );
};

export default Contact;

