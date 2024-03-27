import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Layout() {
  return (
    <div className='flex flex-col'>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout
