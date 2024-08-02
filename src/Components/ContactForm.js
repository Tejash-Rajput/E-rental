import React, { useState } from 'react';
import './ContactForm.css'; // Import the CSS file

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here, e.g., sending data to a backend server
    console.log(formData);
    // Reset the form after submission
    setFormData({ name: '', email: '', feedback: '' });
  };

  return (
    <div>
      <h1 className="h1">Contact Us</h1>
      <div className="container">
        <div className="form-wrapper">
          <h2>Send Us Your Feedback</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="feedback">Feedback</label>
              <textarea id="feedback" name="feedback" value={formData.feedback} onChange={handleChange} required />
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
