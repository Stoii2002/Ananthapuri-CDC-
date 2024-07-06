import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Navbar = () => {
    let publicUrl = process.env.PUBLIC_URL + '/';
    let imgattr = 'logo';

	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
	  axios.get('http://localhost:8000/api/blogs/')
		.then(response => {
		  setBlogs(response.data);
		})
		.catch(error => {
		  console.error(error);
		});
	}, []);
    return(
			<header className="th-header header-layout1 header-absolute">
			<div className="header-top">
				<div className="container th-container">
					<div className="row justify-content-center justify-content-lg-between align-items-center">
						<div className="col-auto d-none d-md-block">
							<div className="header-links">
								<ul>
									<li className="d-none d-xl-inline-block"><i className="fa-solid fa-location-dot"></i>
										<span>Medical College, Chalakkuzhi, Trivandrum, Kerala 695011</span>
									</li>
									<li><i className="fa-solid fa-envelope"></i>Email: <a href="mailto:info@kitar.com">
									cdc.ananthapuri@gmail.com</a></li>
									<li><i className="fa-solid fa-phone"></i>Phone: <a href="tel:+1636422567"> 0471 2554990, +94460 64178</a>
									</li>
	
								</ul>
							</div>
						</div>
						<div className="col-auto">
							<div className="social-links">
								<span className="social-title">Follow Us On:</span>
								<a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
								<a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
								<a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
								<a href="https://www.instagram.com/ananthapuricdc?utm_source=ig_web_button_share_sheet&amp;igsh=ZDNlZDc0MzIxNw==" target="_blank"><i className="fab fa-instagram"></i></a>
								
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="sticky-wrapper">
				{/* <!-- Main Menu Area --> */}
				<div className="container th-container">
					<div className="menu-area">
						<div className="row align-items-center justify-content-between">
							<div className="col-auto">
								<div className="header-logo">
									
									<Link to="/"><img src={publicUrl+"assets/img/logocdc.png" } alt={ imgattr } /></Link>
								</div>
							</div>
							<div className="col-auto ms-xl-auto">
								<nav className="main-menu d-none d-lg-inline-block">
									<ul>
										<li className="menu-item-has-children">
										<li><Link to="/">Home</Link></li>
											<ul className="sub-menu">
												<li><a href="home-kindergarten-school.html">Home Kindergarten School</a></li>
												<li><a href="home-kindergarten.html">Home kindergarten</a></li>
												<li><a href="home-baby-care.html">Home Baby Care</a></li>
	
											</ul>
										</li>
										<li><Link to="/about">About Us</Link></li>
										<li><Link to="/our-school">Our School</Link></li>
										<li className="menu-item-has-children">
											<a href="#">Disorders</a>
											<ul className="sub-menu">
												<li><Link to="/ADHD">ADHD</Link></li>
												<li><Link to="/Autism">Autism</Link></li>
												<li><Link to="/Cerebral-Palsy">Cerebral Palsy</Link></li>
												<li><Link to="/Downs-Syndrome">Downs Syndrome</Link></li>
												<li><Link to="/Intellectual-Disability">Intellectual disability</Link></li>
												<li><Link to="/Learning-Disability">Learning Disability</Link></li>	
											</ul>
										</li>
										<li><Link to="/Gallery">Gallery</Link></li>
										<li className="menu-item-has-children">
											<a href="#">Blog</a>
											<ul className="sub-menu">
											{blogs.map(blog => (
												<li key={blog.id}>
												<a href={`/blog/${blog.slug}`}>{blog.name}</a>
												</li>
											))}
											</ul>
										</li>
										<li>
										<Link to="/contact">Contact</Link>
										</li>

										
									</ul>
								</nav>
							</div>
							<div className="col-auto">
								<div className="header-button">
									
									<button type="button" className="icon-btn sideMenuToggler"><i className="fa-solid fa-cart-shopping"></i> <span className="badge">5</span></button>
									<a href="contact.html" className="th-btn">Enroll Now</a>
									<button type="button" className="th-menu-toggle d-block d-lg-none"><i className="far fa-bars"></i></button>
	
								</div>
							</div>
						</div>
					
					</div>
				</div>
			</div>
		</header>
    );
}

export default Navbar;