import React from 'react';
import { Link } from 'react-router-dom';
import OffCanvass from '../component/OffCanvass';
import { BsTelephone } from "react-icons/bs";
import logo from "../assets/logo.jpeg";
import "../pages/Styles/Navbar.css";
import { NavLink } from "react-router-dom";





const NavBar = () => {
  return (
    <nav className='container nav-wrapper d-flex justify-content-between align-items-center border'>
        <div className=' nav-logo-wrapper'>
             {/* <h2>Nav logo</h2>  */}
        { <img src={logo} alt="" className='w-25' /> }
            </div>
        <ul className='d-lg-flex pt-2 align-items-center gap-4  list-unstyled d-none'>
          <li>
          <NavLink to="/" className="text-decoration-none">
                {({ isActive }) => (
                  <span className={`${isActive ? "is-active-link" : ""} `}>
                    Home
                  </span>
                )}
              </NavLink>
          </li>
          <li>
          <NavLink to='/live-stream' className="text-decoration-none">
                {({ isActive }) => (
                  <span className={`${isActive ? "is-active-link" : ""} `}>
                    Live stream
                  </span>
                )}
              </NavLink>
          </li>
          <li>
          <NavLink to='/give' className="text-decoration-none">
                {({ isActive }) => (
                  <span className={`${isActive ? "is-active-link" : ""} `}>
                    Give
                  </span>
                )}
              </NavLink>
          </li>
          <li>
          <NavLink to='/the-church' className="text-decoration-none">
                {({ isActive }) => (
                  <span className={`${isActive ? "is-active-link" : ""} `}>
                    The Church
                  </span>
                )}
              </NavLink>
          </li>
          <li>
          <NavLink to='/Resources' className="text-decoration-none">
                {({ isActive }) => (
                  <span className={`${isActive ? "is-active-link" : ""} `}>
                    Resources
                  </span>
                )}
              </NavLink>
          </li>
            <li> <Link className='text-decoration-none btn ' to='/Contact-us'> <span id='contact'>Contact Us</span> <BsTelephone color='white'/></Link> </li>
        </ul>
        <section className='d-lg-none'>
        {['end'].map((placement, idx) => (
        <OffCanvass key={idx} placement={placement} name={placement} />
      ))}
        </section>
    </nav>
  )
}

export default NavBar