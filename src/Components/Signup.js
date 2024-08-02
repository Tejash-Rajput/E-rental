import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

class Signup extends Component {
  handleGoogleLoginSuccess = (response) => {
    console.log(response);
  };

  handleGoogleLoginFailure = (response) => {
    console.error(response);
  };

  render() {
    return (
      <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
        <div className='signup-template d-flex justify-content-center align-items-center vh-100 bg-primary'>
          <div className='form-container p-5 rounded bg-white'>
            <form>
              <h3 className='text-center mb-3'>SIGN UP</h3>
              <div className='form-group mb-3'>
                <label>Full Name</label>
                <input type='text' className='form-control' placeholder='Enter full name' />
              </div>
              <div className='form-group mb-3'>
                <label>Email address</label>
                <input type='email' className='form-control' placeholder='Enter email' />
              </div>
              <div className='form-group mb-3'>
                <label>Password</label>
                <input type='password' className='form-control' placeholder='Enter password' />
              </div>
              <div className='form-group form-check mb-3'>
                <input type='checkbox' className='form-check-input' id='customCheck1' />
                <label className='form-check-label ms-2' htmlFor='customCheck1'>
                  I agree to the terms and conditions
                </label>
              </div>
              <div className='d-grid mb-3'>
              <button type='submit' className='btn  btn-primary'><Link className='text-white' to="/home">Signup</Link></button>
              </div>
              <div className='text-center mb-3'>OR</div>
              <div className='text-center mb-3'>
                <GoogleLogin
                  onSuccess={this.handleGoogleLoginSuccess}
                  onFailure={this.handleGoogleLoginFailure}
                  className='btn btn-outline-primary'
                />
              </div>
              <p className='text-end mt-2'>
                Already have an account? <Link to="/login" className='ms-2'>Sign in</Link>
              </p>
            </form>
          </div>
        </div>
      </GoogleOAuthProvider>
    );
  }
}

export default Signup;
