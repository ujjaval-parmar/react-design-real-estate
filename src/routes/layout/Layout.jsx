import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import './layout.scss'

const Layout = () => {
  return (
    <div className='layout'>

      <header className='navBar'>
        <Navbar />
      </header>

      <div className="content">
        <Outlet />
      </div>

    </div>
  )
}

export default Layout