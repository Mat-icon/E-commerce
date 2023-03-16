import React from "react";
import { useState } from "react";
import "./app.scss";
function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    textArea: "",
  });

  function handleClick(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="contact">
      <div className="flex-contact">
        <h1>Need My Help? Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Full Name"
            type="text"
            required
            name="fullName"
            value={formData.fullName}
            onChange={handleClick}
          />
          <input
            placeholder="Subject"
            type="text"
            required
            name="subject"
            value={formData.subject}
            onChange={handleClick}
          />
          <input
            placeholder="Email"
            type="email"
            required
            name="email"
            value={formData.email}
            onChange={handleClick}
          />
          <textarea
            placeholder="Write a message..."
            name="textArea"
            value={formData.textArea}
            onChange={handleClick}
          />
          <button type="submit">Send a Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
