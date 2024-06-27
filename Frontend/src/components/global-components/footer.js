import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v1 extends Component {

	componentDidMount() {

		const $ = window.$;

		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/theme.js";

		document.body.appendChild(minscript);

		$('.go-top').find('a').on('click', function () {
			$(window).scrollTop(0);
		});
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = "Footer logo"

		return (
			<div>
				<footer className="footer-wrapper footer-layout1">
                <div className="container">
                    <div className="widget-area">
                        <div className="row justify-content-between">
                            <div className="col-md-6 col-lg-6 col-xl-auto">
                                <div className="widget footer-widget">
                                    <div className="th-widget-about">
                                        <div className="about-logo">
                                            <a href="home-kindergarten-school.html"><img src="assets/img/logo-white.svg" alt="kitar "/></a>
                                        </div>
                                        <p className="about-text">Join us in shaping bright futures! Schedule a tour today to witness why families nationwide choose us as their go-to preschool.</p>
                                        <div className="th-widget-contact">
                                            <p className="footer-info"><i className="fas fa-map-marker-alt"></i>936 Kiehn Route West, United States</p>
                                            <p className="footer-info"><i className="fas fa-envelope"></i><a className="text-inherit" href="mailto:info@kitar.com">Email: info@kitar.com</a></p>
                                            <p className="footer-info"><i className="fa-sharp fa-solid fa-phone"></i><a className="text-inherit" href="tel:+1636422567">Phone: +163-642-2567</a></p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">Quick Links</h3>
                                    <div className="menu-all-pages-container">
                                        <ul className="menu">

                                            <li><a href="about.html">About Us</a></li>
                                            <li><a href="classNamees.html">Our classNamees</a></li>
                                            <li><a href="contact.html">Terms Of Use</a></li>
                                            <li><a href="team.html">Expert Teacher</a></li>
                                            <li><a href="contact.html">Contact Us</a></li>
                                            <li><a href="service.html">Our Services</a></li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                            <div className="col-md-6 col-xl-auto">
                                <div className="widget widget_nav_menu footer-widget">
                                    <h3 className="widget_title">Categories</h3>
                                    <div className="menu-all-pages-container">
                                        <ul className="menu">
                                            <li><a href="classNamees.html">Painting</a></li>
                                            <li><a href="classNamees.html">Drawing</a></li>
                                            <li><a href="classNamees.html">Music Learning</a></li>
                                            <li><a href="classNamees.html"> Choreography</a></li>
                                            <li><a href="classNamees.html">Sports,Games</a></li>
                                            <li><a href="classNamees.html">Science className</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-auto">
                                <div className="widget footer-widget">
                                    <h3 className="widget_title">Recent Posts</h3>
                                    <div className="recent-post-wrap">
                                        <div className="recent-post style2">
                                            <div className="media-img">
                                                <a href="blog-details.html"><img src="assets/img/blog/recent-post-1-4.jpg" alt="Blog Image"/></a>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="post-title"><a className="text-inherit" href="blog-details.html">Virtual Learning Tools Transform
                                                        Early</a></h4>
                                                <div className="recent-post-meta">
                                                    <a href="blog.html"><i className="fa-solid fa-calendar-days"></i>24 Mayil , 2024</a>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="recent-post style2">
                                            <div className="media-img">
                                                <a href="blog-details.html"><img src="assets/img/blog/recent-post-1-5.jpg" alt="Blog Image"/></a>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="post-title"><a className="text-inherit" href="blog-details.html">Kindergarten classNamees Forge Cross</a></h4>
                                                <div className="recent-post-meta">
                                                    <a href="blog.html"><i className="fa-solid fa-calendar-days"></i>30 Mayil , 2024</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="copyright-wrap text-center">
                    <p className="copyright-text">Copyright <i className="fal fa-copyright"></i> 2024 <a href="home-kindergarten-school.html">kitar </a>. All Rights Reserved.</p>
                </div>
                <div className="shape-mockup shape1 movingX d-none d-xxl-block" data-top="32%" data-left="2%"><img src="assets/img/shape/shape_4.png" alt="shape"/>
                </div>
                <div className="shape-mockup shape1 movingX d-none d-xxl-block" data-top="0%" data-right="4%"><img src="assets/img/shape/shape_5.png" alt="shape"/>
                </div>
            </footer>
			</div>


		)
	}
}


export default Footer_v1