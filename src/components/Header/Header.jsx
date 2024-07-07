import React from 'react'
import { Link , NavLink } from 'react-router-dom';
import { account , Search , heart , shopping_cart , Logo } from '../../../public';
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <div className="header_box">
      <Link to="/"><img src={Logo} alt="This is logo image" /></Link>
      <div className="Links">
      <NavLink className="Links_1" to="/">Home</NavLink>
      <NavLink className="Links_1" to="/shop">Shop</NavLink>
      <NavLink className="Links_1" to="/about">About</NavLink>
      <NavLink className="Links_1" to="/contact">Contact</NavLink>
      </div>
      <div className="search_row">
       <NavLink to=""><img src={account} alt="This is account image" /></NavLink>
       <NavLink to=""><img src={Search} alt="This is search image" /></NavLink>
       <NavLink to=""><img src={heart} alt="This is heart image" /></NavLink>
       <NavLink to=""><img src={shopping_cart} /></NavLink>
      </div>
      </div>
      
      
    </div>
  )
}

export default Header