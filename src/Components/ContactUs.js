import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './ContactUs.css'; // Import your custom CSS if needed
import ContactForm from './ContactForm';

const ContactUs = () => {
  return (
    <div className="container mt-5">
      <ContactForm />
      <p>
        Rentals.com is here to give the best possible customer service to property managers and landlords advertising their properties, as well as potential tenants searching for their next house. If you have any questions or comments please use the form below and we will get back to you within 24 hours or by the end of the next business day.
      </p>
      <p><strong>Corporate Headquarters</strong></p>
      <p>
        Rentals.com<br /> 271 17th Street NW Suite 1850<br /> Atlanta, GA 30363
      </p>
      <p>1-866-730-7177</p>
      <p>We're here to answer your questions Monday through Friday from 9 AM to 6 PM, Eastern time.</p>

      {/* Button Wrapper */}
      <div className="d-flex justify-content-center mt-4">
        <a href="/home" className="btn btn-primary me-2">Visit Homepage</a>
      </div>
    </div>
  );
}

export default ContactUs;


