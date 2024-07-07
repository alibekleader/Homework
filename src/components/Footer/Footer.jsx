import React from 'react'
import { NavLink } from 'react-router-dom';

import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_box">
        <div className="box2">

        <ul className="furniro_about">
          <li className="furniro_about_1">Furniro.</li>
          <li className="furniro_about_2">400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA</li>
        </ul>


        <ul className='links'>
          <li className='links_1'>Links</li>
          <li className='links_2'>
            <NavLink className="Links_1" to="/">Home</NavLink></li>
          <li className='links_2'> 
            <NavLink className="Links_1" to="/shop">Shop</NavLink> 
          </li>
          <li className='links_2'>
          <NavLink className="Links_1" to="/about">About</NavLink>
          </li>
          <li className='links_2'>
          <NavLink className="Links_1" to="/contact">Contact</NavLink>
          </li>
        </ul>


        <ul className='help'>
          <li className='links_1'>Help</li>
          <li className='help_1'>Payment Options</li>
          <li className='help_1'>Returns</li>
          <li className='help_1'>Privacy Policies</li>
        </ul>

        <ul className='subscribe'>
          <li className='links_1'>Newsletter</li>
          <li className='emails'>
          <input type="email" placeholder='Enter Your Email Address' />
          <button className='subsc'>SUBSCRIBE</button>
          </li>

        </ul>
        </div>
        <p className="line"></p>
        <p className="subtitle">2023 furino. All rights reverved  |  Made by <h1 className='title_11'>SHOHNAZAR</h1> </p>
      </div>
    </div>
  )
}

export default Footer