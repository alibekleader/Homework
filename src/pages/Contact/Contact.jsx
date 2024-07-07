import React from 'react'
import { Link } from "react-router-dom";
import './Contact.scss'
import { Logo_img } from '../../../public';

const Contact = () => {
  return (
    <div className='contact'>
       <div className="hero-contact">
				<div className="container">
          <img src={Logo_img} alt="Logo image" />
					<h1>Contact</h1>
					<p>
						<span>
							<Link className="home_link" to="/">{`Home >`}</Link>
						</span>{" "}
						Contact
					</p>
				</div>
			</div>
    </div>
  )
}

export default Contact