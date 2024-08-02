import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';


class Login extends PureComponent {
  handleGoogleLoginSuccess = (response) => {
    console.log(response);
  };

  handleGoogleLoginFailure = (response) => {
    console.error(response);
  };

  render() {
    return (
      <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
        <div className='login-template d-flex justify-content-center align-items-center vh-100 200-w bg-primary'>
          <div className='form-container border p-5 rounded bg-white'>
            <div className='card p-4'>
              <form>
                <h3 className='text-center'>LOGIN</h3>
                <div className='form-group mb-3'>
                  <label>Email address</label>
                  <input type='email' className='form-control' placeholder='Enter email' />
                </div>
                <div className='form-group mb-3'>
                  <label>Password</label>
                  <input type='password' className='form-control' placeholder='Enter password' />
                </div>
                <div className='form-group form-check mb-3'>
                  <input type='checkbox' className='form-check-input custom-checkbox' id='customCheck1' />
                  <label className='form-check-label' htmlFor='customCheck1'>Remember me</label>
                </div>
                <div className='d-grid mb-3'>
                  <button type='submit' className='btn btn-primary'>
                    <Link className='text-white' to="/home">Login</Link>
                  </button>
                </div>
                <div className='text-center mb-3'>OR</div>
                <div className='text-center'>
                  <GoogleLogin
                    onSuccess={this.handleGoogleLoginSuccess}
                    onFailure={this.handleGoogleLoginFailure}
                    className='btn btn-outline-primary'
                  />
                </div>
                <p className='text-end mt-2'>
                  <Link to="/forgot-password">Forgot Password?</Link>
                  <Link to="/signup" className='ms-2'>Sign up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </GoogleOAuthProvider>
    );
  }
}

export default Login;
