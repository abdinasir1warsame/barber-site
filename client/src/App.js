import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import Loader from './components/loader/loader';

import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './pages/layout';
import IndexPage from './pages/indexPage';
import LoginPage from './pages/loginPage';
import SignUpPage from './pages/signUpPage';
import { UserContextProvider } from './components/userContext/usercontext';
axios.defaults.baseURL = 'barber-site-api.vercel.app';
axios.defaults.withCredentials = true;

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Check if it's the index page
    const isIndexPage = location.pathname === '/'; // Assuming index route is "/"
    // Check if it's the first load or refresh of the index page
    const isFirstLoadOrRefresh = isIndexPage && !location.state;

    if (isFirstLoadOrRefresh) {
      setTimeout(() => {
        setShowLoader(false);
      }, 5000); // 5 seconds
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
