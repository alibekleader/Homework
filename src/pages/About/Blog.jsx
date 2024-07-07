import React from 'react'
import { Link } from "react-router-dom";
import './Blog.scss'
import { Logo_img } from '../../../public';

const Blog = () => {
  return (
    <div className='blog'>
      <div className="hero-blog">
				<div className="container">
          <img src={Logo_img} alt="Logo_img" />
					<h1>Blog</h1>
					<p>
						<span>
							<Link className="home_link" to="/">{`Home >`}</Link>
						</span>{" "}
						Blog
					</p>
				</div>
			</div>
    </div>
  )
}

export default Blog