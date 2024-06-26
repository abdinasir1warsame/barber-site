import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import './login-signup.css';
import { useNavigate } from 'react-router-dom'; // Use useNavigate hook instead of Navigate component
import { UserContext } from '../userContext/usercontext';
import SuccessLoginModal from '../alert-modals/success-login';
import FailedLoginModal from '../alert-modals/failed-login';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const { setUser } = useContext(UserContext);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showFailedModal, setShowFailedModal] = useState(false);
  const navigate = useNavigate();

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
      setShowSuccessModal(true);
      setTimeout(() => {
        setRedirect(true);
      }, 2500);
    } catch (e) {
      setShowFailedModal(true);
    }
  }

  // Scroll to #employee after redirecting
  useEffect(() => {
    if (redirect) {
      // Navigate to home page with the hash
      navigate('/#book', { replace: true });

      // After navigating, wait for DOM to load and scroll to the section
      setTimeout(() => {
        const element = document.getElementById('book');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Adjust the delay as needed to ensure the DOM is ready
    }
  }, [redirect, navigate]);

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
                        Don't have an account?{' '}
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
      {showSuccessModal && <SuccessLoginModal />}
      {/* Failed modal */}
      {showFailedModal && <FailedLoginModal />}
    </div>
  );
};

export default Login;
