import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Layout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <div className="flex-grow">
        <NavBar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
