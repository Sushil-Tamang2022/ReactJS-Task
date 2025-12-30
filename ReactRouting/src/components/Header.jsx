import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"
const Header = () => {
  return (
    <div className='navbar'>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/product">Product</NavLink>
    </div>
  )
}

export default Header
