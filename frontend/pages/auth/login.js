/**
 * Site index component
 */

import React from 'react';
import Auth from '../../layouts/Auth';

const Login = () => {

  return (
    <Auth>
      <form method="POST" action="#" className="needs-validation" novalidate="">
        <div className="form-group">
          <label for="email">Email</label>
          <input id="email" type="email" className="form-control" name="email" tabindex="1" required autofocus />
          <div className="invalid-feedback">Please fill in your email</div>
        </div>
        <div className="form-group">
          <label for="password" className="control-label">Password</label>
          <input id="password" type="password" className="form-control" name="password" tabindex="2" required />
          <div className="invalid-feedback">please fill in your password</div>
        </div>
        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" name="remember" className="custom-control-input" tabindex="3" id="remember-me" />
            <label className="custom-control-label" for="remember-me">Remember Me</label>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-lg btn-block" tabindex="4">
            Login
          </button>
        </div>
      </form>
    </Auth>    
  );
}

export default Login;