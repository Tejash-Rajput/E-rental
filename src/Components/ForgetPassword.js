import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/forgot-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error sending reset link');
    }
  };

  return (
    <div className="forgot-password-template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form-container border p-5 rounded bg-white">
        <h3 className="text-center mb-3">Forgot Password</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary">Send Reset Link</button>
          </div>
          {message && <div className="alert alert-info">{message}</div>}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
