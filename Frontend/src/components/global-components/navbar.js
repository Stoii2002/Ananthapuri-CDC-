import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';

class Navbar extends Component {
	
    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
			<header className="th-header header-layout1 header-absolute">
			<div className="header-top">
				<div className="container th-container">
					<div className="row justify-content-center justify-content-lg-between align-items-center">
						<div className="col-auto d-none d-md-block">
							<div className="header-links">
								<ul>
									<li className="d-none d-xl-inline-block"><i className="fa-solid fa-location-dot"></i>
										<span>936 Kiehn Route West, United States</span>
									</li>
									<li><i className="fa-solid fa-envelope"></i>Email: <a href="mailto:info@kitar.com">
											info@kitar.com</a></li>
									<li><i className="fa-solid fa-phone"></i>Phone: <a href="tel:+1636422567"> +163-642-2567</a>
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
								<a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
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
									
									<Link to="/"><img src={publicUrl+"assets/img/logo.svg" } alt={ imgattr } /></Link>
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
											<a href="#">Pages</a>
											<ul className="sub-menu">
												<li className="menu-item-has-children">
													<a href="#">Shop</a>
													<ul className="sub-menu">
														<li><a href="shop.html">Shop</a></li>
														<li><a href="shop-details.html">Shop Details</a></li>
														<li><a href="cart.html">Cart Page</a></li>
														<li><a href="checkout.html">Checkout</a></li>
														<li><a href="wishlist.html">Wishlist</a></li>
													</ul>
												</li>
	
												<li><a href="classNamees.html">Our classNamees</a></li>
												<li><a href="className-details.html">className Details</a></li>
												<li><a href="service.html">Services</a></li>
												<li><a href="service-details.html">Services Details</a></li>
												<li><a href="team.html">Our Teacher</a></li>
												<li><a href="team-details.html">Teacher Details </a></li>
												<li><a href="event.html">Our Event</a></li>
												<li><a href="event-details.html">Event Details </a></li>
												<li><a href="error.html">Error Page</a></li>
											</ul>
	
										</li>
										<li><a href="gallery.html">Gallery</a></li>
										<li className="menu-item-has-children">
											<a href="#">Blog</a>
											<ul className="sub-menu">
												<li><a href="blog.html"> Our Blog</a></li>
												<li><a href="blog-details.html">Blog Details</a></li>
											</ul>
										</li>
										<li>
											<a href="contact.html">Contact us</a>
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
        )
    }
}


export default Navbar