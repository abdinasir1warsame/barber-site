import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/navBar/navBar';
import './index.css';

const Layout = () => {
  return (
    <div className="layout">
      <NavBar /> <Outlet />
    </div>
  );
};
export default Layout;
