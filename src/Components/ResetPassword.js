import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const { token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/reset-password', { token, password });
      setMessage(response.data.message);
      if (response.data.success) {
        navigate('/login');
      }
    } catch (error) {
      setMessage('Error resetting password');
    }
  };

  return (
    <div className="reset-password-template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form-container border p-5 rounded bg-white">
        <h3 className="text-center mb-3">Reset Password</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label>New Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter new password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary">Reset Password</button>
          </div>
          {message && <div className="alert alert-info">{message}</div>}
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
