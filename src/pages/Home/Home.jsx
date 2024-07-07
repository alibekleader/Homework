import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Products from "./Products";
import { Dining , Living , Bedroom , Frame , Right_line , Room_2 , Room_3 , furnitures_img } from "../../../public"
import './Home.scss'

const Home = () => {
  const [products, setProducts] = useState([]);
	const [showAllCards, setShowAllCards] = useState(false);


  // FETCH PRODUCT

  const fetchProducts = async () => {
		try {
			const res = await axios.get(`http://localhost:3000/products`);
			const data = await res.data;
			setProducts(data);
		} catch (error) {
			console.log(error);
		}
	};


  // TOGGLE PRODUCT

  const toggleProductCards = () => {
		setShowAllCards((prev) => !prev);
	};


  // useEffect function

  useEffect(() => {
		fetchProducts();
	}, []);
   


  return (
    <div className='home'>

      {/* HERO SECTION */}

      <div className="hero">
        <div className="hero_box">
           <p className="hero_subtitle">New Arrival</p>
           <h2 className='hero_title'>Discover Our <br /> New Collection</h2>
           <p className="hero_descr">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit tellus, luctus nec ullamcorper mattis.</p>
           <button className='btn_home'>BUY NOW</button>
       </div>
      </div>

      {/* BROWSER SECTION */}

      <div className="browser_section">
         <div className="browser_section_header">
            <h2 className="title">Browse The Range</h2>
            <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
         </div>
         <ul className="browser_section_images">
           <li className='images_row'>
            <img src={Dining} alt='Dining image' />
            <h6 className="title">Dining</h6>
           </li>
           <li className='images_row'>
            <img src={Living} alt="Living image" />
            <h6 className="title">Living</h6>
           </li>
           <li className='images_row'>
            <img src={Bedroom} alt="Bedroom image" />
            <h6 className="title">Bedroom</h6>
           </li>
         </ul>
      </div>

      {/* PRODUCTS SECTION */}

      <section className='products_section'>
        <h2 className="title">Our Products</h2>

        {showAllCards ? (
					<div className="wrapper">
						{products.map((product, index) => (
							<Products key={index} product={product} />
						))}

						{products.map((product, index) => (
							<Products key={index + products.length} product={product} />
						))}
					</div>
				) : (
					<div className="wrapper">
						{products.map((product, index) => (
							<Products key={index} product={product} />
						))}
					</div>
				)}
				<button className="showmore" onClick={toggleProductCards}>
					{showAllCards ? "Show Less" : "Show More"}
				</button>

      </section>
      
      {/* Inspiration SECTION */}

      <section className='inspiration_section'>
        <div className="container">
        <div className="box1">
        <div className="details">
          <h3 className="title">50+ Beautiful rooms inspiration</h3>
          <p className="subtitle">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
          <button className="btn_77">Explore More</button>
        </div>

        <div className="rooms_details">
          <div className="img1">
            <div className="rooms_about">
              <img src={Frame} alt="frame image" />
              <p className="subtitle">Inner Peace</p>
            </div>
            <div className="right_box"><img src={Right_line} /></div>
          </div>
          <img src={Room_2} alt="room image"  className='img22'/>
          <img src={Room_3} alt="room image" className='img33' />

        </div>
        
       </div>
        </div>
      </section>

      {/* FuniroFurniture SECTION */}

      <section className='Furniture_section'>
        <div className="browser_section_header">
            <p className="subtitle">Share your setup with</p>
            <h2 className="title">#FuniroFurniture</h2>
         </div>
         <img src={furnitures_img} alt="furnitures images" className='furnitures_img' />
      </section>
      <p className="line1"></p>
    </div>
  

  )
}

export default Home