// components/cart/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link"; // You can use Next.js's Link for navigation

import "./style.css"; // Import the custom CSS

const Cart: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>(""); // Service selection
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
  });

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(e.target.value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService) {
      alert("Please select a service.");
      return;
    }

    // Here, we could handle the form submission (send to a backend or email API)
    console.log("User hired for service:", selectedService, userDetails);
    
    // Reset the form
    setSelectedService("");
    setUserDetails({ name: "", email: "" });
    alert("Thank you for your interest! I will contact you soon.");
  };

  return (
    <div className="cartContainer">
      <h2 className="cartTitle">Hire Me for Your Project</h2>
      <form onSubmit={handleSubmit} className="hireForm">
        <div className="formGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={userDetails.name}
            onChange={handleInputChange}
            required
            placeholder="Enter your name"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userDetails.email}
            onChange={handleInputChange}
            required
            placeholder="Enter your email"
          />
        </div>
        <div className="formGroup">
          <label htmlFor="service">Choose a Service:</label>
          <select
            id="service"
            name="service"
            value={selectedService}
            onChange={handleServiceChange}
            required
          >
            <option value="">Select a service</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="UX/UI Design">UX/UI Design</option>
            <option value="Consulting">Consulting</option>
          </select>
        </div>

        <button type="submit" className="submitButton">
          Submit
        </button>
      </form>

      <p className="contactMessage">
        If you're ready to hire me, fill out the form above. I'll get back to you as soon as possible!
      </p>
      <Link href="/contact" className="contactLink">
        Or visit my <strong><button><Link href="/components/contact">Contact page</Link></button></strong> for more details
      </Link>
    </div>
  );
};

export default Cart;
