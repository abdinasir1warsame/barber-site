import React, { useState, useContext } from 'react';
import axios from 'axios';
import './login-signup.css';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../userContext/usercontext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);
  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      const response = await axios.post(
        '/login',
        { email, password },
        { withCredentials: true }
      );
      const userData = response.data;
      setUser(userData);
      alert('login succesful');
      setRedirect(true);
    } catch (e) {
      alert('login failed');
    }
  }
  if (redirect) {
    return <Navigate to={'/'} />;
  }
  return (
    <div className="">
      <section className="vh-100 bg-image ">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3 ">
          <div className="container vh-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: '15px' }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Login to Your Account
                    </h2>

                    <form onSubmit={handleLoginSubmit}>
                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                          value={email}
                          onChange={(ev) => setEmail(ev.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Example3cg">
                          Your Email
                        </label>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                          value={password}
                          onChange={(ev) => setPassword(ev.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Example4cg">
                          Password
                        </label>
                      </div>

                      <p className="text-center  mb-4 ">
                        Dont have an account?{' '}
                        <a href="/signUp" className="fw-bold login-here-text">
                          <u>Register here</u>
                        </a>
                      </p>

                      <div className="d-flex justify-content-center ">
                        <button
                          type="submit"
                          data-mdb-button-init
                          data-mdb-ripple-init
                          className="btn register-btn btn-block btn-lg mt-2  "
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
