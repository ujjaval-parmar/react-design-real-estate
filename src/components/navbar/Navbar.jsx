import React, { useState } from 'react'
import './navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [showNav, setShowNav] = useState(false);

  const user = true;

  return (
    <nav>

      <div className="left">
        <Link to="/" className='logo'>
          <img src="./logo.png" alt="logo" />
          <span>Real-Estate</span>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/list">List</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Agents</Link>
      </div>

      <div className="right">
        {user ? (<div className='user'>
            <img src="https://avatars.githubusercontent.com/u/154329143?v=4" alt="user" />
            <span>Ujjaval Parmar</span>
            <Link to='/profile' className='profileBtn'><div className="notification">3</div>
            <span>Profile</span>
            </Link>
        </div>) : (
          <>
            <a href="/">Sign in</a>
            <a href="/" className='register'>Sign up</a>
          </>
        )}

        <div className="menuIcon" onClick={() => setShowNav(!showNav)}>
          <img src="./menu.png" alt="menu" />
        </div>

        <div className={`menu ${showNav ? 'showNav' : ''}`}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign In</a>
          <a href="/">Sign Up</a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar