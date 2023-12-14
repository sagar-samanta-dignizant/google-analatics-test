import React, { useState, useEffect } from 'react';

const MyForm = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  // State to manage success message
  const [successMessage, setSuccessMessage] = useState('');

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to simulate form submission
  const simulateFormSubmission = async () => {
    // Simulate API call or any asynchronous operation
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Replace this with your actual form submission logic
    // For now, let's just set a success message
    setSuccessMessage('Form submitted successfully!');

    // Send a success event to Google Tag Manager
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'formSubmissionSuccess',
      // Add any additional data you want to send
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission after a brief delay
    simulateFormSubmission();
  };

  return (
    <div>
      <h2>My Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {successMessage && <p>{successMessage}</p>}
    </div>
  );
};

export default MyForm;
