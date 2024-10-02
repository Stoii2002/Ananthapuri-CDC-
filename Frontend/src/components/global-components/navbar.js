import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Navbar = () => {
    let publicUrl = process.env.PUBLIC_URL + '/';
    let imgattr = 'logo';

	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
	  axios.get('https://ananthapuricdc.com/api/blogs/')
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
									<li><i className="fa-solid fa-envelope"></i>Email:
									cdc.ananthapuri@gmail.com</li>
									<li><i className="fa-solid fa-phone"></i>Phone:  0471 2554990 , +91 94460 64178
									</li>
	
								</ul>
							</div>
						</div>
						<div className="col-auto">
							<div className="social-links">
								<span className="social-title">Follow Us On:</span>
								<a href="https://www.facebook.com/profile.php?id=61555715290318" target="_blank"><i className="fab fa-facebook-f"></i></a>
								
								<a href="https://www.linkedin.com/company/99358336/admin/feed/posts/ " target="_blank"><i className="fab fa-linkedin-in"></i></a>
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
									
									<Link to="/Home"><img src={publicUrl+"assets/img/logocdc.png" } alt={ imgattr } /></Link>
								</div>
							</div>
							<div className="col-auto ms-xl-auto">
								<nav className="main-menu d-none d-lg-inline-block">
									<ul>
										
										<li><Link to="/">Home</Link></li>
										<li><Link to="/about">About Us</Link></li>
										<li><Link to="/our-school">Our School</Link></li>
										<li className="menu-item-has-children">
											<a href="#">Services</a>	
											<ul className="sub-menu">
												<li><Link to="/Speech-Therapy">Speech Therapy</Link></li>
												<li><Link to="/Occupational-Therapy">Occupational Therapy</Link></li>
												<li><Link to="/Behavioural-Therapy">Behavioural Therapy</Link></li>
												<li><Link to="/Special-education">Special Education</Link></li>	
											</ul>
										</li>
										<li className="menu-item-has-children">
											<a href="#">Conditions</a>	
											<ul className="sub-menu">
												<li><Link to="/ADHD">Attention Deficit Hyperactive Disorder - ADHD</Link></li>
												<li><Link to="/Autism">Autism</Link></li>
												<li><Link to="/Cerebral-Palsy">Cerebral palsy (CP)</Link></li>
												<li><Link to="/Downs-Syndrome">Down Syndrome</Link></li>
												<li><Link to="/Intellectual-Disability">Intellectual disability</Link></li>
												<li><Link to="/Learning-Disability">Learning Disability (LD)</Link></li>

												<li><Link to="/Counduct-Disorder">Conduct Disorder </Link></li>	
												<li><Link to="/Virtual-Autism">Virtual Autism</Link></li>	
												<li><Link to="/Gdd">Global developmental Delay (GDD)</Link></li>	
												<li><Link to="/Adolescent_councelling">Adolescent Counselling </Link></li>	
												<li><Link to="/Stuttering">Stuttering </Link></li>	
												<li><Link to="/Senory">Sensory Processing Disorders</Link></li>	
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
											<Link to="/blogs" className="Morebutton">More</Link>

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
									
									<button type="button" className="icon-btn sideMenuToggler"><i className="fa fa-envelope" style={{ fontSize: '27px' }}></i></button>
									<Link to="contact"  className="th-btn">Enroll Now</Link>
									<button type="button" className="th-menu-toggle d-block d-lg-none"><i className="fas fa-bars"></i></button>
	
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