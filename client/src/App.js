import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import Loader from './components/loader/loader';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './pages/layout';
import IndexPage from './pages/indexPage';
import Bookings from './pages/bookings';
import LoginPage from './pages/loginPage';
import SignUpPage from './pages/signUpPage';
import { UserContextProvider } from './components/userContext/usercontext';

// Ensure Axios is configured to include credentials
axios.defaults.baseURL = 'https://barber-site-api.vercel.app';
axios.defaults.withCredentials = true;

function App() {
  AOS.init();
  const [showLoader, setShowLoader] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const isIndexPage = location.pathname === '/';
    const isFirstLoadOrRefresh = isIndexPage && !location.state;

    if (isFirstLoadOrRefresh) {
      setTimeout(() => {
        setShowLoader(false);
      }, 2500); // Show loader for 2.5 seconds
    } else {
      setShowLoader(false);
    }
  }, [location]);

  return (
    <div>
      {showLoader ? (
        <Loader />
      ) : (
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<IndexPage />}></Route>
              <Route path="/Bookings" element={<Bookings />}></Route>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/signUp" element={<SignUpPage />}></Route>
            </Route>
          </Routes>
        </UserContextProvider>
      )}
    </div>
  );
}

export default App;
