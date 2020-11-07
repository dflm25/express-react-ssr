/**
 * Site index component
 */

import React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'

// compoenents
import Auth from '../../layouts/Auth';

// services
import { login } from '../../services/auth';

const Login = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, errors } = useForm();
  const { isAuthenticated } = useSelector(state => state.auth);
  const router = useRouter();

  const onSubmit = async data => {
    dispatch(login(data))
  }

  if (isAuthenticated) {
    router.push('/admin');
  }

  return (
    <Auth>
      <form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" name="email" ref={register({ required: true })} tabIndex="1" required autoFocus />
          {errors.email && <div className="invalid-feedback">Please fill in your email</div>}
        </div>
        <div className="form-group">
          <label htmlFor="password" className="control-label">Password</label>
          <input type="password" className="form-control" name="password" tabIndex="2" required ref={register({ required: true })} />
          {errors.email && <div className="invalid-feedback">Please fill in your password</div>}
        </div>
        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" name="remember" className="custom-control-input" tabIndex="3" id="remember-me" />
            <label className="custom-control-label" htmlFor="remember-me">Remember Me</label>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-lg btn-block" tabIndex="4">
            Login
          </button>
        </div>
      </form>
    </Auth>    
  );
}

export default Login;