import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We\'ll get back to you as soon as possible.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <h1>Connect with Little Lemon</h1>
      <div className="contact-content">
        <div className="contact-info">
          <h2>We'd Love to Hear from You</h2>
          <p>Have a question about our menu? Want to book a special event? Or perhaps you just want to say hello? We're all ears! Drop us a line, and we'll get back to you faster than you can say "Opa!"</p>
          <ul>
            <li>📍 237 Lemon Lane, Chicago, IL 60601</li>
            <li>📞 (312) LEMON-01</li>
            <li>✉️ hello@littlelemon.com</li>
          </ul>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
