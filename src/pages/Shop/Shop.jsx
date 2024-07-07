import React, { useEffect, useState } from "react";
import "./Shop.scss";
import { Link } from "react-router-dom";
import { view_list, big_round, filtering, guarantee, shipping, trophy, customer_support , Logo_img } from "../../../public/index";
import Products from "../Home/Products";
import axios from "axios";

const Shop = () => {
	const [products, setProducts] = useState([]);

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

  // useEffect

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<div className="shop">
      {/* HERO SHOP */}
			<div className="hero-shop">
				<div className="container">
          <img src={Logo_img} alt="Logo image" />
					<h1>Shop</h1>
					<p>
						<span>
							<Link className="home_link" to="/">{`Home >`}</Link>
						</span>{" "}
						Shop
					</p>
				</div>
			</div>

      {/* FILTER SHOP */}

			<div className="filter-sort">
				<div className="container filter-sort">
					<div className="filter">
						<img src={filtering} alt="Image" />
						<span>Filter</span>
						<img src={big_round} alt="Image" />
						<img src={view_list} alt="Image" />
						<div className="line"></div>
						<p>Showing 1–16 of 32 results</p>
					</div>
					<div className="sort">
						<p>Show</p>
						<input
							style={{ width: "55px", height: "55px" }}
							type="text"
							name="show"
							id="show"
							placeholder="16"
						/>
						<p>Sort by</p>
						<select name="sort" id="sort">
							<option value="sort">Sort</option>
							<option value="sort">Cheap</option>
							<option value="sort">Expensive</option>
						</select>
					</div>
				</div>
			</div>

      {/* PRODUCTS */}

			<div className="products container">
				<div className="wrapper all-products ">
					{products.map((product, index) => (
						<Products key={index} product={product} />
					))}

					{products.map((product, index) => (
						<Products key={index} product={product} />
					))}

          {/* PAGINATION */}

					<div className="pagination">
						<button>1</button>
						<button>2</button>
						<button>3</button>
						<button>Next</button>
					</div>
				</div>
			</div>

      {/* SERVICES */}

      <div className="services">
        <div className="container services">
          <div className="service">
            <img src={trophy} alt="trophy image" />
            <div className="s-text">
              <h4>High Quality</h4>
              <p>crafted from top materials</p>
            </div>
          </div>

          <div className="service">
            <img src={guarantee} alt="guarantee image" />
            <div className="s-text">
              <h4>Warranty Protection</h4>
              <p>Over 2 years</p>
            </div>
          </div>

          <div className="service">
            <img src={shipping} alt="shipping image" />
            <div className="s-text">
              <h4>Free Shipping</h4>
              <p>Order over 150 $</p>
            </div>
          </div>

          <div className="service">
            <img src={customer_support} alt="customer support image" />
            <div className="s-text">
              <h4>24 / 7 Support</h4>
              <p>Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
		</div>
	);
};

export default Shop;
